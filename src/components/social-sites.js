import React, {
  Component
} from "react";
import LinkedInIcon from 'assets/img/linkedin-icon.png';
import TwitterIcon from 'assets/img/twitter-icon.png';
import GithubIcon from 'assets/img/github-icon.png';
import memberCardS from 'scss/member-card.scss';

export default class SocialSites extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="MemberCard__social-wrapper">

      {this.props.socialList.github !== null && this.props.socialList.github !== '' &&
        <li className="MemberCard__social-item">
          <a target="_blank" href={`https://github.com/${this.props.socialList.github}`}>
            <img className="MemberCard__social-image" src={GithubIcon} />
          </a>
        </li>
      }

      {this.props.socialList.twitter !== null && this.props.socialList.twitter !== '' &&
        <li className="MemberCard__social-item">
          <a target="_blank" href={`https://twitter.com/${this.props.socialList.twitter}`}>
            <img className="MemberCard__social-image" src={LinkedInIcon} />
          </a>
        </li>
      }

      {this.props.socialList.linkedin !== null && this.props.socialList.linkedin !== '' &&
        <li className="MemberCard__social-item">
          <a target="_blank" href={`https://linkedin.com/in/${this.props.socialList.linkedin}`}>
            <img className="MemberCard__social-image" src={TwitterIcon} />
          </a>
        </li>
      }
      </ul>
    );
  }
}
