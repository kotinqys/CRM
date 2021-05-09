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
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    margin: '200px auto 0px auto',
    maxWidth: 400,
    padding: 10,
  },
  title: {
    padding: '15px 0px',
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
});

function SignUp({ onSubmit }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.close}>
          <Typography className={classes.title} color='initial' variant='h5'>
            Зарегистрироваться
          </Typography>
          <Link to='/show'>
            <CloseIcon />
          </Link>
        </Box>
        <form onSubmit={onSubmit}>
          <TextField
            name='email'
            id='email'
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
            name='name'
            id='standard-basic'
            label='Имя пользователя'
            style={{ margin: '15px 8px' }}
            helperText='Обьязательное поле'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name='password'
            id='pass'
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
          <TextField
            name='correctPassword'
            id='correctPassword'
            label='Подтвердите пароль'
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
            Подтвердить
          </Button>
        </form>
        <Link to='/login'>
          <Typography variant='caption' style={{ margin: '25px 0px' }} color='primary'>
            Войти
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default SignUp;
