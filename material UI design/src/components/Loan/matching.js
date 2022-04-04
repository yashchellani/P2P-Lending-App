//here we will display a table with the appropriate lenders, and a chart with the loan details. 
//adopted from this tutorial: https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd

import React from 'react';
import { useState } from 'react';
import { addLocale } from 'next/dist/shared/lib/router/router';
import LoanApplication from './settings-password';
import LoanChart from './LoanChart';
import {Link, useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import MatchLenders from './LenderMatches';


function Matching(props){
    const [loanDetails, setLoanDetails] = useState([]);
    const addLoan = (loanApp) => {
        let loanApps = [...loanDetails, loanApp];
        setLoanDetails(loanApps);
    }
    // const toComponentB=()=>{
    //     navigate('/matchingChart',{state:[20, 10, 100]});
    //       }

    return (
        <section>
            <LoanApplication addLoan = {addLoan} />
            
            {/* <div>
                <Button onClick={()=>{toComponentB()}}>Send Request</Button>
            </div> */}
            
        </section>
    );
}

export default Matching;