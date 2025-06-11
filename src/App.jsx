import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./UserContext";
import ConsultationBooking from "./components/ConsultationBooking";
import STIBookingPage from "./pages/STIBookingPage";
import Register from "./components/register";
import UserGroupDetail from "./components/UserGroupDetail";
import MenstrualCyclePage from "./pages/MenstrualCyclePage";
import LoadingSpinner from "./components/ui/LoadingSpinner";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkBackendAndFetchUser = async () => {
      try {
        const res = await axios.get("/api/gender-health-care/signingoogle", {
          withCredentials: true,
          timeout: 5000,
        });
        setUser(res.data.user);
      } catch (err) {
        console.warn("Backend server not available or user not authenticated:", err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkBackendAndFetchUser();
  }, []);

  if (loading) {
    return (
      <LoadingSpinner 
        fullScreen 
        size="xl" 
        text="Đang tải ứng dụng..." 
      />
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/booking" element={<ConsultationBooking />} />
          <Route path="/menstrual-cycle" element={<MenstrualCyclePage />} />
          <Route path="/booking/sti" element={<STIBookingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/groups/:groupSlug" element={<UserGroupDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}