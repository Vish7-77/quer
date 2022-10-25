import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
const Rotp = () => {


  const Func01=()=>{
    document.getElementById("header").style.display="none"
    document.getElementById("footer").style.display="none"
  }
     
  useEffect(() => {
   Func01()
  })
  return (
    <section class="container01">
      <section className="sideimg"></section>
    <div className='freespace'></div>
    <div className='formspace'>
        <div className='in-form'>
            <div className="mainupperlog">
              <h1 >Login</h1>
              <h4>Please enter the OTP sent to your mobile number.</h4>
              </div>
                 <div className="linkto"> 
                 <Link style={{textDecoration:'none'}}className='blulinbot' to="/login" >Use OTP </Link>
                 <Link className="uniqli" style={{textDecoration:'none',color: 'rgba(28, 28, 28, 0.7)'}}to="/usepasslogin" >Use Password </Link>
                 </div>
                 <div className="main-form">
                    <form action=""> 
                        
<input type="text" maxLength={1} className="numoneno"/>
<input type="text" maxLength={1} className="numone"/>
<input type="text" maxLength={1} className="numone"/>
<input type="text" maxLength={1} className="numone"/>
<button className="loginbt01" type="submit">Validate</button>


                    </form>
                

                 </div>
                 <h4 className="toreg">Didn't received OTP?<Link to="/">Resend</Link></h4>

        </div>
        
        
        </div>   


</section>
  )
}

export default Rotp