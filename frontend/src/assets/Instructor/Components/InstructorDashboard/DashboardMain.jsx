/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "./DashboardNav";

const DashboardMain = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className=" p-5">
        <h1 className="text-2xl ">Welcome Sajal!</h1>
      </main>
    </div>
  );
};

export default DashboardMain;
