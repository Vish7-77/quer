import React from 'react'
import Home from "../comps/Home"
import Treatment from "../comps/Treatment"
import Doc from "../comps/Doc"
import Head from "../comps/header/Head"
import Footer from "../comps/footer/Footer"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login001 from '../comps/Login001/Login001'
import Login002 from '../comps/Login001/Login002'
import Signup01 from '../comps/Login001/Signup01'
import Submitotp from '../comps/Login001/Submitotp'
import Rotp from '../comps/realotp/Rotp'
import Signupmob from '../comps/signup/Signupmob'
const index = () => {
  return (
    <BrowserRouter>
    <Head/>
          <Routes>
<Route path="/" element={<Home />} />
<Route path="/treatment" element={<Treatment />} />
<Route path="/doctor" element={<Doc />} />
<Route path="/login" element={<Login001 />} />
<Route path="/usepasslogin" element={<Login002 />} />
<Route path="/otp" element={<Rotp />} />
<Route path="/signupnew" element={<Signup01 />} />
<Route path="/submitotp" element={<Submitotp />} />
<Route path="/signupmob" element={<Signupmob />} />

</Routes> 
<Footer/>
    
    </BrowserRouter>

  )
}

export default index