import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Alert, Box, TextField } from '@mui/material'
import useAuth from '../../../Hooks/useAuth';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();


    const handleFIeld = (event) => {
        event.preventDefault();
        setEmail(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 1 || data.matchedCount > 1) {
                    alert('success')

                }
            })
    }

    return (
        <div style={{ marginTop: '80px' }}>
            <Box style={{ maxWidth: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Email"
                        name='email'
                        onBlur={handleFIeld}
                        variant="outlined" />
                    <Button
                        type='submit'
                        style={{ width: '160px', padding: '15px 0' }}
                        variant="contained">
                        Make Admin
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default MakeAdmin;