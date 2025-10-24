import {TextField, Box, Typography, Button} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

export const Order = () => {
  const [usePhone, setUsePhone] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const navigate = useNavigate();

  const toggleInput = () => setUsePhone(!usePhone)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone) return;
    navigate('OrderComplete', {state: {contact: emailOrPhone}})
  };

  return (
    <Box
      p='1rem'>
      <Typography
        variant="h6"
        fontWeight="600"
        mb="1rem"
        letterSpacing="0.2rem"
      >
        Order:</Typography>

      <form onSubmit={handleSubmit} style={{
        display: "flex",
        height: "3.5rem"
      }}>
        <TextField
          required
          label={usePhone ? 'Phone' : 'Email'}
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}/>
        <Button variant="contained" onClick={handleSubmit}>
          Submit Order
        </Button>
      </form>
      <Typography
        variant="body1"
        color="secondary.main"
        sx={{
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
        onClick={toggleInput}>
        use {usePhone ? 'email' : 'phone'} instead?
      </Typography>
    </Box>
  )
}