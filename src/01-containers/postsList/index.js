import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PostCard from '../../00-components/postCard';
import NewPostCard from '../../00-components/newPostCard';
import {showModalAction, hideModalAction} from '../../02-actions/app/modalActions';
import {addPost, votePost, deletePost, editPost} from '../../02-actions/posts/postsActions';
import {CREATE_POST_MODAL, EDIT_POST_MODAL} from '../../constants/app/modal';
import {POST_DEFAULT_VALUES, VOTE_NEGATIVE, VOTE_POSITIVE} from '../../constants/posts/posts';
import './index.css';

class PostsList extends PureComponent {

  static propTypes = {
    postsList: PropTypes.array.isRequired,
    comments: PropTypes.object.isRequired,
    showModalAction: PropTypes.func.isRequired,
    addPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    votePost: PropTypes.func.isRequired,
    hideModalAction: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  static defaultProps = {
    postsList: [],
    comments: {},
    showModalAction: () => {
    },
    addPost: () => {
    },
    editPost: () => {
    },
    votePost: () => {
    },
    hideModalAction: () => {
    },
    deletePost: () => {
    }
  };

  state = {};

  openNewPostModal() {
    const containerProps = {
      saveChanges: this.addNewPost.bind(this),
      categories: this.props.categories
    };
    this.props.showModalAction(CREATE_POST_MODAL, containerProps);
  }

  addNewPost(newPost) {
    newPost.id = POST_DEFAULT_VALUES.id();
    newPost.timestamp = POST_DEFAULT_VALUES.timestamp();
    newPost.voteScore = POST_DEFAULT_VALUES.voteScore;
    newPost.deleted = POST_DEFAULT_VALUES.deleted;
    this.props.addPost(newPost);
    this.props.hideModalAction();
  }

  votePositive(postId) {
    this.votePost(postId, VOTE_POSITIVE);
  }

  voteNegative(postId) {
    this.votePost(postId, VOTE_NEGATIVE);
  }

  votePost(postId, vote) {
    this.props.votePost(postId, vote);
  }

  deletePost(postId) {
    this.props.deletePost(postId);
  }

  editPost(postId) {
    let post = this.props.postsList.filter((post) => post.id === postId);
    post = post[0];
    const containerProps = {
      saveChanges: (editedPost) => {
        editedPost = {
          ...post,
          ...editedPost
        };
        this.props.editPost(editedPost);
        this.props.hideModalAction();
      },
      categories: this.props.categories,
      post
    };
    this.props.showModalAction(EDIT_POST_MODAL, containerProps);
  }

  render() {
    const {postsList, comments} = this.props;

    return (
      <div className='posts-list-container'>
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
                      votePositive={this.votePositive.bind(this)}
                      voteNegative={this.voteNegative.bind(this)}
                      deletePost={this.deletePost.bind(this)}
                      editPost={this.editPost.bind(this)}
                      numberOfComments={comments[post.id] ? comments[post.id].length : 0}
            />
          )}
          <NewPostCard onClick={this.openNewPostModal.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({categories, comments}) => {
  return {
    categories: categories.categoriesList,
    comments: comments.commentsList
  };
};

export default connect(mapStateToProps, {
  showModalAction,
  addPost,
  editPost,
  votePost,
  hideModalAction,
  deletePost
})(PostsList)
