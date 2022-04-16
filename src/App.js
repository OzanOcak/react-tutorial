import "./global.css";
import User from "./User";

const App = () => {
  return (
    <div>
      <User name="Johny Deep" url="https://picsum.photos/201" />
      <User name="Tom Hanks" url="https://picsum.photos/200" />
      <User name="Brad Pitt" url="https://picsum.photos/203" />
    </div>
  );
};
export default App;
