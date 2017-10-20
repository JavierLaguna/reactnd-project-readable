import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DropdownOption extends Component {
  static propTypes = {
    title: PropTypes.string,
    iconClass: PropTypes.string,
    onClick: PropTypes.func,
    bodyContent: PropTypes.object
  };

  static defaultProps = {
    title: "Dropdown Option",
    iconClass: "fa fa-trello",
    onClick: () => {
    },
    bodyContent: null
  };

  render() {
    let option = (this.props.bodyContent ? this.props.bodyContent :
        <a className='dropdown-menu__option'>
          <i className={`${this.props.iconClass} dropdown-menu__option-icon`}/>{this.props.title}
        </a>
    );

    return (
      <li onClick={this.props.onClick}>
        {option}
      </li>
    )
  }
}
