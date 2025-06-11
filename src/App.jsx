import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";   // Đã import BlogPost
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./UserContext";
import ConsultationBooking from "./components/ConsultationBooking";
import STIBookingPage from "./pages/STIBookingPage";
import Services from "./components/Services";
import Register from "./components/register";
import UserGroupDetail from "./components/UserGroupDetail";
import MenstrualCyclePage from "./pages/MenstrualCyclePage";


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we're in development and backend might not be available
    const checkBackendAndFetchUser = async () => {
      try {
        const res = await axios.get("/api/gender-health-care/signingoogle", {
          withCredentials: true,
          timeout: 5000, // 5 second timeout
        });
        setUser(res.data.user);
      } catch (err) {
        console.warn("Backend server not available or user not authenticated:", err.message);
        // Set user to null instead of throwing error
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkBackendAndFetchUser();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />  {/* THÊM DÒNG NÀY */}
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