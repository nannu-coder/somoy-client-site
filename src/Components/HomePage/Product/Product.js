import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Products from '../Products/Products';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-hollows-72773.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <div className="product_heading">
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 7, marginTop: 4 }} variant="h4">
                            <span style={{ color: '#ff4838' }}>Latest</span> Products
                        </Typography>
                    </div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.slice(0, 6).map((product) => (
                            <Grid item xs={4} sm={4} md={4} key={product._id}>
                                <Products product={product}></Products>
                            </Grid>
                        ))}
                    </Grid>
                    <Box style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Link to='/allproduct'>
                            <button style={{ padding: '14px 50px', borderRadius: '25px', border: '1px solid #ff4838', margin: '15px 0', background: '#ff3848', color: '#ffff', cursor: 'pointer' }}>View More Product</button>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Product;