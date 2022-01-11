import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const PaymentForm = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Box component="form">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                        <Controller
                            control={control}
                            name="cardName"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="cardName"
                                    label="Name on card"
                                    fullWidth
                                    autoComplete="cc-name"
                                    variant="standard"
                                    {...field}
                                    error={errors.cardName}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Controller
                            control={control}
                            name="cardNumber"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="cardNumber"
                                    label="Card number"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                    {...field}
                                    error={errors.cardNumber}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Controller
                            control={control}
                            name="exDate"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="expDate"
                                    label="Expiry date"
                                    fullWidth
                                    autoComplete="cc-exp"
                                    variant="standard"
                                    {...field}
                                    error={errors.exDate}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Controller
                            control={control}
                            name="cvv"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="cvv"
                                    label="CVV"
                                    helperText="Last three digits on signature strip"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    {...field}
                                    error={errors.cvv}
                                />
                            )}
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