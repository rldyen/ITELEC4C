import React, { useState } from 'react';
import './App.css';
import './index-9ef3ae2a.css';

function App() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFormValid(e.target.value !== '' && lastName !== '');
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setFormValid(firstName !== '' && e.target.value !== '');
  };

  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
      
      {/*Background Components*/}

      <div className='h-3/4 w-3/4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-1/2 -top-56 animate-pulse'></div>
      <div className="h-3/4 w-3/4 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-1/3 animate-pulse"></div>
      
      {/*Form Input Box*/}

      <div className="container h-1/2 w-1/3 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 
      border-opacity-30 backdrop-filter backdrop-blur-sm">

      {/*Check if is Editting the Form, if not proceed to Input of Name*/}
      {isEditing ? (
        <form 
          className="h-full flex flex-col justify-evenly items-center">
          <div className="font-poppins text-white text-2xl tracking-wider">Enter Your Name</div>
          
          {/*Input for First Name*/}
          <input 
            type="text" 
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange} 
            className="font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide w-1/2"
            />
          
          {/*Input for Last Name*/}
          <input 
            type="text" 
            placeholder="Last Name" 
            value={lastName}
            onChange={handleLastNameChange}
            className="font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide w-1/2"
            />
          
          {/* Save Button.
              Disabled if there is no input.*/}
          <button 
            type="submit"
            onClick={handleSaveClick}
            disabled={!formValid}
            className= {`font-poppins cursor-pointer px-6 py-2 rounded-full bg-white bg-opacity-60 ${
              firstName && lastName ? "hover:opacity-80" : "cursor-default" }`}>
                Save
          </button>

        </form>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <p className="font-poppins font-bold text-xl text-white flex-grow flex-shrink flex-auto text-center">Welcome, {firstName} {lastName}.</p>
            
            {/*Edit Button*/}
            <button 
              onClick={handleEditClick}
              className="mt-4 items-center justify-center flex-auto font-poppins cursor-pointer px-6 py-2 rounded-full bg-white bg-opacity-60 hover:bg-opacity-80">
                Edit
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default App
