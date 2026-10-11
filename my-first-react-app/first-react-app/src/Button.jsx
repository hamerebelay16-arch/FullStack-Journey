// function Greetings(props) {
//   const welcomeMessage = <h3>Welcome {props.name}</h3>;
//   const LogInPrompt = <h3>Please Log In</h3>;

//   return props.isLoggedIn ? welcomeMessage : LogInPrompt;
// }
function Button() {
  const handleclick = (name) => {
    console.log(` Hello ${name}`);
  };
  return <button onClick={() => handleclick("Ham")}>Hello</button>;
}
export default Button;
