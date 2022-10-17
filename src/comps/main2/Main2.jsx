import React from 'react'
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
   
  <img src={doc1} alt="" />
   
    <img src={doc2} alt="" />
   
    <img src={doc3} alt="" />
   


</div>
<img className='lineup' src={line} alt=""/>
<div className='aboutdoc'>
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