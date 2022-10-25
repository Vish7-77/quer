import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom"

import discli from "../../assets/discli.svg"

import { BsEye ,BsEyeSlash} from "react-icons/bs"

// import discli from "../../assets/discli.svg"
const Signupmob = () => {


  const Func01=()=>{
    document.getElementById("header").style.display="none"
    document.getElementById("footer").style.display="none"
  }
     
  useEffect(() => {
   Func01()
  })

  const cliqpass=()=>{
    setisclicked((curr)=>!curr)



    }

    const [isclicked, setisclicked]= useState(true)

  return (
    <section class="contain">
     <section className="longimg">
     </section>
     <div className='in-formsi 'style={{paddingTop:'64px'}} >
                <div className="mainupperlog">
                  <h1 >Register your details</h1>
                  <h4>Welcome! Please enter your details.</h4>
                  </div>
                     <div className="main-form" style={{marginTop:'32px'}}>
                        <form action=""> 
                        <h4 className='mobilenum'>Full Name</h4>
<input type="text" required className="numtext marbot12" placeholder='Please Enter Your Full Name'/>
{/* <button className="loginbt" type="submit"><Link to="/otp"  style={{color:"white",textDecoration:'none'}}> Get </Link> </button> */}


                            <h4 className='mobilenum'>Mobile Number</h4>
<input type="text" required className="numtext marbot12" placeholder='Please Enter Your Mobile Number'/>
<h4 className='mobilenum'>City</h4>
<input type="city" required className="numtext marbot12" placeholder='Please Enter Your City Name'/>
<h4 className='mobilenum'>Email-id</h4>
<input type="emial" required className="numtext marbot12" placeholder='Please Enter Your Full Name'/>

<h4 className='mobilenum'>Password (Optional) </h4>     
<input type={isclicked ? 'password':'text'} className="numtext marbot12" required placeholder=' Enter Your Password'/>

 <span className='eyepass' onClick={cliqpass} style={{ display:isclicked ?'none':'block',position:"absolute",top:'108%', right:"13%",cursor:'pointer'}}><BsEyeSlash/></span>
 <span onClick={cliqpass} className="eyepass" style={{ display:isclicked ?'block':'none',position:"absolute",top:'108%', right:"13%",cursor:'pointer'}}><BsEye/></span>
 <div class="form-check martop22 marbot11 marbot12">
  <input required class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label style={{fontSize:'13px',fonntWeight:'500px',fontFamily:'Montserrat'}}  class="form-check-label" for="flexCheckDefault">
  I agree to Qurex's <Link  style={{textDecoration:'none'}} to=""> Terms of Use </Link> & <Link style={{textDecoration:'none'}} to=""> Privacy and policy </Link>   </label>
</div>
<button className="marmintop loginbt" type="submit"><Link  to="/otp"  style={{color:"white",textDecoration:'none'}}> Register</Link> </button>


                        </form>
                    

                     </div>
                     <h4 className="toreg" style={{marginLeft:"33px"}}>Already have an account? <Link to="/login">Login here</Link></h4>

            </div>
            <div className='disc15'>

<div className='upperdisc'>
   <img src={discli} alt="" />
<h3 className='disc01'> Disclaimer Message</h3>
<span className='discx'>x</span>
</div>
<div className="downdisc">


   <ul style={{display:'flex',flexDirection:'column',height:"140px",justifyContent:'space-evenly'}}>
      
       <li>Your first name is not visible to Qurex support members <a href="/" style={{textDecoration:'none'}}> but just the doctor</a> </li>

   <li>Your personal details are mandatory for a doctor consultation as per government policy, please be assured <a href="/" style={{textDecoration:'none'}}>  ‘we respect your privacy’</a></li>
   
   <li className='lastdotli'><a href="/" style={{textDecoration:'none'}}> Email is required </a>for important treatment related conversation</li>
   
   </ul>

</div>


           </div>
  
   
       


</section>
  )
}

export default Signupmob