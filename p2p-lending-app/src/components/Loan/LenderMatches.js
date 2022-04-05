//filter the lenders here

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { products } from 'src/__mocks__/products';
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
import { getInitials } from '../../utils/get-initials';

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

function MatchLenders(){
    const myList = products;
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
        const items = JSON.parse(localStorage.getItem('loanDetails'));
        console.log("This part has been run")
        console.log(items)
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
            <TableCell>Max Amount</TableCell>
            <TableCell>Minimum Interest Rate</TableCell>
            <TableCell>Max Loan Period</TableCell>
            <TableCell>Apply</TableCell>
            {/* <TableCell>Expected Gains</TableCell>
            <TableCell>Purpose of Loan</TableCell>
            <TableCell>Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {
        myList.filter(element => element.maxAmount >= parseInt(items[0]) && element.ir <= parseInt(items[1]) && element.maxPeriod >= parseInt(items[2]))
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
              <TableCell>{element.maxAmount}</TableCell>
              <TableCell>{element.ir}</TableCell>
              <TableCell>{element.maxPeriod}</TableCell>
             <TableCell>
                <Button onClick={handleOpen}>
                    Apply
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
                    Application Submitted!
                    </Typography>
                    <Typography id="modal-modal-description" variant = "h6" sx={{ mt: 2 }}>
                    Your application has been sent to lending users on the network! 
                    </Typography>
                </Box>
        </Modal>
      </Box>
    )
}

export default MatchLenders


