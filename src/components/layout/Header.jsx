import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import axios from "axios";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";

export default function Header() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/gender-health-care/signingoogle", {
          withCredentials: true,
          timeout: 5000,
        });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/gender-health-care/logout", {}, {
        withCredentials: true,
      });
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch vụ", path: "/#services" },
    { name: "Đặt lịch", path: "/booking" },
    { name: "Blog", path: "/blog" },
  ];

  const handleScroll = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-40">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">GH</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Gender Health Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={(e) => path.startsWith("#") && handleScroll(e, path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600",
                  location.pathname === path 
                    ? "text-purple-600" 
                    : "text-gray-700"
                )}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.imageUrl}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {user.name}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogOut size={16} className="mr-1" />
                  <span className="hidden sm:inline">Đăng xuất</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.location.href = "/api/oauth2/authorization/google"}
                >
                  Đăng nhập
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.location.href = "/register"}
                >
                  Đăng ký
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {menuItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  onClick={(e) => {
                    if (path.startsWith("#")) handleScroll(e, path);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === path
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}