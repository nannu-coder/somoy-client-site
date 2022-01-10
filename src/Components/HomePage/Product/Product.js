import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Products from '../Products/Products';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <div className="product_heading">
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 7, marginTop: 4 }} variant="h3">
                        Latest Products
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.slice(0, 6).map((product) => (
                        <Grid item xs={4} sm={4} md={4} key={product._id}>
                            <Products product={product}></Products>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Product;