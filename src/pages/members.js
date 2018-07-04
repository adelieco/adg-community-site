import React, {Component} from "react";
import MemberCard from 'components/member-card.js';
import ToggleBall from 'components/toggle-ball.js';
import { hyphenateSpaces } from 'utils.js';
import membersS from 'scss/pages/members.scss';

// Alias styles object to 's' for cleanliness
export default class MembersPage extends Component {
  constructor({data}) {
    super();
    this.data = {data};
    this.state = {
      memberCardVariant: 'details',
      members: this.prepareMembers(data),
    };
  }

  render() {
    return (
      <div>
        <div className="Members__container">

          <ToggleBall 
            className="Members__toggle"
            toggle={this.toggleMemberCardVariant}/>

          {this.state.members.map( (member, index) =>
            <MemberCard
              key={index}
              member={member}
              memberCardVariant={this.state.memberCardVariant}
            />
          )}
        </div>
      </div>
    );
  }
  toggleMemberCardVariant = () => {
    this.setState({
      memberCardVariant: this.state.memberCardVariant === 'roster' ? 'details' : 'roster',
    })
  }

  // Consolidates graphQL data
  prepareMembers = (data) => {
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