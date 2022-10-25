import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
// import Loginside from "../loginside/Loginside"
import "../loginside/iaks.css"

const Login001 = () => {
const Func01=()=>{
  document.getElementById("header").style.display="none"
  document.getElementById("footer").style.display="none"
}
   
useEffect(() => {
 Func01()
})



  return (
    <>
  
    <section class="container01">
     
     <section className='sideimg'></section>
        <div className='formspace'>
            <div className='in-form'>
                <div className="mainupperlog">
                  <h1 >Login</h1>
                  <h4>Welcome Back! Login to Qurex using OTP or password.</h4>
                  </div>
                     <div className="linkto"> 
                     <Link style={{textDecoration:'none'}}className='blulinbot' to="" >Use OTP </Link>
                     <Link className="uniqli" style={{textDecoration:'none',color: 'rgba(28, 28, 28, 0.7)'}}to="/usepasslogin" >Use Password </Link>
                     </div>
                     <div className="main-form">
                        <form action=""> 
                            <h4 className='mobilenum'>Mobile Number</h4>
<input type="text" required className="numtext" placeholder='Please Enter Your Mobile Number'/>
<button className="loginbt" type="submit"><Link to="/otp"  style={{color:"white",textDecoration:'none'}}> Login</Link> </button>


                        </form>
                    

                     </div>
                     <h4 className="toreg">Don't have an account? <Link to="/signupnew">Register here</Link></h4>

            </div>
            
            
            </div>   


  </section>
  </>
  )
}

export default Login001