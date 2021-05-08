import React from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import google from '../../assets/google.svg';
import CloseIcon from '@material-ui/icons/Close';

import app from '../../firebase';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
const useStyles = makeStyles({
  root: {
    margin: '200px auto 0px auto',
    maxWidth: 400,
    padding: 10,
  },
  title: {
    padding: '15px 8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  close: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-10px',
    marginRight: '-10px',
  },
  google: {
    maxWidth: 400,
    margin: '20px auto',
  },
});

function Auth(props) {
  const classes = useStyles();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      //Отправка запрос на firebase для подтверждения аккаунта
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      alert('УСПЕХ!!!!');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Box className={classes.close}>
            <Typography className={classes.title} color='initial' variant='h5'>
              Авторизация
            </Typography>
            <Link to='/'>
              <CloseIcon />
            </Link>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              name='email'
              id='standard-basic'
              label='Почта'
              style={{ margin: '15px 8px' }}
              placeholder='example@crm.com'
              helperText='Обьязательное поле'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name='password'
              id='standard-basic'
              label='Пароль'
              type='password'
              style={{ margin: '15px 8px' }}
              placeholder='******'
              helperText='Обьязательное поле'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant='contained' type='submit'>
              Войти
            </Button>
          </form>
          <Typography variant='caption' style={{ margin: '25px 0px' }}>
            Нету аккаунта?{' '}
            <Link to='/signup' style={{ color: '#306cc7' }}>
              Зарегистрироваться
            </Link>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.google}>
        <CardContent
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
          Вход с помощью <img src={google} alt='' />
        </CardContent>
      </Card>
    </>
  );
}

export default Auth;
