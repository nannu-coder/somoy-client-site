import { Grid, Container, Typography } from '@mui/material';
import React from 'react';
import './BannerItem.css'

const BannerItem = ({ item }) => {
    const { img, name, title, description } = item;

    const backgroundImg = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat'
    }

    return (
        <div className='slider' style={{ marginTop: '80px' }}>
            <div style={backgroundImg} className="slider_img">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <div style={{ position: 'relative', zIndex: 5 }} className="slider_content">
                                <Typography style={{ marginTop: '150px' }} className='banner_name' variant="h6">
                                    {name}
                                </Typography>
                                <Typography style={{ fontWeight: 'bold', margin: '20px 0' }} className='banner_title' variant="h2">
                                    {title}
                                </Typography>
                                <Typography style={{ maxWidth: '550px', fontSize: '18px' }} className='banner_des' variant="subtitle1">
                                    {description}
                                </Typography>
                                <button className='banner_btn'>Buy Now</button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default BannerItem;