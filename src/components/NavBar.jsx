import React from 'react'
import Cianlogo from '../img/svg/Vector.svg'
import MyButton from '../UI/MyButton';
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <nav>
        <div className='navdiv flex'>
        <Link to='/psot'><div><img src={ Cianlogo} alt="Логотип реакции"/><span>циан</span></div></Link>
          <ul>2</ul>
          <div>
            <MyButton buttontype='blue'>+Разместить объявление</MyButton>
            <MyButton buttontype='white'>Войти</MyButton>
          </div>
        </div>
      </nav>
  )
}
