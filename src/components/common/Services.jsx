import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Theo dõi chu kỳ sinh sản",
    description: "Theo dõi chu kỳ kinh nguyệt, nhắc nhở thời gian rụng trứng, khả năng mang thai và uống thuốc tránh thai.",
    icon: "📅",
    link: "/menstrual-cycle",
  },
  {
    title: "Đặt lịch tư vấn trực tuyến",
    description: "Cho phép người dùng đặt lịch hẹn tư vấn với chuyên viên y tế qua hệ thống trực tuyến.",
    icon: "📞",
    link: "/booking",
  },
  {
    title: "Dịch vụ xét nghiệm STIs",
    description: "Quản lý quá trình xét nghiệm các bệnh lây truyền qua đường tình dục từ đặt lịch đến trả kết quả.",
    icon: "🧪",
    link: "/booking/sti",
  },
  {
    title: "Hỏi đáp với tư vấn viên",
    description: "Gửi câu hỏi và nhận giải đáp từ tư vấn viên chuyên môn về mọi vấn đề sức khỏe giới tính.",
    icon: "💬",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dịch vụ chăm sóc sức khỏe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp các dịch vụ chăm sóc sức khỏe giới tính toàn diện, 
            chuyên nghiệp và bảo mật cho mọi đối tượng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}