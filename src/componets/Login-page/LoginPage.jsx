import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import crm from '../../assets/CRM.jpg';

function LoginPage(props) {
  return (
    <div className='login-page'>
      <div className='container'>
        <div className='login-page__header'>
          <div className='login-page__leftside'>
            <div className='login-page__logo'>
              <Link to='/show'>
                <img src={logo} alt='' />
              </Link>
            </div>
            <div className='login-page__navbar'>
              <nav>
                <Link>Продукты</Link>
                <Link>Отзывы</Link>
                <Link>Кейсы</Link>
                <Link>Цены</Link>
              </nav>
            </div>
          </div>
          <div className='login-page__login'>
            <Link to='/login' className='button'>
              ВОЙТИ
            </Link>
          </div>
        </div>
        <div className='login-page__content'>
          <div className='login-page__about'>
            <h2 className='login-page__title'>ХОТИТЕ УВЕЛИЧИТЬ</h2>
            <h2 className='login-page__title'>ПРОДАЖИ</h2>
            <h1 className='login-page__subtitle'>
              НЕ ТЕРЯЙТЕ <br />
              КЛИЕНТОВ
            </h1>
            <p className='login-page__text'>
              В amoCRM автоматически попадают все запросы по E-mail, Телефону, c Форм на сайте,
              через Чаты и Мессенджеры.
            </p>
            <Link to='/signup' className='login-page__button'>
              ПОПРОБУЙТЕ БЕСПЛАТНО
            </Link>
          </div>
          <img className='crm' src={crm} alt='' />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
