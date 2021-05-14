import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import app from '../../../firebase';

const useStyles = makeStyles({
  root: {
    margin: '70px 40% 0px auto',
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

function AboutCard({ match, history }) {
  const classes = useStyles();
  let cardId = match.params.cardId;
  const [card, setCard] = useState(null);
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    app
      .firestore()
      .collection('cards')
      .doc(cardId)
      .get()
      .then((doc) => {
        setCard(doc.data());
      });
  }, [cardId]);
  return (
    <>
      {card && (
        <Card className={classes.root}>
          <KeyboardBackspaceIcon fontSize='large' onClick={goBack} />
          <CardContent>
            <Typography variant='overline'>
              Имя : <Typography variant='h6'>{card.fullName}</Typography>
            </Typography>
            <Typography variant='overline'>
              Почта : <Typography variant='h6'>{card.email}</Typography>
            </Typography>
            <Typography variant='overline'>
              Номер телефона : <Typography variant='h6'>{card.number}</Typography>
            </Typography>
            <Typography variant='overline'>
              Место учебы : <Typography variant='h6'>{card.study}</Typography>
            </Typography>
            <Typography variant='overline'>
              Класс / Курс : <Typography variant='h6'>{card.class}</Typography>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default withRouter(AboutCard);
