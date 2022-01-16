import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material/'
import SellerProduct from '../SellerProduct/SellerProduct';

const BestSeller = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('https://dry-hollows-72773.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <div className="product_heading">
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 7, marginTop: 7 }} variant="h4">
                        <span style={{ color: '#ff4838' }}>Featured</span> New Arrival Best Seller On Sell
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {sellers.slice(7, 10).map((seller) => (
                        <Grid item xs={4} sm={4} md={4} key={seller._id}>
                            <SellerProduct seller={seller} ></SellerProduct>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default BestSeller;