import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import Registration from "./Registration";
import './App.css';
import './index-3678b578.css'

function App(){
  const currentPath = window.location.pathname;

  if (currentPath === "/welcome") {
    return <Welcome />;
  }

  if (currentPath === "/registration") {
    return <Registration />;
  }

  return(
    <div className="App">
      <Login />
   </div>
  );
};

export default App;
