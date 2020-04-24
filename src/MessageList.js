import React, { Component } from "react";

class MessageList extends Component{
  render() {
    const { messagesList } = this.props;
    return <div><h1>Messages</h1><ul>{messagesList.map(el => <li key={el.id}>{el.message}</li>)}</ul></div>;
  }
}
export default MessageList;