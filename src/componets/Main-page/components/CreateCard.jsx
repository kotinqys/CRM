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
    margin: '70px auto 0px auto',
    maxWidth: 500,
    padding: 20,
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

function CreateCard({ onCreateCard, error }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.close}>
          <Typography className={classes.title} color='initial' variant='h5'>
            Добавить в контакты
          </Typography>
          <Link to='/crm/contacts'>
            <CloseIcon />
          </Link>
        </Box>
        <form onSubmit={onCreateCard}>
          <TextField
            error={error}
            name='fullName'
            id='standard-basic'
            label='Имя контакта'
            style={{ margin: '15px 8px' }}
            helperText='Обьязательное поле'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            error={error}
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
            error={error}
            name='number'
            id='number'
            label='Телефон номера'
            style={{ margin: '15px 8px' }}
            placeholder='+7(7--) --- -- --'
            helperText='Обьязательное поле'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name='age'
            id='age'
            label='Возраст'
            style={{ margin: '15px 8px' }}
            placeholder='16'
            helperText='Не обязательное поле'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name='study'
            id='study'
            label='Место учебы'
            style={{ margin: '15px 8px' }}
            placeholder='Nazarbaev'
            helperText='Не обязательное поле'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name='course'
            id='course'
            label='Класс / курс'
            style={{ margin: '15px 8px' }}
            placeholder='11 класс'
            helperText='Не обязательное поле'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant='contained' type='submit'>
            Создать
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateCard;
