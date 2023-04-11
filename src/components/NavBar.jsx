import React from 'react'
import Cianlogo from '../img/svg/Vector.svg'
import MyButton from '../UI/MyButton/MyButton';
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <nav>
        <div className='navdiv flex'>
        <div className='flex'>
          <Link to='/psot'><div>
            <img src={Cianlogo} alt="Логотип реакции" /><span>циан</span></div>
          </Link>
          <MyButton buttontype='white' style={{height:'30px', marginLeft:'50px'}}>Смотреть все объявления</MyButton>
          </div>
          <ul></ul>
          <div>
            <MyButton buttontype='blue'>+Разместить объявление</MyButton>
            <MyButton buttontype='white' style={{margin:'20px'}}>Войти</MyButton>
          </div>
        </div>
      </nav>
  )
}
