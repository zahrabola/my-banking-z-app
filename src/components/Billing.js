 import { apple, bill, google } from "../assets";
 
 
 
 const Billing = () => {
    return (
      <section>
        <div className="Billing">
          <div className="row">
            <div className="col-6">
              <img src={bill} alt="billing" className="bill-img " />
            </div>
            <div className="col-5 b-text bill-t">
              <h2 className="h1-b">Easily control your billing & invoicing</h2>
              <p className="p-b">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. <br />
                Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. <br />
                
              </p>
              <div className="row">
                <img src={apple} alt="google_play" className="img-bil" />
                <img src={google} alt="google_play" className="img-bil" />
              </div>
            </div>
          </div>
        </div>
     
      </section>
    );
    }
 export default Billing;