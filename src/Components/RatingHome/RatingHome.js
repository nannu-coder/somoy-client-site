import { Grid, Typography, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import ReviewHome from '../ReviewHome/ReviewHome';

const RatingHome = () => {
    const [rating, setRating] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setRating(data))
    }, [])

    return (
        <div>
            <Container>
                <div className="product_heading">
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: 7 }} variant="h4">
                        <span style={{ color: '#ff4838' }}>Client</span> Say About Us
                    </Typography>
                </div>
                <Carousel
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                >
                    {
                        rating.map((rate, i) => <ReviewHome
                            key={rate._id}
                            rate={rate}
                        ></ReviewHome>)
                    }
                </Carousel>
            </Container>
        </div>
    );
};

export default RatingHome;