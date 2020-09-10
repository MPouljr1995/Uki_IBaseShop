import React, { Component } from 'react';

import {Grid,Paper,Card,CardContent,Typography,Button} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const style = {
    root: {
      backgroundColor:'#5c6bc0',
      marginTop: 30,
      height: 500,
      color: '#e0f7fa'
    },
    Scard: {
        marginTop: 80,
        height: 350
    },
    STextFi: {
        width: 550
    }
}

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            message: ""
        };
    }

        onChangeUsername = (e) => {
            this.setState({
              username: e.target.value
            });
          }
        
          onChangePassword = (e) => {
            this.setState({
              password: e.target.value
            });
          }
        
        handleLogin = (e) => {
            e.preventDefault();

            if (this.state.username && this.state.password) {
                console.log("username = " + this.state.username)
                console.log("password = " + this.state.password)

                localStorage.setItem('id', '1');
                localStorage.setItem('username', this.state.username);
                localStorage.setItem('email', 'RAJAN@GMAIL.COM');
                localStorage.setItem('roles', 'ROLE_ADMIN');

                this.props.history.push("/profile");
                window.location.reload();

            }        
        }

    render() {
       
        return(
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <Paper style={style.root} variant="outlined">
                        <Grid container>
                            <Grid item xs={2}/>
                            <Grid item xs={8}>
                                <Card style={style.Scard}>
                                    <CardContent>
                                        <ValidatorForm
                                            ref="form"
                                            onSubmit={this.handleLogin}
                                            onError={errors => console.log(errors)}
                                        >
                                            <Typography variant='h3' color='primary'>
                                                Login to IBase Shop
                                            </Typography>
                                            <br/>

                                            <TextValidator
                                                helperText="Please enter username"
                                                variant="outlined"
                                                label="Username"
                                                onChange={this.onChangeUsername}
                                                name="Username"
                                                value={this.state.username}
                                                style={style.STextFi}
                                                validators={['required']}
                                                errorMessages={['this field is required']}
                                            />
                                        
                                            <br/><br/>

                                            <TextValidator
                                                helperText="Please enter password"
                                                variant="outlined"
                                                label="Password"
                                                onChange={this.onChangePassword}
                                                name="Password"
                                                value={this.state.password}
                                                style={style.STextFi}
                                                validators={['required']}
                                                errorMessages={['this field is required']}
                                            />
                                            
                                            <br/><br/>
                                            
                                            <Button variant="contained" color="primary" type="submit">
                                                LOG IN
                                            </Button> 
                                            
                                        </ValidatorForm>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}/>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        )
    }
}
export default SignIn;