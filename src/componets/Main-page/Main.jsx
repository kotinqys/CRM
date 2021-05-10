import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';
import app from '../../firebase';
import Content from './Content';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Contacts from './components/Contacts';

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
    minHeight: '100%',
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
  {
    val: 'Контакты',
    url: 'contacts',
  },
  {
    val: 'Переговоры',
    url: 'conversation',
  },
  {
    val: 'Выставленный счет',
    url: 'invoice',
  },
  {
    val: 'Оплаченный счет',
    url: 'paidinvoice',
  },
  {
    val: 'Успешные продажи',
    url: 'succes',
  },
  {
    val: 'Неудачные продажи',
    url: 'unsucces',
  },
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
    return <Redirect to='/' />;
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
                <Link to={`/crm/${val.url}`}>
                  <ListItem
                    className={activeList === index ? classes.active : classes.list}
                    onClick={() => setActiveList(index)}>
                    {val.val}
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        )}
        <Route path='/crm/contacts' component={Contacts} />
      </div>
    </div>
  );
}

export default withRouter(Main);
