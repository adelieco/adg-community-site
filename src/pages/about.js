import React, { Component } from "react";
import aboutS from 'scss/pages/about.scss';
import { token } from '../../env';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
    }
  }
  render() {
    return (
      <div className="About">
        <div className="About__container">
          <h1>Adelie Developer's Group</h1>
          <p>{this.state.messages}</p>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    const channelID = 'C0DDAKWPK';
    const queryString = `?token=${token}&channel=${channelID}&limit=20`;

    fetch(`https://slack.com/api/conversations.history${queryString}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      // this.setState({ messages: response.messages })
      this.setState({ messages: response.messages.map((message) => message.text) })
      console.log(this.state.messages);
    });
  }
};



