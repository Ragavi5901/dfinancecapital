import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const UsersList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const usersSnap = await getDocs(collection(db, "users"));
const users = {};
usersSnap.forEach((d) => {
  const data = d.data();
  users[data.uid] = data;  // ✅ use uid field
});


        // 2️⃣ Fetch loans
        const loansSnap = await getDocs(collection(db, "loans"));
        const loanData = loansSnap.docs.map((docSnap) => {
          const data = docSnap.data();
          const userPhone = users[data.userId]?.phone || "N/A";

          return {
            id: docSnap.id,
            ...data,
            phone: userPhone,
          };
        });

        setLoans(loanData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Delete Loan
  const handleDelete = async (id) => {
    if (window.confirm("Delete this loan record?")) {
      await deleteDoc(doc(db, "loans", id));
      setLoans(loans.filter((l) => l.id !== id));
    }
  };

  // Reset Loan Info
  const handleReset = async (id) => {
    if (window.confirm("Reset this loan info?")) {
      await updateDoc(doc(db, "loans", id), { reset: true });
      alert("Loan info reset!");
    }
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-xl font-bold mb-4">Loans List</h1>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Full Name</th>
            <th className="p-2">Emirates ID</th>
            <th className="p-2">Bank Name</th>
            <th className="p-2">Account No</th>
            <th className="p-2">IBAN</th>
            <th className="p-2">Phone</th>
            <th className="p-2">ID Front</th>
            <th className="p-2">ID Back</th>
            <th className="p-2">Selfie</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border-t">
              <td className="p-2">{loan.fullName || "N/A"}</td>
              <td className="p-2">{loan.emiratesId || "N/A"}</td>
              <td className="p-2">{loan.bankName || "N/A"}</td>
              <td className="p-2">{loan.accountNumber || "N/A"}</td>
              <td className="p-2">{loan.iban || "N/A"}</td>
              <td className="p-2">{loan.phone || "N/A"}</td>

              {/* Images */}
              <td className="p-2">
                {loan.idFront ? (
                  <a href={loan.idFront} target="_blank" rel="noreferrer">
                    <img src={loan.idFront} alt="ID Front" className="h-12 w-20 object-cover border" />
                  </a>
                ) : "N/A"}
              </td>
              <td className="p-2">
                {loan.idBack ? (
                  <a href={loan.idBack} target="_blank" rel="noreferrer">
                    <img src={loan.idBack} alt="ID Back" className="h-12 w-20 object-cover border" />
                  </a>
                ) : "N/A"}
              </td>
              <td className="p-2">
                {loan.selfie ? (
                  <a href={loan.selfie} target="_blank" rel="noreferrer">
                    <img src={loan.selfie} alt="Selfie" className="h-12 w-20 object-cover border" />
                  </a>
                ) : "N/A"}
              </td>

              <td className="p-2">
                <button
                  onClick={() => handleReset(loan.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Reset
                </button>
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

export default UsersList;
