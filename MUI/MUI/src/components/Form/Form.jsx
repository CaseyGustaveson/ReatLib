import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';


const Form = () => {
    return (
        <>
            <Box
                className='mt-10 mx-auto'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Username" variant="filled" />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />

            </Box>
            <Box>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    className='w-full'
                    startIcon={<ArrowUpwardOutlinedIcon />}
                >Submit</Button>
            </Box>
        </>
    );
}

export default Form