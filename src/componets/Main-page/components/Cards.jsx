import React, { useRef, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Popper,
  Typography,
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-router-dom';
import { menu } from '../Main';

function Cards({ card, onUpdateCard, deleteCard }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [popup, setPopup] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onVisible = () => {
    setPopup(!popup);
  };

  const onDeleteCard = () => {
    deleteCard(card.id);
  };

  return (
    <>
      <Card className={'card'}>
        <CardContent className={card.category}>
          <div className='card__about'>
            <div className='card__name'>{card.fullName}</div>
            <p>телефон : {card.number}</p>
            <p>почта : {card.email}</p>
            <p>
              <Link to={'/crm/' + card.id}>Доп.инфо</Link>
            </p>
          </div>
          <div className='card__right'>
            <p className='card__category' ref={anchorRef} onClick={handleToggle}>
              категория : {menu.map((val) => val.url === card.category && val.val)}{' '}
              <ArrowDropDownIcon />
            </p>
            <CloseIcon style={{ color: 'white', cursor: 'pointer' }} onClick={onVisible} />
          </div>
          {popup && (
            <Card style={{ position: 'absolute', top: '30%', left: '43%' }}>
              <CardContent>
                <Typography color='initial' variant=''>
                  Вы уверены что хотите удалить?
                </Typography>
                <div style={{ textAlign: 'center', paddingTop: 15 }}>
                  <Button onClick={onDeleteCard}>Да</Button>
                  <Button onClick={onVisible}>Нет</Button>
                </div>
              </CardContent>
            </Card>
          )}
          <Popper
            className='popper'
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal>
            <Card className='card__card'>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id='menu-list-grow'>
                  {menu.map((val, index) => (
                    <MenuItem
                      key={val + index}
                      onClick={() => {
                        onUpdateCard(card, val.val);
                        setOpen(!open);
                      }}>
                      {val.val}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Card>
          </Popper>
        </CardContent>
      </Card>
    </>
  );
}

export default Cards;
