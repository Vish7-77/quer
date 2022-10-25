import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import discli from "../../assets/discli.svg"
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
              <h1 >Submit OTP</h1>
              <h4>Please enter the OTP sent to your mobile number.</h4>
              </div>
                 <div className="main-form" style={{marginTop:'42px'}}>
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
  )
}

export default Rotp