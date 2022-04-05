//filter the lenders here

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { customers } from 'src/__mocks__/customers';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal
} from '@mui/material';

function request(){
  alert("Request sent ");
}
const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

function MatchBorrowers(){
    const myList = customers;
    
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    useEffect (() =>{
        const items = JSON.parse(localStorage.getItem('lenderDetails'));
        //console.log("This part has been run")
        try {
          console.log(items[0])
        } catch (error) {
          console.log("error");
        }
        //console.log(items[0])
        if (items){
            setItems(items);
        }
    }, [0,0,0]);

    return(
        // <ul>
        // {
        //     myList.filter(element => element.maxAmount > parseInt(items[0]) && parseInt(items[1]) && element.maxPeriod >= parseInt(items[2]))
        //     .map(element => <li key = {element.id}>{[element.name, "  ", element.maxAmount, "  ",element.ir,"  ", element.maxPeriod]}</li>)
        // }
        // </ul>

      <Box sx={{ minWidth: 1050 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Amount Requested</TableCell>
            <TableCell>Interest Rate</TableCell>
            <TableCell>Loan Period</TableCell>
            <TableCell>Purpose</TableCell>
            <TableCell>
            <Button>Accept</Button>
               
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
         myList.filter(element => element.amount <= parseInt(items[0]) && element.ir >= parseInt(items[1]) && element.period <= parseInt(items[2]))
            .map(element => (
            <TableRow
              hover
              key={element.id}
              //selected={selectedCustomerIds.indexOf(customer.id) !== -1}
            >
              <TableCell>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography color="textPrimary" variant="body1">
                    {element.id}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{element.name}</TableCell>
              <TableCell>{element.amount}</TableCell>
              <TableCell>{element.ir}</TableCell>
              <TableCell>{element.period}</TableCell>
              <TableCell>{element.purpose}</TableCell>
              <TableCell>
                <Button onClick={handleOpen}>
                    Accept
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                    Loan Accepted!
                    </Typography>
                    <Typography id="modal-modal-description" variant = "h6" sx={{ mt: 2 }}>
                    We have started to process the loan agreement and will shortly connect you with the borrower. 
                    </Typography>
                </Box>
        </Modal>
      </Box>
    )
}

export default MatchBorrowers


