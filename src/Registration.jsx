import React, { useState } from "react";
import users from "./users";

const Registration = ({ onLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    // Checks if the password matches the confirmation password
    if (password !== confirmPassword) {
      setErrorMessage("Password and confirmation password do not match!");
      return;
    }
    // Checks if the email is already in use
    if (users.find((user) => user.email === email)) {
      setErrorMessage("Email already in use!");
      return;
    }
    // Add the new user to the list of users
    const newUser = {
      firstName,
      lastName,
      gender,
      email,
      password,
    };

    // Add new user to users
    users.push(newUser);

    // Save updated users to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to the Login page
    window.location.href = "/login";

  };

  function haveAccount() {
    window.location.href = '/login';
  }

  return (
    <div className="bg-firewatch bg-cover h-screen min-w-screen relative overflow-hidden flex flex-col justify-center items-center font-poppins">
      
      <div className="text-red-700 pb-2 font-bold text-xl">
        {errorMessage && <p>{errorMessage}</p>}
      </div>

      <div className="bg-black/[0.7] pl-32 pr-32 pt-12 pb-12 rounded-2xl drop-shadow-lg">
        <div className="text-center text-white text-2xl justify-center mt-2 mb-8">
          <h1>Registration</h1>
        </div>

        <form onSubmit={handleRegistration}>
          
          <div>
            <div className="text-white mt-2 mb-1">
              First Name
            </div>

            <div>
              <input
                className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Juan"
                required
              />
            </div>
          </div>

            <div>
              <div className="text-white mt-2 mb-1">
                Last Name
              </div>

              <div>
                <input
                  className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Dela Cruz"
                  required
                />
              </div>
            </div>

          <div>
            <div className="text-white mt-2 mb-1">
                Gender
              </div>

              <div>
                <select
                  className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                  id="gender" 
                  name="gender" 
                  value= {gender}
                  onChange={(event) => setGender(event.target.value)}
                  required>
                    <option selected="Select a Gender">Select a Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <div className="text-white mt-2 mb-1">
                E-mail
              </div>
            
              <div>
                <input
                  className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="jdcruz@example.com"
                  required
                />
              </div>
            </div>
  
          <div>
            <div className="text-white mt-2 mb-1">
              Password
            </div>

            <div>
              <input
                className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="************"
                required
              />
            </div>
          </div>

          <div>
            <div className="text-white mt-2 mb-1">
              Confirm Password
            </div>
            
            <div>
              <input
                className="w-80 p-2 rounded-md bg-gray-200 hover:bg-gray-100 focus:bg-white focus:outline-none ease-in-out"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="************"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <button 
              className="text-black mt-8 bg-[#FD6A3E] p-4 rounded-full font-bold w-36 hover:bg-[#CA283D] ease-in-out"
              type="submit">Register</button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-white">
        <p>
          Already have an account?{" "}
          <a href="#"
            className="text-[#FD6A3E] hover:text-[#CA283D] hover:underline" 
            onClick={haveAccount}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
