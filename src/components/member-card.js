import React, {
  Component
} from "react";
import LinkedInIcon from 'assets/img/linkedin-icon.png';
import TwitterIcon from 'assets/img/twitter-icon.png';


export default (props) => {
  return (
    <div style={s.memberCard}>
      <img 
        style={s.photo}
        src={props.member.frontmatter.photoURL}
        alt={props.member.frontmatter.name}/>
      <span style={s.name}>{props.member.frontmatter.name}</span>
      <p dangerouslySetInnerHTML={{ __html: props.member.html}}></p>

      <ul>
        <li>
          <a href={`https://twitter.com/${props.member.frontmatter.socials.twitter}`}>
            <img src={LinkedInIcon} />
          </a>
          <a href={`https://linkedin.com/in/${props.member.frontmatter.socials.linkedin}`}>
            <img src={TwitterIcon} />
          </a>
        </li>
      </ul>
    </div>

  );
}


const s = {
  memberCard: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '0 0 30%',
    margin: '10% auto',
    border: '1px solid gray',
    padding: '15px',
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
  }
}