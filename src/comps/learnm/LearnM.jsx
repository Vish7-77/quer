import React,{useEffect} from "react";
import search from "../../assets/search.png";
import arr from "../../assets/arr.png";
import virus from "../../assets/virus.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./lm.css";
const LearnM = () => {





  return (
    <section className="learnm">
      <div className="upperlm">
        <h1> learn more about your condition </h1>
      </div>
      <div className="lowerlm">
      <OwlCarousel className="mobno owl-theme "  items={2} margin={10} nav>
         
            <div className="sl0010" >
              <img
                className="sl001img"
                style={{ width: "32px", height: "32px",matginTop:'-20px' }}
                src={search}
                alt=""
              />
              <h1>Causes</h1>
              <span>
                Health conditions are peripheral aerty disease atherosclerious,
                diabities,hypertenous, obsecity, etc. can cause reduced blood
                flowto penis due to artey narrowing, Furthermore injury to the
                spiral cord or radiation therpy can disrupt or harm nerve
                present in the penis{" "}
              </span>
              <div className="lastcause" >
                <span>Learn more</span>
                <img
                  className="arr"
                  style={{ width: "16px", height: "16px" }}
                  src={arr}
                  alt=""
                />
              </div>
            </div>

            <div className="sl001">
              <img
                className="sl001img"
                style={{ width: "32px", height: "32px" }}
                src={virus}
                alt=""
              />
              <h1>Symptoms</h1>
              <span>
                <ul>
                  The symptoms of erectile dysfunction include:
                  <li>Difficulty in getting an erection</li>
                  <li>Difficulty in maintaining an erection</li>
                  <li>Getting a partial erection, not firm/hard enough</li>
                  <li>Reduced libido or sexual desire</li>
                  <li>
                    Increased anxiety and stress associated with sexual
                    intercourse
                  </li>
                </ul>{" "}
              </span>
              <div className="lastcause" >
                <span>Learn more</span>
                <img
                  className="arr"
                  style={{ width: "16px", height: "16px" }}
                  src={arr}
                  alt=""
                />
              </div>
            </div>
            <div className="sl001">
              <img
                className="sl001img"
                style={{ width: "32px", height: "32px" }}
                src={virus}
                alt=""
              />
              <h1>Symptoms</h1>
              <span>
                <ul>
                  The symptoms of erectile dysfunction include:
                  <li>Difficulty in getting an erection</li>
                  <li>Difficulty in maintaining an erection</li>
                  <li>Getting a partial erection, not firm/hard enough</li>
                  <li>Reduced libido or sexual desire</li>
                  <li>
                    Increased anxiety and stress associated with sexual
                    intercourse
                  </li>
                </ul>{" "}
              </span>
              <div className="lastcause">
                <span>Learn more</span>
                <img
                  className="arr"
                  style={{ width: "16px", height: "16px" }}
                  src={arr}
                  alt=""
                />
              </div>
            </div>
      
     
          </OwlCarousel  >
          <OwlCarousel className="deskt owl-theme "  items={1} margin={10} nav>
         
         <div className="sl0010" >
           <img
             className="sl001img"
             style={{ width: "32px", height: "32px",matginTop:'-20px' }}
             src={search}
             alt=""
           />
           <h1>Causes</h1>
           <span>
             Health conditions are peripheral aerty disease atherosclerious,
             diabities,hypertenous, obsecity, etc. can cause reduced blood
             flowto penis due to artey narrowing, Furthermore injury to the
             spiral cord or radiation therpy can disrupt or harm nerve
             present in the penis{" "}
           </span>
           <div className="lastcause" >
             <span>Learn more</span>
             <img
               className="arr"
               style={{ width: "16px", height: "16px" }}
               src={arr}
               alt=""
             />
           </div>
         </div>

         <div className="sl001">
           <img
             className="sl001img"
             style={{ width: "32px", height: "32px" }}
             src={virus}
             alt=""
           />
           <h1>Symptoms</h1>
           <span>
             <ul>
               The symptoms of erectile dysfunction include:
               <li>Difficulty in getting an erection</li>
               <li>Difficulty in maintaining an erection</li>
               <li>Getting a partial erection, not firm/hard enough</li>
               <li>Reduced libido or sexual desire</li>
               <li>
                 Increased anxiety and stress associated with sexual
                 intercourse
               </li>
             </ul>{" "}
           </span>
           <div className="lastcause" >
             <span>Learn more</span>
             <img
               className="arr"
               style={{ width: "16px", height: "16px" }}
               src={arr}
               alt=""
             />
           </div>
         </div>
         <div className="sl001">
           <img
             className="sl001img"
             style={{ width: "32px", height: "32px" }}
             src={virus}
             alt=""
           />
           <h1>Symptoms</h1>
           <span>
             <ul>
               The symptoms of erectile dysfunction include:
               <li>Difficulty in getting an erection</li>
               <li>Difficulty in maintaining an erection</li>
               <li>Getting a partial erection, not firm/hard enough</li>
               <li>Reduced libido or sexual desire</li>
               <li>
                 Increased anxiety and stress associated with sexual
                 intercourse
               </li>
             </ul>{" "}
           </span>
           <div className="lastcause">
             <span>Learn more</span>
             <img
               className="arr"
               style={{ width: "16px", height: "16px" }}
               src={arr}
               alt=""
             />
           </div>
         </div>
   
  
       </OwlCarousel  >
      </div>
      <div className="custsat">
     <div className="mainincust">
      <h1>89%</h1>
      <span>Customer satisfaction</span>
     </div>
<span>
  Via craefully curated of treatment
</span>
      </div>
    </section>
  );
};

export default LearnM;
