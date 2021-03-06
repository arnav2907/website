import React, { Component } from "react";

class ProfileCard extends Component {
  render() {
    let classString = "";

    for (let key in this.props.outerClasses) {
      classString += key + " ";
    }

    return (
      <div class={classString}>
        <div class="card-content">
          <img
            src={this.props.image}
            className="TeamMemberImage"
            alt="Profile Pic"
          />
          <span class="card-title cardTeamMembersSpan">{this.props.name}</span>
          <p>{this.props.post}</p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
