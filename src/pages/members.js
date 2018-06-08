import React from "react";
import MemberCard from 'components/member-card.js';
import { hyphenateSpaces } from 'utils.js';

// Alias styles object to 's' for cleanliness
const s = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
  },
};

export default ({data}) => {
  let markdownData = Object.assign({}, data.allMarkdownRemark)
  let members = [];

  // Consolidate graphql response into single, readable members
  markdownData.edges.map( (member, index) => {
    // Alias member to "member.node" because it's fucking long
    member = member.node;
    let username = hyphenateSpaces(member.frontmatter.name.toLowerCase())
    data.allFile.edges.forEach( fileNode => {
      if(username === fileNode.node.name) {
        let newMember = Object.assign(member, {photoURL: fileNode.node.publicURL})
        members.push(newMember);
      }
    })
  })

  // console.log(members)

  return (
    <div>
      <div style={s.container}>
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