import Profilepic from "./assets/Profile.png";
function Card() {
  return (
    <div className="card">
      <img className="card-img" src={Profilepic} alt="profile picture" />
      <h2>Welcome to my first app</h2>
      <p className="card-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        perspiciatis quibusdam magni alias saepe beatae excepturi.
      </p>
    </div>
  );
}
export default Card;
