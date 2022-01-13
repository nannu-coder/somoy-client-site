import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';


const SignUp = () => {
    const [data, setData] = useState({});
    const { createUser, isLoading, error, googleSignIn } = useAuth();

    const handleData = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...data }
        newData[field] = value;
        setData(newData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = { email: data.email, password: data.password, name: data.firstName }
        createUser(values)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {isLoading ? <CircularProgress /> : <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                onBlur={handleData}
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onBlur={handleData}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onBlur={handleData}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                onBlur={handleData}
                                label="Password"
                                type="password"
                                id="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to='/login' variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                    <Button onClick={googleSignIn} sx={{ margin: '20px 0' }} fullWidth variant='contained'>Continue With Google</Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>}
            </Box>
        </Container>
    );
};

export default SignUp;