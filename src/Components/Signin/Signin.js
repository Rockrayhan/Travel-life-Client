import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Button, Container, Grid, LinearProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
const Signin = () => {
    const {registerUser, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({});


    const history = useHistory() ;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
        alert('Please Cheack your email to verify.');
    }



    return (
        <div>

            <Container>
                <Box className="mt-5"  >
                    <Grid item sm={12} md={12} lg={12}>
                        <h1>Register Please</h1>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                            />

                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                name="email"
                                type='email'
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}

                            />
                            <TextField
                                sx={{ width: '75%', m: 2 }}
                                id="standard-basic"
                                label="Resubmit Your Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}

                            />
                            <br />

                            <Button sx={{ width: '50%', m: 2 }} variant="contained" type="submit"> Register </Button>
                            <br />
                        </form>}
                        {isLoading && <LinearProgress />}

                    </Grid>
                </Box>
            </Container>



            <NavLink style={{textDecoration:"none"}} to="/login"> <Button variant="text"> Already registered? Please Login</Button> </NavLink>
            
        </div>
    );
};

export default Signin;