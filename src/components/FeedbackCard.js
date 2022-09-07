import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <section>
      <div className="fbcard">
        <div className="row">
           <div className="col">
   <div className="card">
     <img src={quotes} alt="double_quotes" className="quote-img" />
     <p> {content} </p>
     <img src={img} alt={name} className="" />
     <div className="fb-name">
       <h4 className="name">{name}</h4>
       <p className="f-title">{title}</p>
     </div>
   </div>
</div>
</div>
</div>
    </section>
  );
};
export default FeedbackCard;
