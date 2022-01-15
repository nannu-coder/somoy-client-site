import React from 'react';
import { Container, Grid, Typography, Box, TextField } from '@mui/material';
import { MdCall } from 'react-icons/md';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box>
            <div className='footer'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <div class="footer_heading">
                                <Typography variant='h5'>
                                    About Us
                                </Typography>
                            </div>
                            <div class="footer_content">
                                <Typography variant='body2'>
                                    Somoy Is The World largest Company. We Have a 10 years of exprience.We always focus on customer satisfaction.we have 3000 of watch collection.Brand new watch available here. We Sell Our product resinable price to the customer.So What are you waiting For??
                                </Typography>
                                <Typography style={{ margin: '10px 0' }} className='contact' variant='body1'>
                                    <p style={{ margin: '0' }}><span style={{ marginRight: '10px' }}><MdCall size={20} /></span> +121-456-7891</p>

                                    <p style={{ margin: '0' }}><span style={{ marginRight: '10px' }}><FaEnvelope size={20} /></span> info@somoy.com</p>
                                </Typography>
                                <Typography className='footer_link' variant='body1'>
                                    <ul>
                                        <li>
                                            <Link to='/comesoon'>
                                                <FaFacebook size={26} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/comesoon'>
                                                <FaInstagram size={26} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/comesoon'>
                                                <FaTwitter size={26} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/comesoon'>
                                                <FaYoutube size={26} />
                                            </Link>
                                        </li>
                                    </ul>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div class="footer_heading">
                                <Typography variant='h5'>
                                    Important Link
                                </Typography>
                            </div>
                            <div class="footer_content im_link">
                                <Typography variant='body1'>
                                    <ul>
                                        <li>
                                            <Link to='/comesoon'>
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/comesoon'>
                                                Collects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/allproducts'>
                                                All Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/comesoon'>
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/comesoon'>
                                                Write For Us
                                            </Link>
                                        </li>
                                    </ul>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div class="footer_heading">
                                <Typography variant='h5'>
                                    Contact Us
                                </Typography>
                            </div>
                            <div class="footer_content footer_input">
                                <Box>
                                    <TextField
                                        style={{ marginBottom: '10px' }}
                                        id="outlined-basic"
                                        label="Your Email Address"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Mesages..."
                                        multiline
                                        rows={4}
                                    />
                                    <button style={{ padding: '10px 28px', border: '1px solid #ff4838', color: '#ffff', backgroundColor: '#ff4838', borderRadius: '5px', margin: '10px 0', cursor: 'pointer' }} type='submit'>Submit</button>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{ backgroundColor: '#353A40', textAlign: 'center', padding: '15px 0' }} class="footer_Bottom">
                <Container>
                    <Typography className='footer_logo' variant='body2'>
                        All Right Reserved By &copy; <span>Somoy</span> 2022
                    </Typography>
                </Container>
            </div>
        </Box>
    );
};

export default Footer;