import React from 'react';
import { Box, Grid, Paper, Rating, Typography } from '@mui/material'

const ReviewHome = ({ rate }) => {
    const { Name, rating } = rate;
    const { title, review } = rate.review;
    return (

        <Grid item xs={12} md={12}>
            <Box style={{ padding: '50px 0' }}>
                <Paper style={{ height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                        {Name}
                    </Typography>
                    <Typography variant='h6'>
                        {title}
                    </Typography>
                    <Typography style={{ padding: '0 265px', margin: '15px 0', textAlign: 'center' }} variant='h6'>
                        {review.slice(0, 200)}...
                    </Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </Paper>
            </Box>
        </Grid>
    );
};

export default ReviewHome;