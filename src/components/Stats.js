import { stats } from "../constatnts/Data";


const Stats = () => {
  return (
    <section>
      {stats.map((stat) => (
        <div className="stats">
          <div className="col-4">
            <h4 className="h4-stat">
              {stat.value} <span className="stat-t"> {stat.title}</span> |
            </h4>
           
          </div>
        </div>
      ))}
    </section>
  );
};
export default Stats;
