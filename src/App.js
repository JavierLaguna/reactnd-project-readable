import React, {PureComponent} from 'react';
import Header from './01-containers/header';
import PostsList from './01-containers/postsList';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Header />
        <PostsList />
      </div>
    );
  }
}

