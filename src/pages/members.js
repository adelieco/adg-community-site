import React from "react";
import path from 'path';

export default ({data}) => (
  <div>
    <h1>Members Page</h1>
    <div className="members-wrapper">
    {data.allMarkdownRemark.edges.map(({ node }, index) =>
      <div key={index} className="MemberCard">
        <img 
          src={
            data.allFile.edges
            .find( edge =>  node.frontmatter.photoURL === `${edge.node.name}.jpg` ) 
            .node.publicURL
          }
          alt={node.frontmatter.name}/>
        <span key={index}>{node.frontmatter.name}</span>
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