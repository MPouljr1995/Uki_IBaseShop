// import React from 'react';
////
import React, { Component } from 'react';
///////

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//////////////
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// export default function SignInSide() {

export default class SignInSide extends Component {

  const classes = useStyles();

  ////////////////////
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
  /////////////////////

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Login to IBase Shop
          </Typography>

            <ValidatorForm
                ref="form"
                onSubmit={this.handleLogin}
                onError={errors => console.log(errors)}
                className={classes.form}
            >
                <TextValidator
                    helperText="Please enter username"
                    variant="outlined"
                    label="Username"
                    onChange={this.onChangeUsername}
                    name="Username"
                    value={this.state.username}
                    // style={style.STextFi}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />

          {/* <form className={classes.form} noValidate> */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>

          {/* </form> */}
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
}