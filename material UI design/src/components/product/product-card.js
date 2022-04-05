import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';

export const ProductCard = ({ question, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h6"
      >
        {question.name}
      </Typography>
      
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Typography
          align="left"
          color="textPrimary"
          variant="body1"
        >
        {question.answer}
      </Typography>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

/*
<Box sx={{ m: 1 }}>
  <Button
    startIcon={(<UploadIcon fontSize="small" />)}
    sx={{ mr: 1 }}
  >
    Import
  </Button>
  <Button
    startIcon={(<DownloadIcon fontSize="small" />)}
    sx={{ mr: 1 }}
  >
    Export
  </Button>
  <Button
    color="primary"
    variant="contained"
  >
    Add products
  </Button>
</Box>
*/