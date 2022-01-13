import React from 'react';
import { Grid, Container, Typography } from '@mui/material'
import banner3 from '../../Images/banner-03.png'
import banner4 from '../../Images/banner-04.png'

const AnotherFeature = () => {
    return (
        <div style={{ margin: '40px 0' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <img src={banner3} alt="banner1" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={banner4} alt="banner2" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AnotherFeature;