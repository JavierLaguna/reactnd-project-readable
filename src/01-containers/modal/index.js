// Components
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Post from '../../00-components/post';
import {CREATE_POST_MODAL} from '../../constants/app/modal';
import './index.css';

class ModalContainer extends PureComponent {
  state = {
    modalComponents: {
      [CREATE_POST_MODAL]: (() => {
        return (<Post {...this.props.containerProps}/>)
      })
    }
  };

  render() {
    if (!this.props.modalType) {
      return null;
    }
    const SpecificModal = this.state.modalComponents[this.props.modalType];
    return (
      <div className='modal'>
        <div className='modal__container'>
          <SpecificModal/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({app}) => {
  return {
    modalType: app.modal.modalType,
    containerProps: app.modal.containerProps
  };
};

export default connect(mapStateToProps)(ModalContainer)
