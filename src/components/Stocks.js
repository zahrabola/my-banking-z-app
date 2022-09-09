import React from "react";
import Plot from "react-plotly.js";
/// Api key = 5K5S3RKX4QZL8NH7.
//// var url = https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo;
/// uk url = https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo

const Stocks = () => {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock(){
    const Apikey = '5K5S3RKX4QZL8NH7';
    let Apicall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo`

  }

  return (
    <div>
      <h1 className="currency-converter">Stocks</h1>

     
    </div>
  );
};
export default Stocks;
