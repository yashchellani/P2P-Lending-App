import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
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

export const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    // } else if (selectedIndex === selectedCustomerIds.length - 1) {
    //   newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Requested Loan Value</TableCell>
                <TableCell>Requested Interest Rate</TableCell>
                <TableCell>Loan Length</TableCell>
                <TableCell>Expected Gains</TableCell>
                <TableCell>Purpose of Loan</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(page*limit, (page+1)*limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        //count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
