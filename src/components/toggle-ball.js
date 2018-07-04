import React, {
  Component
} from "react";
import toggleBallS from 'scss/toggle-ball.scss';

export default class ToggleBall extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.toggleBall = this.toggleBall.bind(this);
  }

  render() {

    let toggleBallS = this.state.isToggleOn ? 
    { 'transform': 'translateX(0)' } : 
    { 'transform': 'translateX(21px)' }

    return (
      <div
        onClick={this.toggleBall}
        className={`ToggleBall__container ${this.props.className}`}>
        <div style={toggleBallS} className="ToggleBall__ball"></div>
      </div>
    );
  }

  toggleBall = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    this.props.toggle();
  }
}
