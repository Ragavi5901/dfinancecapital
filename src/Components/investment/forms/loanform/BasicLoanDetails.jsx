import React, { useState } from "react";

export default function BasicLoanDetails({ loanData = {}, onChange, onNext }) {
  const [errors, setErrors] = useState({});
  const [previews, setPreviews] = useState({}); // Store image previews

  const handleFileUpload = (field, file) => {
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [field]: previewUrl }));
      onChange(field, file);
      setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on upload
    }
  };

  const validateFields = () => {
    let newErrors = {};
    ["idFront", "idBack", "idSelfie"].forEach((field) => {
      if (!loanData[field]) {
        newErrors[field] = "This document is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveContinue = () => {
    if (validateFields()) {
      if (onNext) onNext(); // ✅ move to next step if valid
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-center mb-4">Basic Loan Details</h2>

      {[
        { label: "ID Front", field: "idFront" },
        { label: "ID Back", field: "idBack" },
        { label: "ID Hand Hold Selfie", field: "idSelfie" },
      ].map((item) => (
        <div key={item.field} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            *{item.label}
          </label>
          <div
            className={`border-2 border-dashed rounded-md h-32 flex items-center justify-center relative overflow-hidden ${
              errors[item.field] ? "border-red-500" : "border-gray-300"
            }`}
          >
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => handleFileUpload(item.field, e.target.files[0])}
            />

            {previews[item.field] ? (
              <img
                src={previews[item.field]}
                alt={item.label}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-gray-400">Upload here</span>
            )}
          </div>
          {errors[item.field] && (
            <p className="text-red-500 text-xs mt-1">{errors[item.field]}</p>
          )}
        </div>
      ))}

      {/* Save & Continue */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSaveContinue}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Save & Continue →
        </button>
      </div>
    </div>
  );
}
