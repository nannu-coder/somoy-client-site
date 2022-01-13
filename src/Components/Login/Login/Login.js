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
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Login = () => {
    const [data, setData] = useState({})
    const { loginUser, isLoading, error, googleSignIn, user } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleData = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = { email: data.email, password: data.password, location, history }
        loginUser(values)
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
                    Sign in
                </Typography>
                {isLoading ? <CircularProgress /> : <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onBlur={handleData}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        onBlur={handleData}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to='/comesoon' variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/signup'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Button onClick={googleSignIn} sx={{ margin: '20px 0' }} fullWidth variant='contained'>Continue With Google</Button>
                    {error && <Alert severity="error">{error}</Alert>}
                    {/* {!error && <Alert severity="success">Login Successfully</Alert>} */}
                </Box>}

            </Box>
        </Container>
    );
};

export default Login;