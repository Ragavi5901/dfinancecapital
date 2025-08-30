import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function ElectronicSignature({
  formData = {},
  setFormData,
  onNext,
  onPrev,
}) {
  const [showSignPad, setShowSignPad] = useState(false);
  const sigPadRef = useRef();

  const clearSignature = () => {
    sigPadRef.current.clear();
    setFormData((prev = {}) => ({ ...prev, signature: "" }));
  };

  const confirmSignature = () => {
  if (!sigPadRef.current.isEmpty()) {
    // Just use the raw canvas instead of getTrimmedCanvas()
    const signatureData = sigPadRef.current
      .getCanvas()
      .toDataURL("image/png");

    setFormData((prev = {}) => ({
      ...prev,
      signature: signatureData,
    }));

    setShowSignPad(false);
  } else {
    alert("Please provide a signature before confirming.");
  }
};

  const handleNext = () => {
    if (!formData.termsAccepted) {
      alert("Please accept the Terms & Conditions before continuing.");
      return;
    }
    if (!formData.signature) {
      alert("Please confirm your signature before continuing.");
      return;
    }
    onNext();
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev = {}) => ({
      ...prev,
      termsAccepted: e.target.checked,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-bold text-center mb-4">
        Electronic Signature
      </h2>

      {/* Loan Details */}
      <div>
        <h3 className="font-semibold text-blue-900 mb-2">Loan Details</h3>
        <div className="space-y-2 text-sm">
          {[
            { label: "Name", value: formData.fullName },
            {
              label: "Amount",
              value: formData.amount
                ? `${formData.amount.toLocaleString()} AED`
                : "",
            },
            {
              label: "Months",
              value: formData.months ? `${formData.months} Months` : "",
            },
            { label: "Loan Type", value: formData.loanType },
          ].map(
            (item, i) =>
              item.value && (
                <div key={i} className="flex justify-between">
                  <span className="text-gray-600">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              )
          )}
        </div>
      </div>

      {/* Terms & Conditions - always visible */}
      <div className="mt-6 border p-3 rounded text-sm text-gray-700 leading-relaxed max-h-64 overflow-y-auto">
        <h3 className="font-semibold mb-2">Terms & Conditions</h3>
        <p><strong>Repayment Method:</strong></p>
        <p>a) E- NACH, Automatic deduction by the system on the 10th of every month.</p>
        <p>b) Transfer via Net banking, direct bank transaction, net banking.</p>

        <p className="mt-2"><strong>(2) Warranty Clause:</strong></p>
        <p>a) Party B (Borrower) who has signed a contract agreement is declared to have agreed to all existing lending rules & procedures, including ensuring the ability to pay installments every month.</p>
        <p>b) Wrong information: If party B provide wrong bank information or ID information then party A should ask deposit to party B 30%-60% of loan amount to solve this problem. This amount party B will get back with his loan amount later.</p>
        <p>c) Accountability: Although this agreement may be signed below by one person, each of the undersigned understands that they are each as individuals responsible and jointly and severally liable for paying back the full amount.</p>
        <p>d) Security: To protect Lender, the loan company working online different with another bank that's why party A do not require the collateral for this loan, party A only require the deposit in advance for verified the ability repayment of customers.</p>
        <p>e) GST, Tax & Another Charges: If by any reason the loan amount was increased the party A and party B is responsible for the GST and and BANK charges that paid by the company.</p>

        <p className="mt-2"><strong>Article (1) – Disbursement of the Loan</strong><br />
        The principal Loan shall be disbursed to the account of the Borrower upon the completion of all the securities and documentation as contained in Article (2) of this Agreement.</p>

        <p><strong>Article (2) – Securities and Documentation</strong></p>
        <p><strong>Article (3) – Interests, Commissions and Fees</strong></p>
        <p><strong>Article (4) – Events of Default</strong></p>
        <p>1. If the Borrower is terminated for any reason.</p>
        <p>As a guarantee and security to pay the Loan, interests, commissions, fees, and any other amounts become due under this Agreement, the Borrower commits and undertakes as follows:</p>
        <ul className="list-disc ml-5">
          <li>If the Borrower violated any of its undertakings or obligations arising from this Agreement.</li>
          <li>If the Borrower failed to pay three consecutive instalments or six nonconsecutive instalments without approval of the Finance Company.</li>
          <li>If the information or documents submitted by the Borrower are incorrect or invalid.</li>
          <li>If the Finance Company notices that there are grounds which could lead to inability of the Borrower to fulfill obligations.</li>
          <li>The death of the Borrower or his leaving the country permanently.</li>
        </ul>

        <p className="mt-2"><strong>Article (5) – General Provisions</strong><br />
        All accounts of any kind opened or to be opened in the name of the Borrower with the Finance Company shall be securing each other and the Finance Company may set off any amounts due from the Borrower against any funds of the Borrower.</p>
      </div>

      {/* Accept Checkbox */}
      <div className="mt-3 flex items-center">
        <input
          type="checkbox"
          id="terms"
          checked={!!formData.termsAccepted}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I have read and agree to the Terms & Conditions
        </label>
      </div>

      {/* Signature Section */}
      {!showSignPad && !formData.signature && (
        <button
          className="mt-6 w-full bg-blue-900 text-white py-2 rounded-full hover:bg-blue-800"
          onClick={() => setShowSignPad(true)}
        >
          Agree and Sign
        </button>
      )}

      {formData.signature && !showSignPad && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Your Signature:</p>
          <img
            src={formData.signature}
            alt="Signature"
            className="border rounded mx-auto h-24"
          />
          <button
            onClick={() => setShowSignPad(true)}
            className="mt-2 text-blue-600 underline text-sm"
          >
            Re-sign
          </button>
        </div>
      )}

      {showSignPad && (
        <div className="mt-4">
          <div className="w-full border rounded">
            <SignatureCanvas
              ref={sigPadRef}
              penColor="black"
              canvasProps={{ className: "w-full h-48" }}
            />
          </div>
          <div className="flex justify-between gap-2 mt-3">
            <button
              onClick={confirmSignature}
              className="flex-1 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
            <button
              onClick={clearSignature}
              className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded"
            >
              Clear
            </button>
            <button
              onClick={() => setShowSignPad(false)}
              className="flex-1 bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
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
