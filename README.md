# create a react app with cra

```console
npx create-react-app react-dev
```

Then delete all the files except index.js, and replace all the code in index.js with below cone

```javascript
import ReactDOM from "react-dom";

const styleObj = {
  color: "green",
  backGround: "blue",
  fontSize: "80px",
};

const str = "hello world!";
const text = <h1 style={styleObj}>{str}</h1>;

ReactDOM.render(text, document.getElementById("root"));
```

ReactDom is a js library to create virtual dom consist of js objects in memory.
With react we can write html like code in js file and we can render this html like element(JSX) in ReactDom, which will create another dom as a state and will keep updating it if state change. React use diff algorithm to check id virtual dom change and inject new element after create real dom element.
