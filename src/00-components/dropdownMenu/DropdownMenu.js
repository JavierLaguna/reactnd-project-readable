import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './dropdownMenu.css';

export default class DropdownMenu extends Component {
  static propTypes = {
    title: PropTypes.string,
    iconClass: PropTypes.string,
    dropdownIconClass: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
    bodyContent: PropTypes.object
  };

  static defaultProps = {
    title: "Options",
    iconClass: "fa fa-cogs",
    dropdownIconClass: "fa fa-angle-down",
    bodyContent: null
  };

  state = {
    open: false
  };

  toogleOpenCloseState(e) {
    if (this.props.children) {
      this.setState({open: !this.state.open});
    } else {
      this.props.onClick(e);
    }
  }

  render() {
    var dropdownIcon = "";
    var dropdownOptions = "";

    if (this.props.children) {
      dropdownIcon = <i className={this.props.dropdownIconClass}/>;
      if (this.state.open) {
        dropdownOptions = <ul className="dropdown-menu dropdown-menu-right">{this.props.children}</ul>;
      }
    }

    let option = (this.props.bodyContent ?
        <a className="dropdown-toggle" data-toggle="dropdown">
          {this.props.bodyContent}
          {dropdownIcon}
        </a>
        :
        <a className="dropdown-toggle" data-toggle="dropdown">
          <i className={"position-left " + this.props.iconClass}/>
          <span className="position-left">{this.props.title}</span>
          {dropdownIcon}
        </a>
    );

    return (
      <div>
        {this.state.open ? <div className="dropdown__shadow" onClick={this.toogleOpenCloseState.bind(this)}/> : ""}
        <ul className="breadcrumb-elements" onClick={this.toogleOpenCloseState.bind(this)}>
          <li className="dropdown open">
            {option}
            {dropdownOptions}
          </li>
        </ul>
      </div>
    )
  }
}
