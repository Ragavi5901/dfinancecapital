import React, { useState } from "react";

export default function BankCardInformation({
  loanData = {},          // ✅ consistent with LoanForm
  onChange = () => {},    // ✅ use onChange(field, value)
  onNext,
  onPrev,
}) {
  const [errors, setErrors] = useState({});

  // validate one field
  const validateField = (name, value = "") => {
    const v = (name === "iban" ? value.toUpperCase() : value).trim();
    let error = "";

    if (!v) {
      error = "This field is required";
    } else {
      if (name === "accountNumber" && !/^\d{9,18}$/.test(v)) {
        error = "Account number must be 9–18 digits";
      }
      if (name === "iban" && !/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(v)) {
        error = "Invalid IBAN format";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  // validate all before next
  const validateAll = () => {
    const newErrors = {};
    let valid = true;

    const bankName = (loanData.bankName || "").trim();
    const accountNumber = (loanData.accountNumber || "").trim();
    const iban = (loanData.iban || "").trim().toUpperCase();

    if (!bankName) {
      newErrors.bankName = "Bank Name is required";
      valid = false;
    }
    if (!accountNumber) {
      newErrors.accountNumber = "Account number is required";
      valid = false;
    } else if (!/^\d{9,18}$/.test(accountNumber)) {
      newErrors.accountNumber = "Account number must be 9–18 digits";
      valid = false;
    }
    if (!iban) {
      newErrors.iban = "IBAN is required";
      valid = false;
    } else if (!/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(iban)) {
      newErrors.iban = "Invalid IBAN format";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = name === "iban" ? value.toUpperCase() : value;
    onChange(name, val); // ✅ call parent updater
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleNext = () => {
    if (validateAll()) onNext && onNext();
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-center mb-4">
        Bank Card Information
      </h2>

      {/* Bank Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={loanData.bankName || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Please enter the bank name"
          className={`w-full border rounded-lg p-2 ${
            errors.bankName ? "border-red-500" : ""
          }`}
        />
        {errors.bankName && (
          <p className="text-red-500 text-xs">{errors.bankName}</p>
        )}
      </div>

      {/* Account Number */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Account Number</label>
        <input
          type="text"
          name="accountNumber"
          value={loanData.accountNumber || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter account number"
          className={`w-full border rounded-lg p-2 ${
            errors.accountNumber ? "border-red-500" : ""
          }`}
        />
        {errors.accountNumber && (
          <p className="text-red-500 text-xs">{errors.accountNumber}</p>
        )}
      </div>

      {/* IBAN */}
      <div className="mb-4">
        <label className="block text-sm font-medium">IBAN</label>
        <input
          type="text"
          name="iban"
          value={(loanData.iban || "").toUpperCase()}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter IBAN (e.g., AE12...)"
          className={`w-full border rounded-lg p-2 ${
            errors.iban ? "border-red-500" : ""
          }`}
        />
        {errors.iban && <p className="text-red-500 text-xs">{errors.iban}</p>}
      </div>

      {/* Buttons */}
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
