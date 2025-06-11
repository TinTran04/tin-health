import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">GH</span>
              </div>
              <span className="font-bold text-xl text-white">
                Gender Health Care
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Phần mềm quản lý dịch vụ chăm sóc sức khỏe giới tính - Nâng cao chất lượng chăm sóc sức khỏe cho cộng đồng.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {[
                { name: "Trang chủ", path: "/" },
                { name: "Dịch vụ", path: "/#services" },
                { name: "Đặt lịch", path: "/booking" },
                { name: "Blog", path: "/blog" },
              ].map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a
                  href="mailto:support@genderhealthcare.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  support@genderhealthcare.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <a
                  href="tel:19001234"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  1900 1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Mạng xã hội</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Gender Health Care. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Chính sách bảo mật
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}