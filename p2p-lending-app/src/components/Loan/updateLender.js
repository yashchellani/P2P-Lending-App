import { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { AddLocationAlt } from '@mui/icons-material';
import MatchLenders from './LenderMatches';

// export const SettingsPassword = (props) => {
//   const [values, setValues] = useState({
//     amount: 0,
//     interest: 0.0,
//     paybackPeriod: 0
//   });
//}

function LenderProfile({addLoan}){
  //trying an alternate approach
  const [maxAmount, setAmount] = useState(0);
  const [minInterest, setInterest] = useState(0.0);
  const [maxPayback, setPayback] = useState(0);

  useEffect(() => {
    localStorage.setItem('lenderDetails', JSON.stringify([maxAmount, minInterest, maxPayback]));
  }, [maxAmount, minInterest, maxPayback]);
  
  const handleSubmit = (e) => {
    addLoan([maxAmount, minInterest, maxPayback]);
    e.preventDefault();
  }
  

  return (
    //<form {...props}>
    <form onSubmit={e => { handleSubmit(e) }}>
      <Card>
        <CardHeader
          subheader="Enter details"
          title="Lender Preferences"
        />

        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Maximum Amount"
            margin="normal"
            name="amount"
            //onChange={handleChange}
            type="number"
            //value={values.amount}
            value={maxAmount}
            onChange={e => setAmount(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Minimum Expected Interest Rate (%)"
            margin="normal"
            name="interest rate"
            type="number"
            //value={values.interest}
            value={minInterest}
            onChange={e => setInterest(e.target.value)}
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Maximum Payback Period"
            margin="normal"
            name="confirm"
            type="number"
           
            value={maxPayback}
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
          <Button
            color="primary"
            variant="contained"
            type = "submit" 
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default LenderProfile;
