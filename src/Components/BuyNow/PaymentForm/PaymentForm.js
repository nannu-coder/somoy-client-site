import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import BuyNow from '../BuyNow/BuyNow';

const PaymentForm = ({ paymentData, setPaymentData }) => {


    const data = (event) => {
        event.preventDefault()
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...paymentData }
        newData[field] = value;
        setPaymentData(newData)
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Box component="form">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardName"
                            label="Name on card"
                            name="cardName"
                            onBlur={data}
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardNumber"
                            label="Card number"
                            name="cardNumber"
                            onBlur={data}
                            fullWidth
                            autoComplete="cc-number"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="expDate"
                            label="Expiry date"
                            name="exDate"
                            onBlur={data}
                            fullWidth
                            autoComplete="cc-exp"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            name="cvv"
                            onBlur={data}
                            helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                </Grid>
                {/* <BuyNow paymentData={paymentData}></BuyNow> */}
            </Box>
        </React.Fragment>
    );
};

export default PaymentForm;