import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import React, { useCallback } from 'react';

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ListSum from "./components/ListSum";
import ahemdata from './ahemdata.json';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

import { useState } from "react";

function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

  const [listData,setListData] = useState(ahemdata);
  const [sal,setSal] = useState();

  return (
    <div>
   
   <Particles options={particlesOptions} init={particlesInit}/>

    <Container >
      
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home setData = {setListData} setSalary = {setSal} />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/list" element={<ListSum data = {listData} sal={sal}/>} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
       </div>
  );
}

export default App;
