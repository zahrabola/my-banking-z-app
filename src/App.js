
import './App.css';
import CardDeal from "./components/CardDeal";
import Business from './components/Business';
import Billing from './components/Billing';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';

import Stocks from './components/Stocks';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
//import Currency from './components/Currency';

function App() {
  return (
    <div className="App">
      <div>Zahra Olanrewaju </div>
      <div className="container ">
        <div className="app-bg">
          <div className="box">
            <Navbar />
          </div>
        </div>
        <div className="app-bg">
          <div className="box">
            <Hero />
          </div>
        </div>
        <div className="app-bg">
          <div className="box">
            <Stats />
            <Business />
       
            <Billing />
            <CardDeal />
            <Stocks />
            <Testimonials />
            <div className="row">
              <div className="col-12">
                <Clients />
              </div>
              <CTA />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
