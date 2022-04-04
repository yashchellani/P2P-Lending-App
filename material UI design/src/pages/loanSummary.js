
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import LoanSummary from '../components/userInput/LoanSummary';


const Summary = () => (
  <>
    <Head>
      <title>
        Loan Summary
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ mt: 3 }}>
          <LoanSummary data={} />
        </Box>
      </Container>
    </Box>
  </>
);
Summary.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Summary;

