const User = (props) => {
  return (
    <div className="container">
      <img src={props.url} alt="avatar" />
      <h3>{props.name}</h3>
    </div>
  );
};
export default User;
