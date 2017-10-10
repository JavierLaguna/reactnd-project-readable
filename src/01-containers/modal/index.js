// Components
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Post from '../../00-components/post';
import {CREATE_POST_MODAL} from '../../constants/app/modal';
import {hideModalAction} from '../../02-actions/app/modalActions';
import './index.css';

class ModalContainer extends PureComponent {
  state = {
    modalComponents: {
      [CREATE_POST_MODAL]: (() => {
        return (<Post {...this.props.containerProps}/>)
      })
    }
  };

  closeModal() {
    this.props.hideModalAction();
  }

  render() {
    if (!this.props.modalType) {
      return null;
    }
    const SpecificModal = this.state.modalComponents[this.props.modalType];
    return (
      <div className='modal'>
        <div className='modal__container'>
          <i className='fa fa-close modal__close-icon' onClick={this.closeModal.bind(this)}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    hideModalAction: () => dispatch(hideModalAction())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
