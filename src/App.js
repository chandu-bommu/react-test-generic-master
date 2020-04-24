import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from "./actions";
import MessageList from "./MessageList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    const { messages } = this.state;
    return (<MessageList messagesList={messages}/>);
  }

  componentDidMount() {
    this.props.loadMessages();
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

// const mapDispatchToProps = dispatch => bindActionCreators({ getMessageList }, dispatch);
function mapDispatchToProps(dispatch) {
  return {
    loadMessages: () =>
      dispatch(actions.getMessageList())
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);