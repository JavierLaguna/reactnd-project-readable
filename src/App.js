import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PostsList from './01-containers/postsList'

class App extends PureComponent {
  render() {
    const {title} = this.props;
    return (
      <div className="App">
        {title}
        <PostsList/>
      </div>
    );
  }
}

// mapDispatchToProps

const mapStateToProps = ({app}) => {
  return {
    title: app.title
  };
};
export default connect(mapStateToProps)(App)
