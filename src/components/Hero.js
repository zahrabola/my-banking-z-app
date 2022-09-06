import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-5">
            <p className="h-par">
              <span>
                <img src={discount} alt="discount" className="dis-img" />
              </span>
              <span> 20%</span> Discount for <span>1 month</span> Account
            </p>
            <h1>
              The Next <br />
              <span id="h1-col">Generation</span>
              <br />
              Payment Method.
            </h1>
            <p className="par-her0">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs.<br/> We examine annual percentage
              rates, annual fees.
            </p>
           
          </div>
       <div className="col-1 btnh"> <GetStarted /> </div>
          <div className="col-5 ">
            <img src={robot} alt="billing" className="img-robot" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
