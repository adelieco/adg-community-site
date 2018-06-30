import React from "react";
import MemberCard from 'components/member-card.js';
import { hyphenateSpaces } from 'utils.js';
import membersS from 'scss/pages/members.scss';

// Alias styles object to 's' for cleanliness
export default ({data}) => {

  // Consolidates graphQL data
  let members = prepareMembers(data);

  return (
    <div>
      <div className="container">
        {members.map( (member, index) =>

          <MemberCard
            key={index}
            member={member}
          />

        )}
      </div>
    </div>
  )
};

function prepareMembers(data) {
  let markdownData = Object.assign({}, data.allMarkdownRemark)
  let members = [];

  // Consolidate graphql response into single, readable members
  markdownData.edges.map( (member, index) => {
    // Alias member to "member.node" because it's fucking long
    member = member.node;

    // Consolidate images
    let username = hyphenateSpaces(member.frontmatter.name.toLowerCase())
    data.allFile.edges.forEach( fileNode => {
      if(username === fileNode.node.name) {
        let newMember = Object.assign(member, {photoURL: fileNode.node.publicURL})
        members.push(newMember);
      }
    })
  })
 return members; 
}



export const query = graphql`
  query MemberQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            name
            title
            website
            socials {
              github
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