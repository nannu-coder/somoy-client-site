import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ViewAllProduct from '../ViewAllProduct/ViewAllProduct';

const AllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-hollows-72773.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, marginTop: '100px' }}>
            <Container>
                <div className="product_heading">
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 7, marginTop: 4 }} variant="h4">
                        <span style={{ color: '#ff4838' }}>All</span> Products
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product) => (
                        <Grid item xs={4} sm={4} md={4} key={product._id}>
                            <ViewAllProduct product={product}></ViewAllProduct>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AllProduct;