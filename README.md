# --- React Tutorial ---

## Hello World

create a react app with cra

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

## Creating list with basic Jsx

It will be similar as above sample

```javascript
<>
  <div style={containerStyle}>
    <img src="https://picsum.photos/200" alt="avatar" style={imageStyle} />
    <h3>Tom Hawks</h3>
  </div>
  ...
</>
```

There are two style objects in the file

```javascript
const imageStyle = { borderRadius: "200px", border: "2px solid red" };
const containerStyle = { textAlign: "center" };
```

And the variable will be rendered in RenderDom

```javascript
ReactDOM.render(avatar, document.getElementById("root"));
```

## Dividing files

ReactDom is supported createRoot methods, so it is updated. then App jsx element rendered <App /> is a function call and lastly App file imported.

```javascript
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

global.css file created instead of js modules, css definations changed accordingly
ex. backgroundColor: "yellow" ---> background-color: yellow;

```css
body {
  background-color: yellow;
}
.container {
  text-align: center;
}
.container img {
  border-radius: 200px;
  border: 2px solid red;
}
```

# Passing Props

create User.js with an anonymous arrow function and assign to a const variable , the function will be encapsulated which means cant be accessed to outside unless the const variable is not call as a function. Arrow function once called, it is lexical scope to where it is called since it is const variable.

```javascript
const User = (props) => {
  return (
    <div className="container">
      <img src={props.url} alt="avatar" />
      <h3>{props.name}</h3>
    </div>
  );
};
export default User;
```

lastly the User component/ function can be called now

```javascript
<User name="Johny Deep" url="https://picsum.photos/201" />
```

## setting up state with class component

if the state is needed, class component should be used

```javascript
import { Component } from "react";

class DigitalClock extends Component {
```

the class component extends react Component class in order to have a state

```javascript
  constructor(props) {
    super(props);

    this.state = {
      time: this.getTimeString(new Date()),
    };
    setInterval(() => {
      this.setState({
        time: this.getTimeString(new Date()),
      });
    }, 1000);
  }
```

the constructor gets the variables and methods for super class, state is also is implemented in super class, since it is an object, it can reach and assign tru this which is a pointer like in c state \* = & state , all objects can be accessed via reference in js.
this is [] in asm
[state] = {}

setInterval and setTimeout are part of web API in the browser, they are asynchronously processed
and return execution stack when it is ready.we can once implement setInterval in constructor and it will be working in the background

```javascript
getTimeString(time) {
    return `${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:`
render() {
    return <div className="clock">{this.state.time}</div>;
```

getTimeString function will be called every sec in setInterval and because the state chance every second react will recognize will diff algo and render the jsx element
