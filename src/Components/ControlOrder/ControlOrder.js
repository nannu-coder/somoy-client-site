import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ControlOrder = ({ product }) => {
    const { Id, _id } = product;
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    alert('succesfully Deleted')
                }
            })
    }

    const Detail = products.filter(item => item._id == Id);

    return (
        <Card sx={{ maxWidth: 365 }}>
            <CardMedia
                component="img"
                height="400"
                image={Detail[0]?.img}

            />
            <CardContent>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', color: '#454545' }} component="div">
                    {Detail[0]?.name?.slice(0, 22)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Detail[0]?.shortDes?.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='card_btn' onClick={() => handleDelete(_id)}>Cancel Order</button>
                <Typography style={{ fontWeight: 'bold', color: '#ff4838' }} variant='h6'>
                    {Detail[0]?.price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default ControlOrder;