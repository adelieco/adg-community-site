import React from "react";
import path from 'path';

export default ({data}) => (
  <div>
    <h1>Members Page</h1>
    <div className="members-wrapper">
    {data.allMarkdownRemark.edges.map(({ node }, index) =>
      <div key={index} className="MemberCard">
        <p key={index}>{node.frontmatter.name}</p>
        <img 
          src={
            data.allFile.edges
            .find( edge =>  node.frontmatter.photoURL === `${edge.node.name}.jpg` ) 
            .node.publicURL
          }
          alt={node.frontmatter.name}/>
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