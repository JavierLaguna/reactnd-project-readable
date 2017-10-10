import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PostCard from '../../00-components/postCard';
import NewPostCard from '../../00-components/newPostCard';
import {showModal} from '../../02-actions/app/modalActions';
import {CREATE_POST_MODAL} from '../../constants/app/modal';

class PostsList extends PureComponent {

  openNewPostModal (){
    this.props.showModal(CREATE_POST_MODAL);
  }

  render() {
    const {postsList} = this.props;
    return (
      <div className='posts-list'>
        {postsList.map((post, index) =>
          <PostCard key={index}
                    id={post.id}
                    timestamp={post.timestamp}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    voteScore={post.voteScore}
          />
        )}
        <NewPostCard onClick={this.openNewPostModal.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => {
  return {
    postsList: posts.postsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modalType, containerProps) => dispatch(showModal(modalType, containerProps))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
