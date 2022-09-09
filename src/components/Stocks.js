import React from "react";
import Plot from "react-plotly.js";
/// Api key = 5K5S3RKX4QZL8NH7.
//// var url = https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo;
/// uk url = https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo
///// https://reactjs.org/docs/higher-order-components.html
/// https://dev.to/dheerajmurali/building-a-responsive-chart-in-react-with-plotly-js-4on8 --- responsive 
//// https://www.alphavantage.co/
class Stock extends React.Component {
 constructor(props)
 {
   super(props);
   this.state = {
     stockChartXValues: [],
     stockChartYValues: [],
   };
 }

 componentDidMount()
 {
   this.fetchStock();
 }
 fetchStock()
 {
   const pointerToThis = this;
   console.log(pointerToThis);
   //let StockSymbol = "AMZN";
   const Apikey = "5K5S3RKX4QZL8NH7";
   let Apicall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=compact&apikey=${Apikey}`;
   let stockChartXValuesFunction = [];
   let stockChartYValuesFunction = [];

   fetch(Apicall)
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
       console.log(data);

       for (var key in data["Time Series (Daily)"]) {
         stockChartXValuesFunction.push(key);
         stockChartYValuesFunction.push(
           data["Time Series (Daily)"][key]["1. open"]
         );
       }

       console.log(stockChartXValuesFunction);
       pointerToThis.setState({
         stockChartXValues: stockChartXValuesFunction,
         stockChartYValues: stockChartYValuesFunction,
       });
     });
 }
  render() {


 return (
   <div>
     <h1 className="currency-converter">Stocks</h1>
     <div className="row">
       <div className="col-12 line-graph">
         <Plot
           className="line-s"
           data={[
             {
               x: this.state.stockChartXValues,
               y: this.state.stockChartYValues,
               type: "scatter",
               mode: "lines+markers",
               marker: { color: "#3ae8f1" },
             },
           ]}
           layout={{ width: 720, height: 440, title: "London Stock Exchange" }}
         />
       </div>
     </div>
   </div>
 );









        }

};
export default Stock;
