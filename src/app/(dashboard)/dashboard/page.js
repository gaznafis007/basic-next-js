import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="mt-12">
      <h2 className="text-center font-bold text-4xl text-zinc-800">
        This is Dashboard
      </h2>
      <div className="flex flex-row justify-center space-x-8 mt-4">
        <div className="w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
          <Link href={"/createUser"}>Create User</Link>
        </div>
        <div className="w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
          <Link href={"/allUsers"}>All Users</Link>
        </div>
        <div className="w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
          <Link href={"/sales"}>Sales</Link>
        </div>
        <div className="w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
          <Link href={"/dynamic"}>Dynamic</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
