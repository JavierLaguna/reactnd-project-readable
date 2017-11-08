import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CreatePost from '../../00-components/createPost';
import EditPost from '../../00-components/editPost';
import {CREATE_POST_MODAL, EDIT_POST_MODAL} from '../../constants/app/modal';
import {hideModalAction} from '../../02-actions/app/modalActions';
import './index.css';

class ModalContainer extends PureComponent {
  state = {
    modalComponents: {
      [CREATE_POST_MODAL]: (() => {
        return (<CreatePost {...this.props.containerProps}/>)
      }),
      [EDIT_POST_MODAL]: (() => {
        return (<EditPost {...this.props.containerProps}/>)
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

export default connect(mapStateToProps, {hideModalAction})(ModalContainer)
