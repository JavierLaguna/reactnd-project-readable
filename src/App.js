import React, {PureComponent} from 'react';
import Header from './01-containers/header';
import Modal from './01-containers/modal';
import PostsList from './01-containers/postsList';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Header/>
        <PostsList/>
        <Modal/>
      </div>
    );
  }
}

