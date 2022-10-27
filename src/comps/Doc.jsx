import React,{useEffect} from 'react'
import Doc01 from "./doc01/Doc01.jsx"
import Docsfoot from "./r/Docsfoot.jsx"
import AboutDoc from "./aboutdoc/AboutDoc.jsx"
import HighRec from "./HighRec/HighRec.jsx"
import DocBlog from "./docblog/DocBlog.jsx"
import Docfooter from "./docblog/Docfooter.jsx"
import TrtMain7 from "./Trtmain7/TrtMain7.jsx"
const Doc = () => {
  const nofoot =()=>{
    document.getElementById('footer').style.display="none"
  }
  
  useEffect(() => {
    nofoot()
  }, [])
  return (
   <>   
   <Doc01/>
   <AboutDoc/>
   <HighRec/>
   <DocBlog/>
   <Docsfoot/>
   {/* <TrtMain7/> */}
   <Docfooter/>

   
   </>
  )
}

export default Doc