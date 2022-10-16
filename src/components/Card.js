import "./Card"
function Card(props) {
  return (
    <div>
      {" "}
      <div className="wallpaper"></div>
      <img src={props.profilePic} className="img" />
      <div> {props.username}</div>
      <div> {props.id}</div>
      {/* <div> {title = "About"}</div> */}
      <div>{props.userInfo}</div>
    </div>
  );
}
export default Card