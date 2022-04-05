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
  Typography
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
    console.log(myList[0])
    const [items, setItems] = useState([]);

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
            <TableCell>Accept</TableCell>
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
                <Button
                    >
                    Accept
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    )
}

export default MatchBorrowers


