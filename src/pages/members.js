import React from "react";

export default () => (
  <div>
    <h1>Biographies Page</h1>
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