import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const AdminDashboard = () => {
  const [loanCount, setLoanCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const loanSnap = await getDocs(collection(db, "loans"));
      setLoanCount(loanSnap.size);

      const userSnap = await getDocs(collection(db, "users"));
      setUserCount(userSnap.size);
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg">
          <h2 className="text-lg">Total Loans</h2>
          <p className="text-3xl">{loanCount}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg">
          <h2 className="text-lg">Total Users</h2>
          <p className="text-3xl">{userCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
