import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ClassNames from 'classnames';
import CategoryLogo from '../../00-components/categoryLogo';
import './filters.css';

class Filters extends PureComponent {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  static defaultProps = {
    categories: [],
    history: {},
    match: {}
  };

  state = {};

  goCategory(category) {
    const selectedCategory = this.props.match.params.category || '';
    if (selectedCategory === category) {
      this.props.history.push('/');
    } else {
      this.props.history.push(`/${category}`);
    }
  }

  render() {
    const {categories, match} = this.props;
    const selectedCategory = match.params.category || '';

    return (
      <div className='filters-container'>
        <div className='filters-container__categories'>
          {categories.map((category, index) => (
            <button key={index}
                    onClick={this.goCategory.bind(this, category.path)}
                    className={ClassNames({
                      'filters-container__categories-button': true,
                      'filters-container__categories-button_active': selectedCategory === category.path,
                    })}
            >
              <CategoryLogo category={category.name}/>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.categoriesList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // showModalAction: (modalType, containerProps) => dispatch(showModalAction(modalType, containerProps)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
