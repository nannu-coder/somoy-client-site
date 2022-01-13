import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SellerProduct = ({ seller }) => {
    const { img, name, price } = seller;
    return (
        <Card sx={{ maxWidth: 365 }}>
            <CardMedia
                component="img"
                height="400"
                image={img}

            />
            <CardContent style={{ padding: 0 }}>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', color: '#454545', textAlign: 'center' }} component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>
                <Typography style={{ fontWeight: 'bold', color: '#ff4838', textAlign: 'center' }} variant='h6'>
                    {price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default SellerProduct;