import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends PureComponent {
  render() {
    return (
      <div className='header-container'>
        <Link to='/' className='header-container__title'>Readable</Link>
      </div>
    );
  }
}
