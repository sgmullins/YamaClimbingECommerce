import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { CustomButton } from '../Custom-button/CustomButton.component';
import './Login.styles.scss';
const useStyles = makeStyles((theme) => ({
  //TODO:Base form styles have been figured out, do final styles
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '20px',
    height: '45px',
    fontSize: '18px',
    fontWeight: '600',
    backgroundColor: '#f50057',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  link: {
    color: 'red',
    fontSize: '18px',
    textDecoration: 'underline',
  },
  forgot: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notchedOutline: {},
  focused: {},
  hovered: {},
  outlinedInput: {
    '&$focused $notchedOutline ': {
      border: '1px solid red',
    },
  },
  label: {
    '&$focused': {
      color: 'red',
    },
  },
}));

export const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserCredentials({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            value={email}
            onChange={handleChange}
            autoFocus
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.outlinedInput,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type={showPassword ? '' : 'password'}
            id='password'
            value={password}
            onChange={handleChange}
            autoComplete='current-password'
          />
          <div className='show-password'>
            {showPassword ? (
              <FaRegEye onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
          <div className={classes.forgot}>
            <FormControlLabel
              control={<Checkbox value='remember' />}
              label='Remember me'
            />
            <Link href='#' className={classes.link}>
              Forgot password?
            </Link>
          </div>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
          >
            Sign In
          </Button>
          <CustomButton>Testing</CustomButton>
          <Link href='#' className={classes.link}>
            {'Create a new account'}
          </Link>
        </form>
      </div>
    </Container>
  );
};
