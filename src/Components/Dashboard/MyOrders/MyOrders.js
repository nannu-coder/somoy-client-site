import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Box, Container, Grid, Typography } from '@mui/material';
import ViewMyOrder from '../ViewMyOrder/ViewMyOrder';




const MyOrders = () => {
    const { user } = useAuth();
    const [myorder, setMyOrder] = useState([]);

    useEffect(() => {
        fetch(`https://dry-hollows-72773.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1, marginTop: '100px' }}>
            <Container>
                <div className="product_heading">
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 7, marginTop: 4 }} variant="h4">
                        <span style={{ color: '#ff4838' }}>MY</span> Order Review
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {myorder.map((product) => (
                        <Grid item xs={4} sm={4} md={4} key={product._id}>
                            <ViewMyOrder product={product}></ViewMyOrder>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MyOrders;