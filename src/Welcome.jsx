import React from "react";

const Welcome = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-firewatch-night bg-cover h-screen min-w-screen relative overflow-hidden flex flex-col justify-center items-center font-poppins">
      <h1 className="text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Welcome, {firstName} {lastName}!</h1>
      <button 
        className="text-black mt-8 bg-white p-4 rounded-full font-bold w-36 hover:bg-gray-200 ease-in-out"
        onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;