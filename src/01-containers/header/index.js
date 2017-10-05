import React, {PureComponent} from 'react';
import './header.css';

export default class Header extends PureComponent {
  render() {
    return (
      <div className='header-container'>
        <span className='header-container__title'>Readable</span>
      </div>
    );
  }
}
