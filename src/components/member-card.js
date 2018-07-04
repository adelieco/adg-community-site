import React, {
  Component
} from "react";
import SocialSites from 'components/social-sites';
import memberCardS from 'scss/member-card.scss';

export default class ToggleBall extends Component {
  constructor(props) {
    super(props);
    // this.props = props;
    // console.log(props);
    // this.SocialSites = this.SocialSites.bind(this);
  }
  render() {
    return (
      <div className={`MemberCard MemberCard--${this.props.memberCardVariant}`}>
        <img 
          className="MemberCard__photo"
          src={this.props.member.photoURL}
          alt={this.props.member.frontmatter.name}/>
        <span className="MemberCard__name">{this.props.member.frontmatter.name}</span>
        <p className="MemberCard__content" dangerouslySetInnerHTML={{ __html: this.props.member.html}}></p>
        <SocialSites socialList={this.props.member.frontmatter.socials[0]}/>
      </div>
    );
  }
}



