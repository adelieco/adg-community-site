import React, {
  Component
} from "react";
import LinkedInIcon from 'assets/img/linkedin-icon.png';
import TwitterIcon from 'assets/img/twitter-icon.png';
import GithubIcon from 'assets/img/github-icon.png';
import memberCardS from 'scss/member-card.scss';

export default (props) => {
  return (
    <div className="memberCard">
      <img 
        className="photo"
        src={props.member.photoURL}
        alt={props.member.frontmatter.name}/>
      <span className="name">{props.member.frontmatter.name}</span>
      <p className="content" dangerouslySetInnerHTML={{ __html: props.member.html}}></p>
      <SocialSites socialList={props.member.frontmatter.socials[0]}/>
    </div>
  );
}

function SocialSites(props) {
  console.log(props.socialList);
  return (
    <ul className="socialWrapper">

    {props.socialList.github !== null && props.socialList.github !== '' &&
      <li className="social">
        <a target="_blank" href={`https://github.com/${props.socialList.github}`}>
          <img className="socialImage" src={GithubIcon} />
        </a>
      </li>
    }

    {props.socialList.twitter !== null && props.socialList.twitter !== '' &&
      <li className="social">
        <a target="_blank" href={`https://twitter.com/${props.socialList.twitter}`}>
          <img className="socialImage" src={LinkedInIcon} />
        </a>
      </li>
    }

    {props.socialList.linkedin !== null && props.socialList.linkedin !== '' &&
      <li className="social">
        <a target="_blank" href={`https://linkedin.com/in/${props.socialList.linkedin}`}>
          <img className="socialImage" src={TwitterIcon} />
        </a>
      </li>
    }

    </ul>
  );
}


