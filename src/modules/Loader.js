import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Loader extends Component {
  render() {
    return (
        <div id='loader'>
            <img className="loader__icon" src={logo} alt={'лого'}/>
        </div>
    )
  }
}
