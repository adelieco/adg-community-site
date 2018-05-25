import React from "react";

export default ({data}) => (
  <div>
    <h1>Members Page</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) =>
        <p key={index}>{node.frontmatter.name}</p>
    )}

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
  }
`