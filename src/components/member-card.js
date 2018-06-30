import React, {
  Component
} from "react";
import LinkedInIcon from 'assets/img/linkedin-icon.png';
import TwitterIcon from 'assets/img/twitter-icon.png';
import GithubIcon from 'assets/img/github-icon.png';


export default (props) => {
  return (
    <div style={s.memberCard}>
      <img 
        style={s.photo}
        src={props.member.photoURL}
        alt={props.member.frontmatter.name}/>
      <span style={s.name}>{props.member.frontmatter.name}</span>
      <p style={s.content} dangerouslySetInnerHTML={{ __html: props.member.html}}></p>
      <SocialSites socialList={props.member.frontmatter.socials[0]}/>
    </div>
  );
}

function SocialSites(props) {
  console.log(props.socialList);
  return (
    <ul style={s.socialWrapper}>

    {props.socialList.github !== null && props.socialList.github !== '' &&
      <li style={s.social}>
        <a target="_blank" href={`https://github.com/${props.socialList.github}`}>
          <img style={s.socialImage} src={GithubIcon} />
        </a>
      </li>
    }

    {props.socialList.twitter !== null && props.socialList.twitter !== '' &&
      <li style={s.social}>
        <a target="_blank" href={`https://twitter.com/${props.socialList.twitter}`}>
          <img style={s.socialImage} src={LinkedInIcon} />
        </a>
      </li>
    }

    {props.socialList.linkedin !== null && props.socialList.linkedin !== '' &&
      <li style={s.social}>
        <a target="_blank" href={`https://linkedin.com/in/${props.socialList.linkedin}`}>
          <img style={s.socialImage} src={TwitterIcon} />
        </a>
      </li>
    }

    </ul>
  );
}


const s = {
  memberCard: {
    display: 'flex',
    position: 'relative',
    flexFlow: 'column nowrap',
    flex: '0 0 30%',
    margin: '10% auto',
    border: '1px solid gray',
    padding: '15px',
    paddingBottom: '45px',
    borderRadius: '3px',
  },
  photo: {
    borderRadius: '100%',
    maxHeight: '120px',
    maxWidth: '120px',
    marginBottom: '20px',
    alignSelf: 'center',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  socialWrapper: {
    position: 'absolute',
    bottom: '15px',
  },
  social: {
    display: 'inline',
    marginRight: '5px',
  },
  content: {
    marginBottom: '15px',
  },
  socialImage: {
    height: '25px',
  }
}