import React, { Component } from "react";
import aboutS from 'scss/pages/about.scss';
import chatboxS from 'scss/components/chatbox.scss';
import { token } from '../../env';
import {randomNum, getTime, smoothScrollTo} from 'utils';
import stock1 from 'assets/img/stockmember1.png'
import stock2 from 'assets/img/stockmember2.png'
import stock3 from 'assets/img/stockmember3.png'

export default class About extends Component {
  constructor({data}) {
    super();
    this.stocks = [
      { name: 'Sam Hill', photo: stock1},
      { name: 'Alex Prunier', photo: stock2},
      { name: 'Mason Freiberg', photo: stock3},
    ];
    // setInterval
    this.messageIntervalLoop = null;
    this.messageLimit = 20;
    this.state = {
      allMessages: '',
      messageCount: 7,
    }
  }
  render() {
    return (
      <div className="About">
        <div className="About__container">
          <div className="About__intro">
            <h1>Adelie Developer's Group</h1>
            <h4>A Slack-based developer group</h4>
          </div>

          <div className="About__chatbox">
            <div className="Chatbox__header">
              <h4>#coffeeshop</h4>
            </div>
            <div className="Chatbox__message-container">
              <ul>{this.messages()}</ul>
            </div>

            <div className="Chatbox__input"></div>
          </div>

        </div>
      </div>
    )
  }
  componentDidMount() {
    this.fetchMessages();
    let chatbox = document.querySelector('.Chatbox__message-container');
    chatbox.style.height = '420px';
    this.messageIntervalLoop = setInterval(() =>{
      if(this.state.messageCount < this.messageLimit) {
        // console.log(chatbox);
        this.setState({ messageCount: this.state.messageCount + 1 });
        smoothScrollTo(chatbox, chatbox.scrollHeight, 400);
      }
    }, randomNum(5000) + 400);
  }

  // Clear Interval when moving to another page
  componentWillUnmount() {
    clearInterval(this.messageIntervalLoop);
  }

  messages() {
    return this.state.allMessages.slice(0, this.state.messageCount);
  }

  getRandomStockUser = () => {
    return this.stocks[randomNum(3) - 1];
  }

  fetchMessages = () => {
    const channelID = 'C0DDAKWPK';
    const queryString = `?token=${token}&channel=${channelID}&limit=${this.messageLimit}`;

    fetch(`https://slack.com/api/conversations.history${queryString}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        allMessages: this.cleanUpResponse(response.messages)
      });
      this.setState({ messages: this.state.allMessages.slice(0, this.state.messageCount) })
    });
  }

  cleanUpResponse = (response) => {
    return response.map((message) => { 
      return {
        id: message.client_msg_id,
        timestamp: message.ts,
        text: message.text.replace(/\<\@U\w+\>,?\s?/g, '')
      }
    })
    .filter((message) => message.text.substring(0,15) !== 'uploaded a file')
    .map((message) => {
      const randomUser = this.getRandomStockUser();
      return (
        <div className="Chatbox__container" key={message.id}>
          <div>
            <img className="Chatbox__photo" src={ randomUser.photo } />
          </div>

          <div className="Chatbox__message-item">
            <span className="Chatbox__name">
              { randomUser.name }                          
              <span className="Chatbox__time">{getTime(message.ts)}</span></span>
            <li>{message.text}</li>
          </div>

        </div>
      )
    })
    .reverse()

  }
};

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            name
            title
            website
            socials {
              github
              twitter
              linkedin
            }
          }
        }
      }
    }
  }
`