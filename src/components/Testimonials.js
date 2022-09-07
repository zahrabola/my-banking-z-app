import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constatnts/Data";
const Testimonials = () => {
  return (
    <section>
      <div className="testimonals">
        <div className="row">
          <div className="col-6">
            <h2 className="h1-b">
              {" "}
              What People are <br /> saying about us
            </h2>
          </div>
          <div className="col-5 bill-t">
            <p className="test-text">
              Everything you need to accept card payments and grow your business
              anywhere on the planet. Everything you need to accept card
              payments and grow your business anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="row">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
        <div> Testimonials </div>
      </div>
    </section>
  );
};
export default Testimonials;
