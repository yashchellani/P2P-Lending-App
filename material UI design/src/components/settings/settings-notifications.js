import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@mui/material';

export const SettingsNotifications = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="Select the purpose of your loan application."
        title="Loan Purpose"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={6}
          wrap="wrap"
        >
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Personal Loan
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  //defaultChecked
                />
              )}
              label="Personal expenses"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  //defaultChecked
                />
              )}
              label="Emergency expenses"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Tuition Loan"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  //defaultChecked
                />
              )}
              label="Other"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Small Business Loan
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  //defaultChecked
                />
              )}
              label="Home-based business"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Personal passion project"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  //defaultChecked
                />
              )}
              label="Start-up"
            />
          </Grid>
        </Grid>
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
        >
          Save
        </Button>
      </Box>
    </Card>
  </form>
);
