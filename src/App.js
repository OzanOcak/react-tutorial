import DCContainer from "./DCContainer";
import Form from "./form/Form";
import "./global.css";
import User from "./User";

const App = () => {
  return (
    <div>
      <DCContainer />
      <User name="Johny Deep" url="https://picsum.photos/201" />
      <User name="Tom Hanks" url="https://picsum.photos/200" />
      <User name="Brad Pitt" url="https://picsum.photos/203" />
      <Form />
    </div>
  );
};
export default App;
