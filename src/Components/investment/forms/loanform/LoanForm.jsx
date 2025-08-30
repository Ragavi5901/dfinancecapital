import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import BasicLoanDetails from "./BasicLoanDetails";
import BankCardInformation from "./BankCardInformation";
import RealNameAuthentication from "./RealNameAuthentication";
import ElectronicSignature from "./ElectronicSignature";
import TermsConditions from "./TermsConditions";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Firebase/firebase"; 

const LoanForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const steps = [
    BasicLoanDetails,
    BasicInformation,
    BankCardInformation,
    RealNameAuthentication,
    ElectronicSignature,
    TermsConditions,
  ];

  const CurrentStep = steps[step - 1];

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

const handleSubmit = async () => {
  setLoading(true);
  setMessage("");

  try {
    const user = JSON.parse(localStorage.getItem("user")); 
    const dataToSave = { 
      ...formData,
      userId: user?.uid || null,   
      createdAt: new Date()
    };

    // 🔹 Handle File uploads
    if (formData.idFront instanceof File) {
      const fileRef = ref(storage, `loans/${Date.now()}_idFront_${formData.idFront.name}`);
      await uploadBytes(fileRef, formData.idFront);
      dataToSave.idFront = await getDownloadURL(fileRef);
    }

    if (formData.idBack instanceof File) {
      const fileRef = ref(storage, `loans/${Date.now()}_idBack_${formData.idBack.name}`);
      await uploadBytes(fileRef, formData.idBack);
      dataToSave.idBack = await getDownloadURL(fileRef);
    }

    // 🔹 Save to Firestore
    const docRef = await addDoc(collection(db, "loans"), dataToSave);

    setMessage("✅ Loan application submitted successfully!");
    console.log("Document written with ID: ", docRef.id);

    setFormData({});
    setStep(1);
  } catch (err) {
    setMessage("❌ Error: " + err.message);
    console.error("Error submitting loan: ", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <CurrentStep
        loanData={formData}
        onChange={handleChange}
        onNext={nextStep}
        onPrev={prevStep}
        formData={formData}
        setFormData={setFormData}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Previous
          </button>
        )}

        {step === steps.length && (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`ml-auto px-4 py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        )}
      </div>

      {message && (
        <p className="mt-4 text-center text-sm font-medium">{message}</p>
      )}
    </div>
  );
};

export default LoanForm;
