import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class App extends PureComponent {
  render() {
    const {title} = this.props;
    return (
      <div className="App">
        {title}
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
