// import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Getprobutton } from './Components/Getprobutton';
import { Headerarea } from './Components/Headerarea';
import { Startappoint } from './Components/Startappoint';
import { Startblogarea } from './Components/Startblogarea';
import { Startcalltoaction } from './Components/Startcalltoaction';
import { Startfooter } from './Components/Startfooterarea';
import { Startfunfact } from './Components/Startfunfact';
import { Header } from './Components/Header';
import { Doctorss } from './Components/Doctors';



function App() {
  return (
    <div className="App">
      <Header/>
      <Getprobutton />
      {/* <Headerarea /> */}
      {/* <Startfunfact /> */}
      {/* <Startcalltoaction/> */}
      {/* <Startblogarea/> */}
      {/* <Startappoint/> */}
      {/* <Startnewletterarea /> */}

      <Routes>
        <Route path="/Headerarea" element={<Headerarea />} />
        <Route path="/Startcalltoaction" element={<Startcalltoaction />} />
        <Route path="/Startblogarea" element={<Startblogarea />} />
        <Route path="/Startappoint" element={<Startappoint />} />
        <Route path="/Doctorss" element={<Doctorss />} />


      </Routes>

      <Startfooter />
    </div>
  );
}

export default App;
