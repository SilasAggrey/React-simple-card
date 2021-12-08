import React, { Component } from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

import sidePic from "../image.jpg";

class Simplecard extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "650px",
          height: "250px",
          margin: "auto",
          marginTop: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 7px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Image imgURL={sidePic} />
        <div
          style={{
            // flex: ".6",
            height: "100%",
            padding: "0 10px",
          }}
        >
          <Title title="Tom" />
          <Description desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
        </div>
      </div>
    );
  }
}

export default Simplecard;
