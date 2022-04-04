//filter the lenders here

import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { products } from 'src/__mocks__/products';
import {
  Avatar,
  Box,
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

    useEffect (() =>{
        const items = JSON.parse(localStorage.getItem('loanDetails'));
        console.log("This part has been run")
        console.log(items)
        if (items){
            setItems(items);
        }
    }, [0,0,0]);

    return(
        <ul>
        {
            myList.filter(element => element.maxAmount > parseInt(items[0]) && parseInt(items[1]) && element.maxPeriod >= parseInt(items[2]))
            .map(element => <li key = {element.id}>{[element.name, "  ", element.maxAmount, "  ",element.ir,"  ", element.maxPeriod]}</li>)
        }
        </ul>
    )
}

export default MatchLenders


