import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getChatLog from './actions/service';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    const { messages } = this.state;
    return <ul>{messages.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

// const mapDispatchToProps = dispatch => {
//   return {
//     loadAPIServiceRejections: (startDate, endDate, t, resellerId) =>
//       dispatch(actions.loadAPIServiceRejections(startDate, endDate, t, resellerId))
//   };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
