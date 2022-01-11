import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const AddressForm = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Box component="form">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name="firstName"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    {...field}
                                    error={errors.firstName}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Controller
                            control={control}
                            name="lastName"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                    {...field}
                                    error={errors.lastName}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="address1"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                    {...field}
                                    error={errors.address1}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <Controller
                            control={control}
                            name="address2"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="address2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    variant="standard"
                                    {...field}
                                    error={errors.address2}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Controller
                            control={control}
                            name="city"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    variant="standard"
                                    {...field}
                                    error={errors.city}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Controller
                            control={control}
                            name="state"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    variant="standard"
                                    {...field}
                                    error={errors.state}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Controller
                            control={control}
                            name="zip"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    variant="standard"
                                    {...field}
                                    error={errors.zip}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Controller
                            control={control}
                            name="country"
                            rules={{
                                required: true
                            }}
                            render={({ field }) => (
                                <TextField
                                    id="country"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    variant="standard"
                                    {...field}
                                    error={errors.country}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default AddressForm;