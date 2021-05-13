import React, { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Popper,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import { menu } from '../Main';

function Cards({ card, onUpdateCard }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
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
              <Link to='/'>Доп.инфо</Link>
            </p>
          </div>
          <p className='card__category' ref={anchorRef} onClick={handleToggle}>
            категория : {menu.map((val) => val.url === card.category && val.val)}{' '}
            <ArrowDropDownIcon />
          </p>
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
