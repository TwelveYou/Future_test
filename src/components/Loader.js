import React from 'react'
import logo from '../logo.svg';

export default function Loader() {
  return (
    <div id='loader'>
        <img className="loader__icon" src={logo} alt={'лого'}/>
    </div>
  )
}