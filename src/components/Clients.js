import { clients } from "../constatnts/Data";

const Clients = () => {
  return (
    <section className="clients">
      <div className="cl-row">
        {clients.map((client) => (
          <div
            key={client.id}
            className="cl-id"
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="cl-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients;
