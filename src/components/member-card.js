import React, { Component } from "react";

export default (props) => {
    return (
      <div className="MemberCard">
        <img
          src={
            props.imageFileEdges.find(
              edge => props.markdownNode.frontmatter.photoURL === `${edge.node.name}.jpg`
            ).node.publicURL
          }
          alt={props.markdownNode.frontmatter.name}
        />
        <span key={index}>{props.markdownNode.frontmatter.name}</span>
        <p dangerouslySetInnerHTML={{ __html: props.markdownNode.html }} />
      </div>
    );
}
