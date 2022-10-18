import React from "react";
import "./ourdoc.css";
import ourdoc01 from "../../assets/ourdoc01.png";
import hat from "../../assets/hat.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const OurDoc = () => {
  return (
    <section className="ourdocs">
      <div className="mainheadingdocs">
        <h1>Our Doctors</h1>
        <span>View All</span>
      </div>

     <Carousel >
     <div className="cardsourdoc">
        <div className="docscards">
          <span className="gyno">Gyneocologist</span>
          <div className="grydoc">
            <img className="gydoc" style={{width:"90px",height:"90px"}} src={ourdoc01} alt="" />
            <div className="grydoc001">
              <h1>Dr. Uma Devi</h1>
              <span className="ingrydoc">
                <img style={{width:"30px",height:"20px"}}  src={hat} alt="" /> <h2 style={{marginTop:"4px"}}>MBBS, MD (Psychiatry)</h2>
              </span>
            </div>
          </div>
          <div>
            <span  className="docinfo01">
              Specialised in <b> Sexual & Relationship Psychotherapy</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Consults done : <b>20243</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Experience : <b>8+ Years</b>
            </span>
            <span className="docprice">
              <h4>Consulting Fee</h4>
              <h5>$399 </h5>
            </span>

            <span className="doccardsbot">
              <h5>view Profile</h5>
              <button className="docpricebtn">Book now</button>
            </span>
          </div>
        </div>
        <div className="docscards">
          <span className="gyno">Gyneocologist</span>
          <div className="grydoc">
            <img className="gydoc" style={{width:"90px",height:"90px"}} src={ourdoc01} alt="" />
            <div className="grydoc001">
              <h1>Dr. Uma Devi</h1>
              <span className="ingrydoc">
                <img style={{width:"30px",height:"20px"}}  src={hat} alt="" /> <h2 style={{marginTop:"4px"}}>MBBS, MD (Psychiatry)</h2>
              </span>
            </div>
          </div>
          <div>
            <span  className="docinfo01">
              Specialised in <b> Sexual & Relationship Psychotherapy</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Consults done : <b>20243</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Experience : <b>8+ Years</b>
            </span>
            <span className="docprice">
              <h4>Consulting Fee</h4>
              <h5>$399 </h5>
            </span>

            <span className="doccardsbot">
              <h5>view Profile</h5>
              <button className="docpricebtn">Book now</button>
            </span>
          </div>
        </div>
      </div>
      
      <div className="cardsourdoc">
        <div className="docscards">
          <span className="gyno">Gyneocologist</span>
          <div className="grydoc">
            <img className="gydoc" style={{width:"90px",height:"90px"}} src={ourdoc01} alt="" />
            <div className="grydoc001">
              <h1>Dr. Uma Devi</h1>
              <span className="ingrydoc">
                <img style={{width:"30px",height:"20px"}}  src={hat} alt="" /> <h2 style={{marginTop:"4px"}}>MBBS, MD (Psychiatry)</h2>
              </span>
            </div>
          </div>
          <div>
            <span  className="docinfo01">
              Specialised in <b> Sexual & Relationship Psychotherapy</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Consults done : <b>20243</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Experience : <b>8+ Years</b>
            </span>
            <span className="docprice">
              <h4>Consulting Fee</h4>
              <h5>$399 </h5>
            </span>

            <span className="doccardsbot">
              <h5>view Profile</h5>
              <button className="docpricebtn">Book now</button>
            </span>
          </div>
        </div>
        <div className="docscards">
          <span className="gyno">Gyneocologist</span>
          <div className="grydoc">
            <img className="gydoc" style={{width:"90px",height:"90px"}} src={ourdoc01} alt="" />
            <div className="grydoc001">
              <h1>Dr. Uma Devi</h1>
              <span className="ingrydoc">
                <img style={{width:"30px",height:"20px"}}  src={hat} alt="" /> <h2 style={{marginTop:"4px"}}>MBBS, MD (Psychiatry)</h2>
              </span>
            </div>
          </div>
          <div>
            <span  className="docinfo01">
              Specialised in <b> Sexual & Relationship Psychotherapy</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Consults done : <b>20243</b>
            </span>
            <br></br>
            <span className="docinfo02">
              Experience : <b>8+ Years</b>
            </span>
            <span className="docprice">
              <h4>Consulting Fee</h4>
              <h5>$399 </h5>
            </span>

            <span className="doccardsbot">
              <h5>view Profile</h5>
              <button className="docpricebtn">Book now</button>
            </span>
          </div>
        </div>
      </div>


     </Carousel>

    </section>
  );
};

export default OurDoc;
