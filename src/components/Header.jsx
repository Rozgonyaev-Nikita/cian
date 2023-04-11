import React from 'react'
import Filter from './Filter.jsx'
import MyButton from '../UI/MyButton/MyButton';

export default function Header() {
  return (
    <header>
        <div className="wrapperHeader">
            <h1>Аренда</h1>
            <div className="filter__contenier flex">
            <Filter></Filter>
            <MyButton style={{marginLeft:'10px'}} buttontype='blue'>Найти</MyButton>
            </div>
            
            <div className="right-elem">
              
            </div>
        </div>
    </header>
  )
}

