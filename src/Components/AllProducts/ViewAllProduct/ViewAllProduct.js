import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ViewAllProduct = ({ product }) => {
    const { img, shortDes, name, _id, price } = product;
    return (
        <Card sx={{ maxWidth: 365 }}>
            <CardMedia
                component="img"
                height="400"
                image={img}

            />
            <CardContent>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', color: '#454545' }} component="div">
                    {name.slice(0, 22)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {shortDes?.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link style={{ color: '#ffff' }} to={`/buynow/${_id}`}><button className='card_btn'>Buy Now</button></Link>
                <Typography style={{ fontWeight: 'bold', color: '#ff4838' }} variant='h6'>
                    {price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default ViewAllProduct;