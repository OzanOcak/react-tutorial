import ReactDOM from "react-dom";

const styleObj = {
  color: "green",
  backGround: "blue",
  fontSize: "80px",
};

const str = "hello world!";
const text = <h1 style={styleObj}>{str}</h1>;

ReactDOM.render(text, document.getElementById("root"));
