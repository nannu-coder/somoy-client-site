import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ControlOrder from '../../ControlOrder/ControlOrder'


const ManageOrder = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-hollows-72773.herokuapp.com/orders/allorders')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
            <Container>
                <div className="product_heading">
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 7, marginTop: 4 }} variant="h4">
                        <span style={{ color: '#ff4838' }}>ALL</span> Orders
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product) => (
                        <Grid item xs={4} sm={4} md={4} key={product._id}>
                            <ControlOrder product={product}></ControlOrder>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    );
};

export default ManageOrder;