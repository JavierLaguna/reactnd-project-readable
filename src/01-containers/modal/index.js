// Components
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Post from '00-components/post';
import {CREATE_POST} from 'constants/modal/modal';
import './index.css';

class ModalContainer extends PureComponent {
  state = {
    modalComponents: {
      [CREATE_POST]: (() => {
        return (<Post  {...this.props.containerProps}/>)
      })
    }
  };

  render() {
    if (!this.props.modalType) {
      return null;
    }
    let SpecificModal = this.state.modalComponents[this.props.modalType];
    return (
      <div className='modal'>
        <div className='modal__container'>
          <SpecificModal/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({modal}) => {
  return {
    modalType: modal.modalType,
    containerProps: modal.containerProps
  };
};

export default connect(mapStateToProps)(ModalContainer)
