import { clients } from "../constatnts/Data";

const Clients = () => {
  return (
    <section className="clients">
      <div className="cl-row">
    
        <div className="box1">

          <div>
            {clients.map((client) => (
              <div key={client.id} className="id-cl" >
                <img src={client.logo} alt="client_logo" className="cl-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clients;
