import React from "react";

export default ({data}) => (
  <div>
    <h1>Members Page</h1>
    {data.allFile.edges.map(({ node }, index) =>
        <h1 key={index}>{node.relativePath}</h1>
    )}

  </div>
);

export const query = graphql`
  query MemberQuery {
    allFile {
      edges {
        node {
          relativePath 
        }
      }
    }
  }
`