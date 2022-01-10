import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Products = ({ product }) => {
    const { img, shortDes, name, _id } = product;
    return (
        <Card sx={{ maxWidth: 355 }}>
            <CardMedia
                component="img"
                height="350"
                image={img}

            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {name.slice(0, 54)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {shortDes?.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/buynow/${_id}`}>
                    <Button size="small">Buy Now</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Products;