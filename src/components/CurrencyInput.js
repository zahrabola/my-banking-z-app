import PropTypes from "prop-types";



const  Currencyinput = (props)  => {
  return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
      
      />
      <select
        value={props.currency}
    
      >
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default Currencyinput;
