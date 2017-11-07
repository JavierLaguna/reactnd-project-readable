import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ClassNames from 'classnames';
import CategoryLogo from '../../00-components/categoryLogo';
import {setPostOrderAction} from '../../02-actions/app/postOrderActions';
import './filters.css';

class Filters extends PureComponent {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    postOrder: PropTypes.object.isRequired
  };

  static defaultProps = {
    categories: [],
    history: {},
    match: {},
    postOrder: {}
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

  changeOrder(event) {
    const value = event.target.value.split('-');
    const field = value[0];
    const type = value[1];
    this.props.setPostOrderAction(field, type);
  }

  render() {
    const {categories, match, postOrder} = this.props;
    const selectedCategory = match.params.category || '';

    return (
      <div className='filters-container'>
        <div className='filters-container__order'>
          <select name='order' value={`${postOrder.field}-${postOrder.type}`} onChange={this.changeOrder.bind(this)}>
            <option value='voteScore-desc'>Max Score</option>
            <option value='voteScore-asc'>Min Score</option>
            <option value='timestamp-desc'>Newest Posts</option>
            <option value='timestamp-asc'>Oldest Posts</option>
          </select>
        </div>
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

const mapStateToProps = ({app, categories}) => {
  return {
    postOrder: app.postOrder,
    categories: categories.categoriesList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPostOrderAction: (field, type) => dispatch(setPostOrderAction(field, type)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
