import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Todos from "./components/Todos";
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth,user=>{
      if(user) setUser(user);
      else setUser(null);
    })
  }, [])

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Todos user={user} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
