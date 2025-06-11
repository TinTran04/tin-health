import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useUser } from "../../UserContext";
import { Card, CardBody } from "../ui/Card";
import Button from "../ui/Button";
import Alert from "../ui/Alert";

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  className = "",
}) {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showAlert, setShowAlert] = useState(false);

  const handleViewDetails = () => {
    if (!user) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else if (link) {
      navigate(link);
    }
  };

  return (
    <div className={`group ${className}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-purple-200">
        <CardBody className="flex flex-col h-full p-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            {typeof icon === "string" && icon.length <= 2 ? (
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            ) : (
              <img
                src={icon}
                alt={`${title} icon`}
                className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 text-center space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <Button
              variant="ghost"
              className="w-full group-hover:bg-purple-50 group-hover:text-purple-600"
              onClick={handleViewDetails}
            >
              Tìm hiểu thêm
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Alert for non-authenticated users */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 animate-slide-up">
          <Alert
            variant="warning"
            onClose={() => setShowAlert(false)}
          >
            Vui lòng đăng nhập để sử dụng dịch vụ này
          </Alert>
        </div>
      )}
    </div>
  );
}