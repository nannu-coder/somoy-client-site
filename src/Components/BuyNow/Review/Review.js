import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Review = ({ orderData, Id }) => {
    const [products, setProducts] = useState([]);
    const { firstName, lastName, address1, city, state, zip, country, cardName, cardNumber, exDate, } = orderData;
    const address = { address1: address1, city: city, state: state, zip: zip, country: country }
    const finalAddress = Object.values(address);
    const newAddress = finalAddress.join(', ');

    console.log(orderData)

    const payments = [
        { name: 'Card type', detail: cardName },
        { name: 'Card holder', detail: `Mr ${firstName} ${lastName}` },
        { name: 'Card number', detail: cardNumber },
        { name: 'Expiry date', detail: exDate },
    ];

    useEffect(() => {
        fetch('https://dry-hollows-72773.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const newProduct = products.filter(product => product._id == Id);

    const price = newProduct[0]?.price.slice(1, 6);
    const newPrice = parseFloat(price);
    const vat = newPrice * 5 / 100;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary={newProduct[0]?.name} secondary={newProduct?.shortDes} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${newPrice}
                    </Typography>
                </ListItem>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Shipping Cost" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${50}
                    </Typography>
                </ListItem>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="vat" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${vat}
                    </Typography>
                </ListItem>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${newPrice + vat + 50}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{firstName}</Typography>
                    <Box>
                        <Typography gutterBottom>
                            {newAddress}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container spacing={2}>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.detail}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Review;