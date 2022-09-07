import { card } from "../assets";

const CardDeal = () => {
  return (
    <section>
      <div className="carddeal">
        <div className="row">
          <div className="col-6  b-text cd-text">
            {" "}
            <h2 className="h1-b">
              {" "}
              Find a better card deal <br /> in few easy steps.
            </h2>
            <p className="p-b">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              Arcu tortor, <br /> purus in mattis at sed integer faucibus.
              <br /> 
            </p>
            <div className="row">Button</div>
          </div>
          <div className="col-5">
            <img src={card} alt="card-d" className="card-img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardDeal;
