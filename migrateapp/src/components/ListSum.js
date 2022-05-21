import React from 'react'
import { useEffect } from 'react'
import './ListSum.css'

export default function ListSum(props) {


  return (
    <div className='listCls'>
      {/* {props.data.rich.map((d) => {
                    console.log(d)

            return <h2>${d[0] + d[1][0]}</h2>
        })} */}
      <div className={`card sizeCard ${props.sal <= 10000 ? "bg-danger" : props.sal <= 35000 ? "bg-warning" : "bg-success"}`}>
        <div className="card-body" style={{color:"white"}}>
          {props.sal <= 10000 ? "You are recommended to live in the red area" : props.sal <= 35000 ? "You are recommended to live in the yellow area" : "You are recommended to live in the green area"}
        </div>
      </div>
      <div className="row py-5 my-4">
        <div className="col-lg-7 mx-auto">

          <div className="card shadow mb-4">
            <div className="card-body p-5">
              <h4 className="mb-4">Gym and Restaurants are abundant</h4>
              <ul className="list-bullets green">
                {props.data.rich.map((d) => {
                  return <li key={d[0]} className="mb-2">{d[0] + ", " + d[1]}</li>;
                })}
              </ul>
            </div>
          </div>


          <div className="card shadow mb-4">
            <div className="card-body p-5">
              <h4 className="mb-4">Restaurants are plentiful, but gym less so.</h4>
              <ul className="list-bullets yellow">
                {props.data.med.map((d) => {
                  return <li key={d[0]} className="mb-2">{d[0] + ", " + d[1]}</li>;
                })}
              </ul>
            </div>
          </div>


          <div className="card shadow mb-4">
            <div className="card-body p-5">
              <h4 className="mb-4">Restaurants and gym are relatively hard to find.</h4>
              <ul className="list-bullets red">
                {props.data.poor.map((d) => {
                  return <li key={d[0]} className="mb-2">{d[0] + ", " + d[1]}</li>;
                })}
              </ul>
            </div>
          </div>



        </div>
      </div>
    </div>

  )
}
