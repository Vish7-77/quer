import React, { useState } from 'react'
import star from "../../assets/star.png"
import hat from "../../assets/hat.png"
import cal from "../../assets/cal.png"
import globe from "../../assets/globe.png"
import doc1 from "../../assets/doc1.png"
import doc2 from "../../assets/doc2.png"
import doc3 from "../../assets/doc3.png"
import "./main2.css"
import line from "../../assets/line.png"



const Main2 = () => {


  const docstyle01={
          width:'268px',
          height:'378px'
  }

  const normal ={
    width:'200px ',
    height:"100px"
  }

  const[doc10,setdoc1] =useState(false)
  const[doc12,setdoc12] =useState(false)
  const[doc13,setdoc13] =useState(false)
  const handleon=ev=>{
    var element = document.getElementById("myDIV");
    var dd0122 = document.getElementById("lio");
    var dd01222 = document.getElementById("lio01");
    
 
    if(ev==="doc1"){
      
         dd0122.classList.remove('dnn')
         dd01222.classList.remove('dnn')
      element.classList.remove("docsa3");
    
      setdoc1((curr)=>!curr)
      setdoc12(false)
      setdoc13(false)
  
}
if(ev==="doc3"){

  element.classList.remove("docsa3");
  dd0122.classList.remove('dnn')
  dd01222.classList.remove('dnn')
      setdoc13((curr)=>!curr)
      setdoc12(false)
      setdoc1(false)
    
}
if(ev==="doc2"){
  dd0122.classList.remove('dnn')
  dd01222.classList.remove('dnn')
  element.classList.remove("docsa3");

      setdoc12((curr)=>!curr)
setdoc13(false)
setdoc1(false)
}



  }
  return (
  <section className='main2'>
<div className='main2-in'>
<div className='uppermain2-in'>
<div className="main2upperleft">
<h1>
    Our Sexologist
</h1>
<span> Best sexual health experts from india & USA</span>

</div>
<div className="main2upperright">
    <button className='btnvad  upper1-btn'>
        View All Doctors
    </button>
</div>
</div>
<div className="lowermain2-in">

<div className='docpics'>
   
  <img  style={doc10 ? docstyle01:normal} className='docsa1' onClick={()=>handleon("doc1")} src={doc1} alt="" />
   
    <img  style={doc12 ? docstyle01:normal} className='docsa2' onClick={()=>handleon("doc2")} src={doc2} alt="" />
   
    <img style={doc13 ? docstyle01:normal} className='docsa3' id='myDIV' onClick={()=>handleon("doc3")} src={doc3} alt="" />
   


</div>
<img className='lineup' src={line} alt=""/>
<div id="lio" className='aboutdoc dnn' style={{display: doc12 || doc10 ? 'none':'block'}}>
<h1 > Dr.Saravanan02</h1>
<span className='spa' > <img src={star} alt=""/>Specialised in Sexual & Relationship Psychotherapy</span>
<span className='spa'> <img className='lef' src={hat} alt=""/>MBBS , MD(psychiatry)</span>
<span className='spa'> <img src={globe} alt=""/>Language Know English,Tamil,Hindi</span>
<span className='spa'> <img src={cal} alt=""/>8+ years of Experiance</span>

<div className="graybox">
<span className=' decr'>"Sexual  Health in india  is commonly neglected and medical for intemacy and realtiionship issues sought very late </span>

<h3>Dr. Saravanan</h3>

</div>




</div>
<div id="lio01" className='aboutdoc dnn' style={{display: doc10 || doc13 ? 'none':'block'}}>
<h1 > Dr.Saravanan01</h1>
<span className='spa' > <img src={star} alt=""/>Specialised in Sexual & Relationship Psychotherapy</span>
<span className='spa'> <img className='lef' src={hat} alt=""/>MBBS , MD(psychiatry)</span>
<span className='spa'> <img src={globe} alt=""/>Language Know English,Tamil,Hindi</span>
<span className='spa'> <img src={cal} alt=""/>8+ years of Experiance</span>

<div className="graybox">
<span className=' decr'>"Sexual  Health in india  is commonly neglected and medical for intemacy and realtiionship issues sought very late </span>

<h3>Dr. Saravanan</h3>

</div>




</div>
<div className='aboutdoc' style={{display: doc13 ||doc12 ? 'none':'block'}}>
<h1 > Dr.Saravanan</h1>
<span className='spa' > <img src={star} alt=""/>Specialised in Sexual & Relationship Psychotherapy</span>
<span className='spa'> <img className='lef' src={hat} alt=""/>MBBS , MD(psychiatry)</span>
<span className='spa'> <img src={globe} alt=""/>Language Know English,Tamil,Hindi</span>
<span className='spa'> <img src={cal} alt=""/>8+ years of Experiance</span>

<div className="graybox">
<span className=' decr'>"Sexual  Health in india  is commonly neglected and medical for intemacy and realtiionship issues sought very late </span>

<h3>Dr. Saravanan</h3>

</div>




</div>

</div>
</div>

  </section>
  )
}

export default Main2