import React, { useState } from "react";
import nu from "../assets/nu.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function FeedbackForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    anonymous: false,
    category: "",
    subCategory: "",
    description: "",
  });

  const categoryOptions = {
    food: ["Quality", "Quantity", "Hygiene"],
    travel: ["Transport Delay", "Overcrowding", "Cleanliness"],
    logging: ["Room Cleanliness", "Facilities", "Water Supply"],
    security: ["Theft", "Violence", "Lost Items"],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you", { state: { category: formData.category } });
  };

  return (
    <div className="min-h-screen bg-orange-700 flex items-center justify-center px-4">
      {/* Form Card */}
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl mx-auto mt-10 p-8 border border-gray-200 w-[95%]">
        
        {/* Logos section */}
        <div className="flex justify-between items-center mb-6">
          <img src={nu} alt="Left Logo" className="h-10 w-auto" />
          <img src={logo} alt="Right Logo" className="h-10 w-auto" />
        </div>

        {/* Heading below logos */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
          Feedback / Grievance Form By Nalanda Administration
        </h1>

        <p className="text-base text-gray-600 mb-6 text-center">
          Kindly fill out the form so that we can help you resolve the issue
        </p>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-md font-semibold mb-1">
              📛 Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.anonymous ? "" : formData.name}
              onChange={handleChange}
              disabled={formData.anonymous}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Anonymous Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
            />
            <label className="text-sm font-medium text-gray-700">
              🙈 Do you want to remain anonymous?
            </label>
          </div>

          {/* Category */}
          <div>
            <label className="block text-md font-semibold mb-1">
              📁 Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a category</option>
              {Object.keys(categoryOptions).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sub-Category */}
          {formData.category && (
            <div>
              <label className="block text-md font-semibold mb-1">
                📂 Sub-Category
              </label>
              <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select a sub-category</option>
                {categoryOptions[formData.category].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-md font-semibold mb-1">
              📝 Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Describe your issue or feedback in detail"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          >
            🚀 Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}// is it mobile responsive 