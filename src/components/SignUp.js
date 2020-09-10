import React, { Component } from 'react';

import {Grid,Paper,Card,CardContent,Typography,Button} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const style = {
    root: {
      backgroundColor:'#5c6bc0',
      marginTop: 30,
      height: 600,
      color: '#e0f7fa'
    },
    Scard: {
        marginTop: 30,
        height: 500
    },
    STextFi: {
        width: 550
    }
}


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            username:"",
            email:"",
            password:"",
            massage:"",
            successfulUserName: false,
            successfulEmail: false,
            successfulPassword: false,            
        }
    }


    componentDidMount() {
        // custom rule will have name 'isName'
        ValidatorForm.addValidationRule('isName', (value) => {
            if ((this.state.username.length) >3 && (this.state.username.length) <20){
                return true; 
            }
            return false;            
        });

        // custom rule will have name 'isPassword'
        ValidatorForm.addValidationRule('isPassword',(value) => {
            if ((this.state.password.length) > 6 && (this.state.password.length) < 40) {
                return true;
            }
            return false;
        });
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isName');
        ValidatorForm.removeValidationRule('isPassword');
    }


    onChangeUsername = (e) => {
        this.setState({
          username: e.target.value
        });
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister = (e) => {
        e.preventDefault();

         
                if ( (this.state.username.length) >3 && (this.state.username.length) <20 ) {
                    this.setState({
                        successfulUserName: true,                  
                    })
                } else {
                    this.setState({
                        successfulUserName: false,                       
                    })
                }
        
                    
            var emailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            if(this.state.email.match(emailformat)) {
                this.setState({
                    successfulEmail: true,            
                })                
            } else {
                this.setState({
                    successfulEmail: false,                    
                })  
            }
        
         
                if ( (this.state.password.length) > 6 && (this.state.password.length) < 40 ) {
                    this.setState({
                        successfulPassword: true,                  
                    })
                } else {
                    this.setState({
                        successfulPassword: false,
                    })
                }
          
          
          
        if(this.state.successfulUserName && this.state.successfulEmail && this.state.successfulPassword) {
            console.log(this.state.username + " " + this.state.password + " " + this.state.email)
            this.setState({
              successful: true,
              message: "Registered successfully"
            })
        } else {
            this.setState({
              successful: false,
            })
        }
    }


    render() {
        
        return(
            <div>
                {!this.state.successful ? (

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
                                                    onSubmit={this.handleRegister}
                                                    onError={errors => console.log(errors)}
                                                >  

                                                    <Typography variant='h3' color='primary'>
                                                        Register Account 
                                                    </Typography> <br/>

                                                    <TextValidator
                                                        helperText="plese enter username"
                                                        variant="outlined"
                                                        label="Username"
                                                        onChange={this.onChangeUsername}
                                                        name="Username"
                                                        value={this.state.username}
                                                        style={style.STextFi}
                                                        validators={['required','isName']}
                                                        errorMessages={['this field is required','The user username must be between 3 and 20 charactes ']}
                                                    />

                                                    <br/><br/>

                                                    <TextValidator
                                                        helperText="plese enter email"
                                                        variant="outlined"
                                                        label="Email"
                                                        onChange={this.onChangeEmail}
                                                        name="Email"
                                                        value={this.state.email}
                                                        style={style.STextFi}
                                                        validators={['required','isEmail']}
                                                        errorMessages={['this field is required','This is not a valid email!!']}
                                                    />
                                                    
                                                    <br/><br/>

                                                    <TextValidator
                                                        helperText="plese enter Password"
                                                        variant="outlined"
                                                        label="Password"
                                                        onChange={this.onChangePassword}
                                                        name="Password"
                                                        value={this.state.password}
                                                        style={style.STextFi}
                                                        validators={['required','isPassword']}
                                                        errorMessages={['this field is required','The user password must be between 6 and 40 charactes ']}
                                                    />
                                                
                                                    <br/><br/>
                                                    
                                                        <Button variant="contained" color="primary" type="submit">
                                                            SIGN UP
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

                    ) : (

                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={4}>
                            <Paper style={{'marginTop':'20'}}>
                                <Card style={{'marginTop':'5','height':'10','backgroundColor':'#42424'}}>
                                    <CardContent>
                                        <Typography color='primary'>
                                            <strong>{this.state.message}</strong>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}/>
                    </Grid>
                    )
                }
        </div>                               
        )
    }
}
export default SignUp;