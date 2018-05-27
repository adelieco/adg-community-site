import React from "react";
import path from 'path';

// Alias styles object to 's' for cleanliness
const s = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
  },
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
};

export default ({data}) => {
  return (
  <div>
    <div style={s.container}>
    {data.allMarkdownRemark.edges.map(({ node }, index) =>

      // MemberCard
      <div key={index} style={s.memberCard}>
        <img 
          style={s.photo}
          src={
            data.allFile.edges
            .find( edge =>  node.frontmatter.photoURL === `${edge.node.name}.jpg` ) 
            .node.publicURL
          }
          alt={node.frontmatter.name}/>
        <span style={s.name} key={index}>{node.frontmatter.name}</span>
        <p dangerouslySetInnerHTML={{ __html: node.html}}></p>

        <ul>
          {node.frontmatter.socials.map((social, index) => 
            <li key={index}>
              <a href={`https://twitter.com/${social.twitter}`}>{social.twitter}</a>
              <a href={`https://linkedin.com/in/${social.linkedin}`}>{social.linkedin}</a>
            </li>
          )}
        </ul>
      </div>

      // End of MemberCard
    )}
    </div>
  </div>
)
};


export const query = graphql`
  query MemberQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            name
            title
            photoURL
            website
            socials {
              twitter
              linkedin
            }
          }
        }
      }
    }
    allFile(filter: {extension: { eq: "jpg" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`