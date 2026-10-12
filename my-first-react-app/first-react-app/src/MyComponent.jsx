import { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);

  const UpdateName = () => {
    setName("Abebe");
  };

  const UpdateAge = () => {
    setAge(age + 1);
  };

  const UpdateStatus = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={UpdateName}>Add name</button>

      <p>Age: {age}</p>
      <button onClick={UpdateAge}>Add age</button>

      <p>IsRegistered : {isRegistered ? "Yes" : "No"}</p>
      <button onClick={UpdateStatus}>Toggle</button>
    </>
  );
}
export default MyComponent;
