import React from 'react'

function LoanChart(props) {
  return (
    <table>
      <thead> 
        <tr>
          <th>Amount</th>
          <th>Interest Rate</th>
          <th>Payback Period</th>
        </tr>
        </thead> 
            {props.loans.map((v, i) => {
        return <tr key = {v[0]}>
          <th>{v[0]}</th>
          <th>{v[1]}</th>
          <th>{v[2]}</th>
        </tr>
      })}
    </table>
  );
}

export default LoanChart;