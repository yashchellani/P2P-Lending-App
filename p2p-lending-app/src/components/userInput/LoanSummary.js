export default function LoanSummary(props) {

    return (
        <div>
            <h1>Loan Summary</h1>
            <h3>Loan Amount: ${props.data.amount} </h3>
            <h3>Interest rate: {props.data.interestRate}% </h3>
            <h3>Monthly payback date: {props.data.date} of every month </h3>
            <h3>Payback period: {props.data.period} month(s) </h3>
        </div>

    );
}

