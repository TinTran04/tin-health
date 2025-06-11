import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Layout from "../components/layout/Layout";
import Services from "../components/common/Services";
import UserGroups from "../components/userGroups";
import Button from "../components/ui/Button";

const slides = [
  {
    id: 1,
    title: "Chăm sóc sức khỏe giới tính toàn diện",
    description: "Theo dõi chu kỳ sinh sản và nhận tư vấn y tế ngay trên ứng dụng.",
    bgImage: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1470&q=80')",
    cta: "Khám phá ngay",
    ctaLink: "#services"
  },
  {
    id: 2,
    title: "Tư vấn và hỗ trợ chuyên nghiệp",
    description: "Đội ngũ chuyên gia luôn sẵn sàng tư vấn và đồng hành cùng bạn mọi lúc mọi nơi.",
    bgImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1470&q=80')",
    cta: "Đặt lịch tư vấn",
    ctaLink: "/booking"
  },
  {
    id: 3,
    title: "Dịch vụ đặt lịch dễ dàng",
    description: "Đặt lịch nhanh chóng, tiện lợi ngay trên ứng dụng của chúng tôi.",
    bgImage: "url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1470&q=80')",
    cta: "Bắt đầu ngay",
    ctaLink: "/register"
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
    <Layout>
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-full relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), ${slide.bgImage}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container-responsive h-full flex items-center">
                <div className="max-w-2xl text-white animate-fade-in">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={(e) => {
                        if (slide.ctaLink.startsWith("#")) {
                          handleScroll(e, slide.ctaLink);
                        } else {
                          window.location.href = slide.ctaLink;
                        }
                      }}
                      className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                    >
                      {slide.cta}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-purple-600"
                    >
                      <Play size={20} className="mr-2" />
                      Xem video giới thiệu
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={prevSlide}
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full p-3"
          >
            <ChevronLeft size={24} />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-4 flex items-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={nextSlide}
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full p-3"
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
          >
            {isAutoPlaying ? "Tạm dừng" : "Phát"}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white">
        <Services />
      </section>

      {/* User Groups Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Chăm sóc theo từng nhóm đối tượng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dịch vụ chăm sóc sức khỏe được thiết kế riêng cho từng nhóm tuổi và giới tính, 
              đảm bảo sự phù hợp và hiệu quả cao nhất.
            </p>
          </div>
          <UserGroups />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sẵn sàng bắt đầu hành trình chăm sóc sức khỏe?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận được sự chăm sóc tốt nhất từ đội ngũ chuyên gia của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = "/register"}
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Đăng ký miễn phí
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => window.location.href = "/booking"}
            >
              Đặt lịch tư vấn
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}