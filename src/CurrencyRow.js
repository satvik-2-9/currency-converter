import React from 'react'

export default function CurrencyRow(props) {
    /* standard prop destructuring */
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}></input>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => {
                    return (
                    <option value={option} key={option} >{option}</option>
                    )
                })}
                
            </select>
        </div>
    )
}
