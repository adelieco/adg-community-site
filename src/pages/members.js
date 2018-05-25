import React from "react";
import path from 'path';

export default ({data}) => (
  <div>
    <h1>Members Page</h1>
    <div className="members-wrapper">
    {data.allMarkdownRemark.edges.map(({ node }, index) =>
      <div key={index} className="MemberCard">
        <p key={index}>{node.frontmatter.name}</p>
        <img src={data.allFile.edges[0].node.publicURL} alt=""/>
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
          publicURL
        }
      }
    }
  }
`