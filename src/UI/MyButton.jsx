import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({children, ...props}) {

    let btnCls = 'blue';

    if(props.buttontype === 'blue'){
      btnCls = classes.myBtnBlue;
    }
    else if(props.buttontype === 'white'){
      btnCls = classes.MyBtnWhite;
    }

  return (
    <button className={btnCls} {...props}>
        {children}
    </button>
  )
}
