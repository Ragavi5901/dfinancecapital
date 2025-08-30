import React, { useState } from "react";

export default function BasicInformation({
  loanData = {},
  onChange,
  onNext,
  onPrev,
}) {
  const loanAmounts = Array.from(
    { length: (500000 - 10000) / 5000 + 1 },
    (_, i) => 10000 + i * 5000
  );
  const loanTerms = [6, 12, 18, 24];
  const interestRate = 0.5;

  const [errors, setErrors] = useState({});

  const monthlyRepayment = () => {
    if (!loanData.amount || !loanData.months) return 0;
    const monthlyInterest = interestRate / 100;
    const totalInterest = loanData.amount * monthlyInterest * loanData.months;
    const totalPayable = loanData.amount + totalInterest;
    return Math.round(totalPayable / loanData.months);
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};
    if (!loanData.amount) newErrors.amount = "Please select a loan amount";
    if (!loanData.months) newErrors.months = "Please select loan tenure";
    if (!loanData.loanType) newErrors.loanType = "Please select a loan type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    onChange(field, value);
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-center mb-4">Basic Information</h2>

      {/* Loan Amount */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Loan Amount</label>
        <select
          value={loanData.amount || ""}
          onChange={(e) => handleChange("amount", Number(e.target.value))}
          className={`w-full border rounded-lg p-2 ${
            errors.amount ? "border-red-500" : ""
          }`}
        >
          <option value="">Select amount</option>
          {loanAmounts.map((amount) => (
            <option key={amount} value={amount}>
              {amount.toLocaleString()} AED
            </option>
          ))}
        </select>
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount}</p>
        )}
      </div>

      {/* Loan Term */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Loan Term</label>
        <select
          value={loanData.months || ""}
          onChange={(e) => handleChange("months", Number(e.target.value))}
          className={`w-full border rounded-lg p-2 ${
            errors.months ? "border-red-500" : ""
          }`}
        >
          <option value="">Select term</option>
          {loanTerms.map((term) => (
            <option key={term} value={term}>
              {term} Months
            </option>
          ))}
        </select>
        {errors.months && (
          <p className="text-red-500 text-sm">{errors.months}</p>
        )}
      </div>

      {/* Loan Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Loan Type</label>
        <select
          value={loanData.loanType || ""}
          onChange={(e) => handleChange("loanType", e.target.value)}
          className={`w-full border rounded-lg p-2 ${
            errors.loanType ? "border-red-500" : ""
          }`}
        >
          <option value="">Select type</option>
          <option value="Personal loan (0.5%)">Personal loan (0.5%)</option>
          <option value="Islamic loan (0%)">Islamic loan (0%)</option>
        </select>
        {errors.loanType && (
          <p className="text-red-500 text-sm">{errors.loanType}</p>
        )}
      </div>

      {/* Summary */}
      {loanData.amount && loanData.months && (
        <div className="mt-4 text-sm space-y-2 bg-gray-50 p-3 rounded-lg">
          <div className="flex justify-between">
            <span>Loan Amount:</span>
            <strong>{loanData.amount.toLocaleString()} AED</strong>
          </div>
          <div className="flex justify-between">
            <span>Loan Tenure:</span>
            <strong>{loanData.months} Months</strong>
          </div>
          <div className="flex justify-between">
            <span>Monthly repayment:</span>
            <strong>{monthlyRepayment()} AED</strong>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-end mt-6">
        
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
