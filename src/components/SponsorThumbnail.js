import React, { Component } from "react";

class SponsorThumbnail extends Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <div className="col m4 s12">
        <img
          src={this.props.imageUrl}
          className="sponsorsLogo"
          data-aos="flip-left"
          data-aos-duration="1000"
          alt="Profile Pic"
        />
      </div>
    );
  }
}

export default SponsorThumbnail;
