import React, { useState } from "react";

export default function RealNameAuthentication({
  formData = {},
  setFormData,
  onNext,
  onPrev,
}) {
  const [openSection, setOpenSection] = useState(1);
  const [errors, setErrors] = useState({});

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleChange = (field, value) => {
    setFormData((prev = {}) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    let newErrors = {};
    // ✅ Example required fields
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.emiratesId) newErrors.emiratesId = "Emirates ID is required";
    if (!formData.occupation) newErrors.occupation = "Occupation is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold text-center mb-4">
        Real Name Authentication
      </h2>

      {/* 1. Personal Details */}
      <div className="border-b">
        <button
          onClick={() => toggleSection(1)}
          className="flex justify-between items-center w-full py-2 font-semibold"
        >
          <span>1. Personal Details</span>
          <span>{openSection === 1 ? "▲" : "▼"}</span>
        </button>
        {openSection === 1 && (
          <div className="space-y-3 py-2">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName || ""}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={`w-full border p-2 rounded ${
                errors.fullName ? "border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName}</p>
            )}

            <input
              type="text"
              placeholder="Emirates ID"
              value={formData.emiratesId || ""}
              onChange={(e) => handleChange("emiratesId", e.target.value)}
              className={`w-full border p-2 rounded ${
                errors.emiratesId ? "border-red-500" : ""
              }`}
            />
            {errors.emiratesId && (
              <p className="text-red-500 text-xs">{errors.emiratesId}</p>
            )}

            <input
              type="text"
              placeholder="Full Address"
              value={formData.address || ""}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Monthly Income"
              value={formData.income || ""}
              onChange={(e) => handleChange("income", e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
        )}
      </div>

      {/* 2. Employment Details */}
      <div className="border-b">
        <button
          onClick={() => toggleSection(2)}
          className="flex justify-between items-center w-full py-2 font-semibold"
        >
          <span>2. Employment Details</span>
          <span>{openSection === 2 ? "▲" : "▼"}</span>
        </button>
        {openSection === 2 && (
          <div className="space-y-3 py-2">
            <input
              type="text"
              placeholder="Occupation"
              value={formData.occupation || ""}
              onChange={(e) => handleChange("occupation", e.target.value)}
              className={`w-full border p-2 rounded ${
                errors.occupation ? "border-red-500" : ""
              }`}
            />
            {errors.occupation && (
              <p className="text-red-500 text-xs">{errors.occupation}</p>
            )}

            <input
              type="text"
              placeholder="Company Name"
              value={formData.company || ""}
              onChange={(e) => handleChange("company", e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Gross Salary"
              value={formData.salary || ""}
              onChange={(e) => handleChange("salary", e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
        )}
      </div>

      {/* 3. Co-Borrower Details */}
      <div className="border-b">
        <button
          onClick={() => toggleSection(3)}
          className="flex justify-between items-center w-full py-2 font-semibold"
        >
          <span>3. Co-Borrower Details</span>
          <span>{openSection === 3 ? "▲" : "▼"}</span>
        </button>
        {openSection === 3 && (
          <div className="space-y-3 py-2">
            <input
              type="text"
              placeholder="Parents/Spouse Name"
              value={formData.coBorrowerName || ""}
              onChange={(e) => handleChange("coBorrowerName", e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Parents/Spouse Number"
              value={formData.coBorrowerNumber || ""}
              onChange={(e) => handleChange("coBorrowerNumber", e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Friend's Name"
              value={formData.friendName || ""}
              onChange={(e) => handleChange("friendName", e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Friend's Number"
              value={formData.friendNumber || ""}
              onChange={(e) => handleChange("friendNumber", e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
        )}
      </div>

      {/* 4. Other Loan Details */}
      <div className="border-b">
        <button
          onClick={() => toggleSection(4)}
          className="flex justify-between items-center w-full py-2 font-semibold"
        >
          <span>4. Other Loan Details</span>
          <span>{openSection === 4 ? "▲" : "▼"}</span>
        </button>
        {openSection === 4 && (
          <div className="space-y-3 py-2">
            <input
              type="text"
              placeholder="If any other loans or not"
              value={formData.otherLoans || ""}
              onChange={(e) => handleChange("otherLoans", e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
