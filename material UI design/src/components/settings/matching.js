//here we will display a table with the appropriate lenders, and a chart with the loan details. 
//adopted from this tutorial: https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd

import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { addLocale } from 'next/dist/shared/lib/router/router';
import LoanApplication from './settings-password';
import LoanChart from './LoanChart';

function Matching(props){
    const [loanDetails, setLoanDetails] = useState([]);
    const addLoan = (loanApp) => {
        let loanApps = [...loanDetails, loanApp];
        setLoanDetails(loanApps);
    }

    return (
        <section>
            <LoanApplication addLoan = {addLoan} />
            <LoanChart loans = {loanDetails} />
        </section>
    );
}

export default Matching;