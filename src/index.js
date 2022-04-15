import ReactDOM from "react-dom";
import React from "react";

const imageStyle = {
  borderRadius: "200px",
  border: "2px solid red",
};

const containerStyle = {
  textAlign: "center",
};

const avatar = (
  <>
    <div style={containerStyle}>
      <img src="https://picsum.photos/200" alt="avatar" style={imageStyle} />
      <h3>Tom Hawks</h3>
    </div>
    <div style={containerStyle}>
      <img src="https://picsum.photos/200" alt="avatar" style={imageStyle} />
      <h3>Tom Hawks</h3>
    </div>
    <div style={containerStyle}>
      <img src="https://picsum.photos/200" alt="avatar" style={imageStyle} />
      <h3>Tom Hawks</h3>
    </div>
  </>
);

ReactDOM.render(avatar, document.getElementById("root"));
