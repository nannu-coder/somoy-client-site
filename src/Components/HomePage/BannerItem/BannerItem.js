import { Grid } from '@mui/material';
import React from 'react';
import './BannerItem.css'

const BannerItem = ({ item }) => {
    const { img, name } = item;

    const backgroundImg = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className='slider'>
            <div style={backgroundImg} className="slider_img">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div style={{ position: 'relative', zIndex: 5 }} className="slider_content">
                            <h1>{name}</h1>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default BannerItem;