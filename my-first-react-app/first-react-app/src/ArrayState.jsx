import { useState } from "react";
function ArrayState() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Orange",
    "Pineapple",
  ]);
  const handleAddChange = () => {
    const newFruit = document.getElementById("addFruit").value;
    document.getElementById("addFruit").value = "";
    setFruits((f) => [...f, newFruit]);
  };
  //   const handleRemoveChange = () => {

  //   };

  const list = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  const listOption = fruits.map((fruit) => <option>{fruit}</option>);

  return (
    <>
      <h1>Fruits List</h1>
      <ol>{list}</ol>
      <input type="text" id="addFruit" />
      <button onClick={handleAddChange}>Add Fruit</button>
      {/* <br />
      <br />
      <select>
        <option value="">Select </option>
        {listOption}
      </select>
      <button onClick={handleRemoveChange}>Remove Fruit</button> */}
    </>
  );
}
export default ArrayState;
