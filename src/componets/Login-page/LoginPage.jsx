import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/logo.png';
import crm from '../../assets/CRM.jpg';
import { useSelector } from 'react-redux';

function LoginPage(props) {
  const { profile } = useSelector((state) => ({
    profile: state.profile.profile,
  }));

  if (profile) {
    return <Redirect to='/crm' />;
  }
  return (
    <div className='login-page'>
      <div className='container'>
        <div className='login-page__header'>
          <div className='login-page__leftside'>
            <div className='login-page__logo'>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
            <div className='login-page__navbar'>
              <nav>
                <Link to='/'>Продукты</Link>
                <Link to='/'>Отзывы</Link>
                <Link to='/'>Кейсы</Link>
                <Link to='/'>Цены</Link>
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
