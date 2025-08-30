import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const LoansList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const snapshot = await getDocs(collection(db, "loans"));
      const loanData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setLoans(loanData);
    };
    fetchLoans();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this loan?")) {
      await deleteDoc(doc(db, "loans", id));
      setLoans(loans.filter((loan) => loan.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Loan Applications</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Months</th>
            <th className="p-2">ID Front</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border-t">
              <td className="p-2">{loan.fullName}</td>
              <td className="p-2">{loan.amount} AED</td>
              <td className="p-2">{loan.months}</td>
              <td className="p-2">
                {loan.idFront && (
                  <a
                    href={loan.idFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Download
                  </a>
                )}
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleDelete(loan.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoansList;
