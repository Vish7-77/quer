import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"

import { BsEye ,BsEyeSlash} from "react-icons/bs"
const Usepass = () =>  {
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
    <section class="container01" >
       <section className='sideimg'></section>
    <div className='freespace'></div>
    <div className='formspace'>
        <div className='in-form'>
            <div className="mainupperlog">
              <h1 >Login</h1>
              <h4>Welcome Back! Login to Qurex using OTP or password.</h4>
              </div>
                 <div className="linkto marbot0123"> 
                 <Link className="uniqli" style={{textDecoration:'none',color: 'rgba(28, 28, 28, 0.7)'}}to="/login" >Use OTP </Link>
                 <Link style={{textDecoration:'none'}}className='blulinbot' to="/usepasslogin" >Use Password </Link>
                 </div>
                 <div className="main-form">
                 <div className="main-form">

     
                        <form action=""> 
                            <h4 className='mobilenum'>Mobile Number</h4>
<input type='text' required className="numtext marbot11" placeholder='Please Enter Your Mobile Number'/>

<h4 className='mobilenum'>Password</h4>     <Link to="" className='forgotpass'>Forgot password?</Link>
<input type={isclicked ? 'password':'text'} className="numtext" required placeholder=' Enter Your Password'/>

 <span className='eyepass' onClick={cliqpass} style={{ display:isclicked ?'none':'block',position:"absolute",top:'67%', right:"18%",cursor:'pointer'}}><BsEyeSlash/></span>
 <span onClick={cliqpass} className="eyepass" style={{ display:isclicked ?'block':'none',position:"absolute",top:'67%', right:"18%",cursor:'pointer'}}><BsEye/></span>

<div class="form-check martop22 marbot11">
  <input required class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label  class="form-check-label" for="flexCheckDefault">
 Remember me
  </label>
</div>
<button className="loginbt nomargin01" type="submit"><Link to="/login/otp" style={{color:"white",textDecoration:'none'}} > Login</Link> </button>


{/* <Link to="/login/otp" ><button className="loginbt" type="submit"> Login </button></Link> */}

                        </form>





                        </div>
                

                 </div>
                 <h4 className="toreg toregtop">Don't have an account?<Link to="/signupmob">Register here</Link></h4>

        </div>
        
        
        </div>   


</section>
  )
}

export default Usepass