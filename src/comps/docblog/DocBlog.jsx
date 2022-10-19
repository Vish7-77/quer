import React from 'react'
import yellowstar from "../../assets/yellowstar.png"
import docblog01 from "../../assets/docblog01.png"
import rdocart01 from "../../assets/rdocart01.png"
const DocBlog = () => {
  return (
    <section className="main4">
    <div className="uppermain4">
      <h1>Blogs From Doctor</h1>
    </div>
    <div className="lowermain4">
      <div className="cardmain4">
          <img src={docblog01} alt="" />
        <span className="childprn"><img src={yellowstar} alt=""/> 4.2 </span>
        <h3>How to Quit Looking at pornography...  </h3>
        <h4 className="childprn01">  oriented sexual knowledge. The importance of Love and its interrational</h4>
<div className="childprn02">
  <span className="author" >By Henry King</span>
  <span className="reader">  124 read this</span>
</div>
<div className="fadeline"></div>
<div className="price">

<a href="/">  <span className="buynow">Read Now{">"}</span></a>
</div>
  
      </div>
      <div className="cardmain4">
          <img src={rdocart01} alt="" />
        <span className="childprn"><img src={yellowstar} alt=""/> 4.2 </span>
        <h3>How to Quit Looking at pornography...  </h3>
        <h4 className="childprn01">  oriented sexual knowledge. The importance of Love and its interrational</h4>
<div className="childprn02">
  <span className="author" >By Henry King</span>
  <span className="reader">  124 read this</span>
</div>
<div className="fadeline"></div>
<div className="price">
 
<a href="/">  <span className="buynow">Read Now{">"}</span></a>
</div>
  
      </div>
    </div>
  </section>
  )
}

export default DocBlog