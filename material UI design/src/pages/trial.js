import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/Loan/settings-notifications';
import LoanApplication from '../components/Loan/settings-password';
import Matching from 'src/components/Loan/matching';
import MatchLenders from 'src/components/Loan/LenderMatches';

const Settings2 = () => (
  <>
    <Head>
      <title>
        Check loan
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
          Check loan details
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

Settings2.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Settings2;
