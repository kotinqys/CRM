import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import app from '../../firebase';
import Content from './Content';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: '20px 30px',
    color: '#242320',
    fontSize: '22px',
    height: '100%',
    cursor: 'pointer',
  },
  lists: {
    boxShadow: '5px 4px 10px 0px rgb(0 0 0 / 50%)',
    height: '93.4%',
    maxWidth: 300,
    backgroundColor: 'white',
  },
  active: {
    padding: '20px 30px',
    color: '#242320',
    fontSize: '22px',
    height: '100%',
    cursor: 'pointer',
    backgroundColor: '#F1F1F1',
  },
}));

const menu = [
  'Контакты',
  'Переговоры',
  'Выставленный счет',
  'Оплаченный счет',
  'Успешные продажи',
  'Неудачные продажи',
];

function Main({ history }) {
  const { profile } = useSelector((state) => ({
    profile: state.profile.profile,
  }));
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeList, setActiveList] = useState(0);
  const classes = useStyles();

  const handleLogout = async () => {
    try {
      await app.auth().signOut();
      history.push('/login');
    } catch (err) {
      alert(err);
    }
  };

  const handleOpenMenu = () => {
    setMenuVisible(!menuVisible);
  };

  if (!profile) {
    return <Redirect to='/show' />;
  }

  return (
    <div>
      <Header
        displayName={profile.displayName}
        handleLogout={handleLogout}
        handleOpenMenu={handleOpenMenu}
      />
      <div style={{ display: 'flex' }}>
        {menuVisible && (
          <div className={classes.lists}>
            <List>
              {menu.map((val, index) => (
                <ListItem
                  className={activeList === index ? classes.active : classes.list}
                  onClick={() => setActiveList(index)}>
                  {val}
                </ListItem>
              ))}
            </List>
          </div>
        )}
        <Content />
      </div>
    </div>
  );
}

export default withRouter(Main);
