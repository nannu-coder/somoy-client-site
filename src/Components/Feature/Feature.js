import React from 'react';
import { Grid, Container, Typography } from '@mui/material'
import banner1 from '../../Images/banner-01.png'
import banner2 from '../../Images/banner-02.png'

const Feature = () => {
    return (
        <div style={{ margin: '20px 0' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <img src={banner1} alt="banner1" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={banner2} alt="banner2" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Feature;