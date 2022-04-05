import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/Loan/settings-notifications';
import LoanApplication from '../components/Loan/settings-password';
import MatchLenders from 'src/components/Loan/LenderMatches';

const FormDisplay = () => (
  <>
    <Head>
      <title>
        Update Lender Profile
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Apply For a Loan
        </Typography>
        <Box >
        </Box>
        <MatchLenders /> 
        <Box >
          
        </Box>
      </Container>
    </Box>
  </>
);

Settings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default FormDisplay;
