import React from "react";

const Image = ({ imgURL }) => {
  return (
    <div>
      <img
        style={{
          width: "250px",
          height: "100%",
        }}
        src={imgURL}
        alt="office"
      />
    </div>
  );
};

export default Image;
