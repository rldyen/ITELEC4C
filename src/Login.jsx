import React, { useState } from "react";
import users from "./users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find a user with matching email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Store the user's first and last name in localStorage
      localStorage.setItem("firstName", user.firstName);
      localStorage.setItem("lastName", user.lastName);

      // Redirect to Welcome page
      window.location.href = "/welcome";

    } else {
      // Display error message on failure
      setError("Invalid email or password!");
    }
  };

  function onRegister() {
    window.location.href = '/registration';
  }

  return (
    <div className="bg-firewatch bg-cover h-screen min-w-screen relative overflow-hidden flex flex-col justify-center items-center font-poppins">
      
      <div className="text-red-700 pb-2 font-bold text-xl">
        {error && <div className="error">{error}</div>}
      </div>
      

      <div className="bg-black/[0.7] pl-32 pr-32 pt-12 pb-12 rounded-2xl drop-shadow-lg">
        <div className="text-center text-white text-2xl justify-center mt-2 mb-8">
          <h1>Login</h1>
        </div>
        
          <form onSubmit={handleSubmit}>
            <div className="text-white mt-2 mb-1">
              Email
            </div>
            
            <div>
              <input
                className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="jdcruz@example.com"
                required />
            </div>
            
            <div className="text-white mt-2 mb-1">
              Password
            </div>
            <div>
              <input
                  className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out" 
                  type="password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                  placeholder="************"
                  required />
            </div>

            <div className="flex flex-col items-center">
              <button 
                className="text-black mt-8 bg-[#FD6A3E] p-4 rounded-full font-bold w-36 hover:bg-[#CA283D] ease-in-out"
                type="submit">Login</button>
            </div>
            
          </form>
      </div>
      
      <div className="mt-8 text-white">
        <p>
          Don't have an account?{" "}
          <a href="#"
            className="text-[#FD6A3E] hover:text-[#CA283D] hover:underline"  
            onClick={onRegister}>
            Register
          </a>
        </p>
      </div>
       
    </div>
  );
};

export default Login;
