import { features } from "../constatnts/Data";




const FeatureCard = ({ icon, title, content, index }) => (
  <div>
    <div className="business-t">
      <img src={icon} alt="star" className="star-img" />
      <h4 className="b-title">{title}</h4>
      <p className="b-content">{content}</p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section>
      <div className="business">
        <div className="row">
          <div className="col-6 b-text">
            <h2 className="h1-b">
              You do the business, <br /> we’ll handle the money.
            </h2>
            <p className="p-b">
              With the right credit card, you can improve your financial life by
              building credit, <br />
              earning rewards and saving money. <br />
              But with hundreds of credit cards on the market.
            </p>
            <div className="row">Button</div>
          </div>

          <div className="col-5 ">
            <div className="">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Business;
