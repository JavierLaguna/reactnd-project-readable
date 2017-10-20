import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PostCard from '../../00-components/postCard';
import NewPostCard from '../../00-components/newPostCard';
import {showModalAction, hideModalAction} from '../../02-actions/app/modalActions';
import {addPost, getAllCategories, votePost, deletePost, editPost} from '../../02-actions/posts/postsActions';
import {CREATE_POST_MODAL, EDIT_POST_MODAL} from '../../constants/app/modal';
import {POST_DEFAULT_VALUES, VOTE_NEGATIVE, VOTE_POSITIVE} from '../../constants/posts/posts';
import './index.css';

class PostsList extends PureComponent {

  componentWillMount() {
    this.props.getAllCategories();
  }

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
    const {postsList} = this.props;
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
            />
          )}
          <NewPostCard onClick={this.openNewPostModal.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({posts, categories}) => {
  return {
    postsList: posts.postsList.filter((post) => !post.deleted),
    categories: categories.categoriesList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModalAction: (modalType, containerProps) => dispatch(showModalAction(modalType, containerProps)),
    addPost: (newPost) => dispatch(addPost(newPost)),
    editPost: (post) => dispatch(editPost(post)),
    votePost: (postId, vote) => dispatch(votePost(postId, vote)),
    hideModalAction: () => dispatch(hideModalAction()),
    getAllCategories: () => dispatch(getAllCategories()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
