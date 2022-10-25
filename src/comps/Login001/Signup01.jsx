import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import discli from "../../assets/discli.svg"
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
                  <h1 >Sign up</h1>
                  <h4>Welcome! Please enter your mobile number to get OTP</h4>
                  </div>
                     <div className="main-form" style={{marginTop:'32px'}}>
                        <form action=""> 
                            <h4 className='mobilenum'>Mobile Number</h4>
<input type="text" required className="numtext" placeholder='Please Enter Your Mobile Number'/>
<button className="loginbt" type="submit"><Link to="/otp"  style={{color:"white",textDecoration:'none'}}> Get OTP</Link> </button>


                        </form>
                    

                     </div>
                     <h4 className="toreg">Already have an account? <Link to="/login">Login here</Link></h4>

            </div>
            
            
            </div>   
            <div className='disc'>

<div className='upperdisc'>
   <img src={discli} alt="" />
<h3 className='disc01'> Disclaimer Message</h3>
<span className='discx'>x</span>
</div>
<div className="downdisc">


   <ul>
      
       <li>Your first name is not visible to Qurex support members <a href="/" style={{textDecoration:'none'}}> but just the doctor</a> </li>

   <li>Your personal details are mandatory for a doctor consultation as per government policy, please be assured <a href="/" style={{textDecoration:'none'}}>  ‘we respect your privacy’</a></li>
   
   <li className='lastdotli'><a href="/" style={{textDecoration:'none'}}> Email is required </a>for important treatment related conversation</li>
   
   </ul>

</div>


           </div>

           

  </section>
  </>
  )
}

export default Login001