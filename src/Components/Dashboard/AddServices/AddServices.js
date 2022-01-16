import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from '@mui/material';

const AddServices = () => {
    const [service, setService] = useState({});

    const handleBlur = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const data = event.target.value;
        const newData = { ...service }
        newData[field] = data;
        setService(newData)
        console.log(newData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = service;
        console.log(values)

        fetch('https://dry-hollows-72773.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId !== '') {
                    alert('success');
                    event.target.reset();
                }
            })


    }
    return (
        <Box style={{ marginTop: '20px' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} md={12}>
                        <div class="review_experience">
                            <div className="ratingField">
                                <form onSubmit={handleSubmit}>
                                    <Typography style={{ marginTop: '15px' }} variant="h6">Product Image URL</Typography>
                                    <TextField
                                        required
                                        style={{ margin: '0 0 30px 0' }}
                                        id="standard-basic"
                                        label="https://img.png"
                                        name='img'
                                        onBlur={handleBlur}
                                        type='text'
                                    />

                                    <Typography style={{ marginTop: '15px' }} variant="h6">Product Name</Typography>
                                    <TextField
                                        required
                                        style={{ margin: '0 0 30px 0' }}
                                        id="standard-basic"
                                        label="Name"
                                        name='name'
                                        onBlur={handleBlur}
                                        type='text'
                                    />

                                    <Typography style={{ marginTop: '15px' }} variant="h6">Product Price</Typography>
                                    <TextField
                                        required
                                        style={{ margin: '0 0 30px 0' }}
                                        id="standard-basic"
                                        label="$199.00"
                                        name='price'
                                        onBlur={handleBlur}
                                        type='text'
                                    />

                                    <Typography variant="h6">Short Description</Typography>
                                    <TextField
                                        required
                                        id="standard-multiline-flexible"
                                        label="Description"
                                        multiline
                                        maxRows={4}
                                        name='shortDes'
                                        onBlur={handleBlur}
                                    />
                                    <button style={{ backgroundColor: '#ff4838', width: '150px', padding: '14px 20px', border: '1px solid #ff4838', borderRadius: '5px', marginTop: '20px', color: '#ffff', fontSize: '16px', cursor: 'pointer' }} type='submit'>Add Service</button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AddServices;