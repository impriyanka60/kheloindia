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
    <div className="min-h-screen bg-orange-700 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-6 sm:p-8 border border-gray-200">
        {/* Logos */}
        <div className="flex justify-between items-center mb-8">
          <img src={nu} alt="Left Logo" className="h-10 w-auto" />
          <img src={logo} alt="Right Logo" className="h-10 w-auto" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          Feedback / Grievance Form By Nalanda Administration
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8">
          Kindly fill out the form so that we can help you resolve the issue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-base font-semibold text-gray-700 mb-2">
              📛 Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.anonymous ? "" : formData.name}
              onChange={handleChange}
              disabled={formData.anonymous}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Anonymous */}
          <div className="flex items-center space-x-2">
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
            <label className="block text-base font-semibold text-gray-700 mb-2">
              📁 Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  category: e.target.value,
                  subCategory: "",
                }))
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a category</option>
              {Object.keys(categoryOptions).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory (no label) */}
          {formData.category && (
            <div>
              <div className="flex items-center space-x-3">
                <select
                  name="subCategory"
                  value=""
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subCategory: e.target.value,
                    }))
                  }
                  className="w-28 sm:w-32 h-9 border border-gray-300 rounded-md px-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  {categoryOptions[formData.category].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  readOnly
                  value={formData.subCategory}
                  placeholder="Selected issue"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-sm sm:text-base focus:outline-none"
                  style={{ minWidth: "0" }}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-base font-semibold text-gray-700 mb-2">
              📝 Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your issue or feedback in detail"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-200 text-base"
          >
            🚀 Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
