import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Description;
