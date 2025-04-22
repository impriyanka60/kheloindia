import React from "react";
import { useLocation } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ThankYou() {
  const location = useLocation();
  const category = location.state?.category;

  const contactInfo = {
    food: "🍽️ Food Department: food-support@nu.edu | +91 9876543210",
    travel: "🚌 Transport Department: travel@nu.edu | +91 9123456780",
    logging: "🏨 Hostel Admin: hostel@nu.edu | +91 9988776655",
    security: "🛡️ Security Desk: security@nu.edu | +91 9090909090",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 px-4">
      <div className="backdrop-blur-md bg-white/70 border border-green-200 rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center animate-fade-in-down transition-all duration-500">
        <div className="flex justify-center mb-5">
          <CheckCircleIcon className="h-20 w-20 text-green-500 drop-shadow-lg" />
        </div>

        <h1 className="text-4xl font-extrabold text-green-700 mb-3 drop-shadow-sm">
          Thank You!
        </h1>
        <p className="text-gray-700 text-base mb-6 leading-relaxed">
          Your feedback has been submitted successfully. We appreciate your input and will respond as quickly as possible.
        </p>

        {category && (
          <div className="bg-green-100/80 border border-green-300 rounded-xl p-4 text-left shadow-sm transition-all duration-300">
            <h2 className="font-semibold text-green-800 mb-1 text-lg">
              📞 Contact for <span className="capitalize">{category}</span> issues:
            </h2>
            <p className="text-gray-800 text-sm">{contactInfo[category]}</p>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-6 italic">
          Feel free to reach out if it’s urgent!
        </p>
      </div>
    </div>
  );
}
