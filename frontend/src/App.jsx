import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage/>} />
        <Route path="/Sign-up" element={<SignUpPage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>

      </Routes> 
    </Router>
  );
};

export default App;
