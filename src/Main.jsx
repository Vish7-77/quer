import React,{useState} from "react";
import "./main.css";
import Mini from "./Mini.jsx"

const Main = () => {
const[number,setnumber]=useState("this is hyder")


const inc=()=>{
setnumber("this is akbar")
}

const dec=()=>{
  setnumber("this is hyder")
}

  return (
    <section className="main">
    <Mini number={number}/>
      <div className="submain">
        <div className="hone">
          <h1>{number}</h1>
        </div>
        <div className="btns">
          <button  onClick={inc}>inc</button>
          <button onClick={dec}>dec</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
