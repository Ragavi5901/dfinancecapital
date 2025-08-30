import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TermsConditions = ({ formData = {}, setFormData }) => {
  const [showTerms, setShowTerms] = useState(false);

  const handleCheckboxChange = (e) => {
    setFormData((prev = {}) => ({
      ...prev,
      termsAccepted: e.target.checked,
    }));
  };

  return (
    <div className="w-full">
      {/* Toggle Button */}
      <button
        className="w-full flex justify-between items-center text-sm font-medium text-gray-700 py-2"
        onClick={() => setShowTerms(!showTerms)}
      >
        Terms & Conditions
        {showTerms ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>

      {/* Terms Text */}
      {showTerms && (
        <div className="mt-2 p-3 border rounded text-sm text-gray-700 leading-relaxed max-h-80 overflow-y-auto space-y-2">
          <p><strong>Repayment Method:</strong></p>
          <p>a) E- NACH, Automatic deduction by the system on the 10th of every month.</p>
          <p>b) Transfer via Net banking, direct bank transaction, net banking.</p>

          <p><strong>(2) Warranty Clause:</strong></p>
          <p>a) Party B (Borrower) who has signed a contract agreement is declared to have agreed to all existing lending rules & procedures, including ensuring the ability to pay installments every month.</p>
          <p>b) Wrong information: If party B provide wrong bank information or ID information then party A should ask deposit to party B 30%-60% of loan amount to solve this problem. This amount party B will get back with his loan amount later.</p>
          <p>c) Accountability: Although this agreement may be signed below by one person, each of the undersigned understands that they are each as individuals responsible and jointly and severally liable for paying back the full amount.</p>
          <p>d) Security: To protect Lender, the loan company working online different with another bank that's why party A do not require the collateral for this loan, party A only require the deposit in advance for verified the ability repayment of customers.</p>
          <p>e) GST, Tax & Another Charges: If by any reason the loan amount was increased the party A and party B is responsible for the GST and and BANK charges that paid by the company.</p>

          <p><strong>Article (1) – Disbursement of the Loan</strong><br />
          The principal Loan shall be disbursed to the account of the Borrower upon the completion of all the securities and documentation as contained in Article (2) of this Agreement.</p>

          <p><strong>Article (2) – Securities and Documentation</strong></p>
          <p><strong>Article (3) – Interests, Commissions and Fees</strong></p>
          <p><strong>Article (4) – Events of Default</strong></p>
          <p>1. If the Borrower is terminated for any reason.</p>
          <p>As a guarantee and security to pay the Loan, interests, commissions, fees, and any other amounts become due under this Agreement, the Borrower commits and undertakes as follows:</p>
          <p>1. In the event the Loan is granted against personal guarantee, the Borrower undertakes to provide the Finance Company with the Personal Guarantee Form approved by the Finance Company and signed by the guarantor(s).</p>
          <p>2. The interest shall be calculated on the daily balance of the drawn and unpaid amounts of the Loan from the date of withdrawal based on actual number of days lapsed and a 365-day year, to be added to the Loan balance and paid with the monthly instalments.</p>
          <p>3. The Finance Company will charge the commissions, fees, and expenses incurred on the Loan as per the instructions of the Central Bank of the United Arab Emirates (UAE) as may be amended from time to time.</p>
          <p>The Loan elapses and all the instalments, interests any other fees and expenses become due and payable immediately without having to give any notification or any court ruling and without prejudice to any other rights of the Finance Company according to this agreement or in accordance with the law in the event of occurrence of any of the listed below events:</p>
          <ul className="list-disc ml-5">
            <li>If the Borrower violated any of its undertakings or obligations arising from this Agreement.</li>
            <li>If the Borrower failed to pay three consecutive instalments or six nonconsecutive instalments of the monthly instalments without approval of the Finance Company.</li>
            <li>If, at any time, the information or documents submitted by the Borrower to the Finance Company are incorrect or any of acknowledgement or undertaking submitted by him provided for in this Agreement is invalid.</li>
            <li>If the Finance Company notices that there are grounds which could lead to the inability of the Borrower and/or any of his guarantors, as permissible under Central Bank’s prevailing regulations, to fulfill his obligations towards the Finance Company.</li>
            <li>The death of the Borrower or his leaving the country permanently.</li>
          </ul>

          <p><strong>Article (5) – General Provisions</strong><br />
          All accounts of any kinds or name currently opened or will be opened in the future in whatever currency in the name of the Borrower with the Finance Company or any of its sales centres shall be securing each other and the Finance Company may set off any amounts due to the Finance Company from the Borrower from any funds that pertain to the Borrower.</p>

          {/* Checkbox */}
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
        </div>
      )}
    </div>
  );
};

export default TermsConditions;
