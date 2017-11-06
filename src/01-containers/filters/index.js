import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CategoryLogo from '../../00-components/categoryLogo';
import './filters.css';

class Filters extends PureComponent {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
  };

  static defaultProps = {
    categories: [],
    history: {}
  };

  state = {};

  goCategory(category) {
    this.props.history.push(`/category/${category}`);
  }

  render() {
    const {categories} = this.props;

    return (
      <div className='filters-container'>
        <div className='filters-container__categories'>
          {categories.map((category, index) => (
            <button key={index}
                    className='filters-container__categories-button'
                    onClick={this.goCategory.bind(this, category.path)}
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
