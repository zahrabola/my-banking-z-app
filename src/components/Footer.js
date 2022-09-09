import {  logo} from "../assets";
import { footerLinks} from "../constatnts/Data";

const Footer = () => {
  return (
    <section>
      <div>
        <div className="row">
          <div className="col-6">
            <img src={logo} alt="z-bank" className="z-bank" />
            <p className="">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="col-6">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="footer-link">
                <h4>{footerlink.title}</h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={` ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
