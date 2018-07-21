import React, {
  Component
} from "react";
import CTAS from 'scss/cta.scss';

export default class CTA extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="CTA__container">
        <p className="CTA__text">join a community of aspiring developers from all over the world</p>
        <div
          style={CTAS}
          className="CTA__button">
            <a href="/join" className="CTA__link">
              hm ok 
            </a>
        </div>
      </div>
    );
  }
}

