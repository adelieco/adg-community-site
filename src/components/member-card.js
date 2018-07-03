import React, {
  Component
} from "react";
import LinkedInIcon from 'assets/img/linkedin-icon.png';
import TwitterIcon from 'assets/img/twitter-icon.png';
import GithubIcon from 'assets/img/github-icon.png';
import memberCardS from 'scss/member-card.scss';

export default (props) => {
  return (
    <div className={`MemberCard MemberCard--${props.memberCardVariant}`}>
      <img 
        className="MemberCard__photo"
        src={props.member.photoURL}
        alt={props.member.frontmatter.name}/>
      <span className="MemberCard__name">{props.member.frontmatter.name}</span>
      <p className="MemberCard__content" dangerouslySetInnerHTML={{ __html: props.member.html}}></p>
      <SocialSites socialList={props.member.frontmatter.socials[0]}/>
    </div>
  );
}

function SocialSites(props) {
  console.log(props.socialList);
  return (
    <ul className="MemberCard__social-wrapper">

    {props.socialList.github !== null && props.socialList.github !== '' &&
      <li className="MemberCard__social">
        <a target="_blank" href={`https://github.com/${props.socialList.github}`}>
          <img className="MemberCard__social-image" src={GithubIcon} />
        </a>
      </li>
    }

    {props.socialList.twitter !== null && props.socialList.twitter !== '' &&
      <li className="MemberCard__social">
        <a target="_blank" href={`https://twitter.com/${props.socialList.twitter}`}>
          <img className="MemberCard__social-image" src={LinkedInIcon} />
        </a>
      </li>
    }

    {props.socialList.linkedin !== null && props.socialList.linkedin !== '' &&
      <li className="MemberCard__social">
        <a target="_blank" href={`https://linkedin.com/in/${props.socialList.linkedin}`}>
          <img className="MemberCard__social-image" src={TwitterIcon} />
        </a>
      </li>
    }

    </ul>
  );
}


