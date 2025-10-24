import {Box, Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';

export const OrderComplete = () => {
  const location = useLocation();
  const contact = location.state?.contact || '';

  const isEmail = contact.includes('@');

  return (
    <Box p="1rem">
      <Typography variant="h6" mb="1rem" letterSpacing="0.2rem" fontWeight="600">
        Order Complete
      </Typography>
      <Typography>
        {isEmail
          ? `An email has been sent to ${contact} with your order details.`
          : `A message has been sent to ${contact} with your order details.`}
      </Typography>
      <Typography mt={1}>
        Your order will be completed in approximately 20 minutes.
      </Typography>
    </Box>
  );
};