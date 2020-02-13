import React, {
  Component
} from "react";
import heroS from 'scss/components/hero.scss';

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Hero__container">
        <h1 className="Hero__heading">
          { this.props.heading }
        </h1>
        <span className="Hero__subheading">
          { this.props.subheading }
        </span>
      </div>
    );
  }
}



