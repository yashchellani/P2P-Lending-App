import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { AddLocationAlt } from '@mui/icons-material';

// export const SettingsPassword = (props) => {
//   const [values, setValues] = useState({
//     amount: 0,
//     interest: 0.0,
//     paybackPeriod: 0
//   });
//}

function LoanApplication({addLoan}){
  //trying an alternate approach
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0.0);
  const [payback, setPayback] = useState(0);

  const handleSubmit = (e) => {
    addLoan([amount, interest, payback]);
    e.preventDefault();
  }

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   });
  // };

  return (
    //<form {...props}>
    <form onSubmit={e => { handleSubmit(e) }}>
      <Card>
        <CardHeader
          subheader="Enter Loan Details"
          title="Loan Details"
        />

        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Amount"
            margin="normal"
            name="amount"
            //onChange={handleChange}
            type="number"
            //value={values.amount}
            value={amount}
            onChange={e => setAmount(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Enter Interest Rate"
            margin="normal"
            name="interest rate"
            type="number"
            //value={values.interest}
            value={interest}
            onChange={e => setInterest(e.target.value)}
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Enter Payback Period"
            margin="normal"
            name="confirm"
            type="number"
           
            value={payback}
            onChange={e => setPayback(e.target.value)}
            variant="outlined"
          />

        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          {/* <Button
            color="primary"
            variant="contained"
            type = "submit"
          >
            Update
          </Button> */}
           <input 
          type='submit' 
          value='Add Details' 
        />
        </Box>
      </Card>
    </form>
  );
}

export default LoanApplication;
