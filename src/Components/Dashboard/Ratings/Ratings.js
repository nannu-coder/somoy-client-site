import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from '@mui/material';
import './Ratings.css'
import useAuth from '../../../Hooks/useAuth';

const Ratings = () => {

    const [retData, setRetData] = useState({});
    const { user, value, setValue, handleRating } = useAuth();

    const handleBlur = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const data = event.target.value;
        const newData = { ...retData }
        newData[field] = data;
        setRetData(newData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = { Name: user.displayName, review: retData, rating: value }
        handleRating(values)

    }

    return (
        <Box style={{ marginTop: '20px' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} md={12}>
                        <div class="review_experience">
                            <div className="ratingField">
                                <div className="rating_icon">
                                    <Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >
                                        <Typography style={{ margin: '10px 0' }} variant="h6">Rate Your Experience</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <Typography style={{ marginTop: '15px' }} variant="h6">Rating Title</Typography>
                                    <TextField
                                        style={{ margin: '0 0 30px 0' }}
                                        id="standard-basic"
                                        label="Title"
                                        name='Title'
                                        onBlur={handleBlur}
                                        type='text'
                                    />
                                    <Typography variant="h6">Write Your Experience</Typography>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Write Your Experience"
                                        multiline
                                        maxRows={4}
                                        name='review'
                                        onBlur={handleBlur}
                                    />
                                    <button style={{ backgroundColor: '#ff4838', width: '150px', padding: '14px 20px', border: '1px solid #ff4838', borderRadius: '5px', marginTop: '20px', color: '#ffff', fontSize: '16px', cursor: 'pointer' }} type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Ratings;