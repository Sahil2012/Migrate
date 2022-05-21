import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import './Home.css'
import ahemdata from '../ahemdata.json'
import punedata from '../punedata.json'
import hyddata from '../hyddata.json'
import bangdata from '../bangdata.json'
import deldata from '../deldata.json'
import mumbaidata from '../mumbaidata.json'
import chenndata from '../chenndata.json'
import koldata from '../koldata.json'
import ListSum from "./ListSum";

const Home = (props) => {
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [city,setCity] = useState("punemap");
  const [btn,setBtn] = useState("map");

  const data = {
    'punemap' : punedata,
    'hydmap' : hyddata,
    'bangmap' : bangdata,
    'mumbaimap' : mumbaidata,
    'chennmap' : chenndata,
    'kolmap' : koldata,
    'delmap' : deldata,
    'ahemmap' : ahemdata
  }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let cityEle = document.querySelector('#city');
    let salEle = document.querySelector('#sal');

    let inputSal = salEle.value;
    let inputCity = cityEle.value;
    if(btn == "map") {
      
    window.location.href =  inputCity+".html";

    } else if(btn == "list") {
      props.setSalary(inputSal);
      props.setData(data[inputCity]);
      navigate('/list');
    }
  }

  let handleMap = () => {
    setBtn("map");
    
  }

  const handleList = (e) => {
    setBtn("list");
    
   
  }

  return (
    <>
<button type="button" class="btn btn-outline-secondary log" onClick={handleLogout}>Logout</button>

         <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        
                        <h3>Fill in the details below.</h3>
                        <form className="requires-validation" onSubmit={handleSubmit} >

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="number" name="age" placeholder="Age"  />
                                 <div className="valid-feedback">Email field is valid!</div>
                                 <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>
                           
                            <div className="col-md-12">
                              <input id="sal" className="form-control" type="number" name="salary" placeholder="Salary" required/>
                               <div className="valid-feedback">Password field is valid!</div>
                               <div className="invalid-feedback">Password field cannot be blank!</div>
                           </div>

                           <div className="col-md-12">
                                <select className="form-select mt-3" id="city" onSelect={(e) => {setCity(e.target.value)}} required>
                                      <option disabled>Select the location</option>
                                      <option value="punemap">Pune</option>
                                      <option value="hydmap">Hyderabad</option>
                                      <option value="bangmap">Bangluru</option>
                                      <option value="mumbaimap">Mumbai</option>
                                      <option value="chennmap">Chennai</option>
                                      <option value="kolmap">KolKata</option>
                                      <option value="delmap">New Delhi</option>
                                      <option value="ahemmap">Ahemdabad</option>

                               </select>
                           </div>

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary" onClick={handleMap}>View Map</button>
                                <button id="submit" type="submit" className="btn btn-primary" onClick={handleList}>View List</button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
};

export default Home;
