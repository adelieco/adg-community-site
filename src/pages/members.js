import React from "react";
import path from 'path';

// Alias styles object to 's' for cleanliness
const s = {
  container: {
    display: 'flex',
  },
  memberCard: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '0 0 30%',
    margin: 'auto',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  }
};

export default ({data}) => (
  <div>
    <h1>Members Page</h1>
    <div style={s.container}>
    {data.allMarkdownRemark.edges.map(({ node }, index) =>
      <div key={index} style={s.memberCard}>
        <img 
          src={
            data.allFile.edges
            .find( edge =>  node.frontmatter.photoURL === `${edge.node.name}.jpg` ) 
            .node.publicURL
          }
          alt={node.frontmatter.name}/>
        <span style={s.name} key={index}>{node.frontmatter.name}</span>
        <p dangerouslySetInnerHTML={{ __html: node.html}}></p>
      </div>
    )}
    </div>
  </div>
);


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
            twitter
            linkedin
            website
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