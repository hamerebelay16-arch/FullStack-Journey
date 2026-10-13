import { useState } from "react";
function ObjectState() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 2022,
    color: "red",
  });
  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
    //this is the same us the one below
    //setCar((c) => ({brand: "Ford",    model: "Mustang",    year: 2022,    color: "red", year: e.target.value }));
    // year gets overriden by the later value
  };
  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  const handleBrandChange = (e) => {
    setCar((c) => ({ ...c, brand: e.target.value }));
  };
  const handleColorChange = (e) => {
    setCar((c) => ({ ...c, color: e.target.value }));
  };

  return (
    <>
      <h1>Choose Your Favourite Car</h1>
      <div className="car-selector">
        <label> YEAR: </label>
        <input
          type="number"
          name="year"
          value={car.year}
          onChange={handleYearChange}
        />
        <br />
        <br />
        <label> BRAND: </label>
        <input
          type="text"
          name="brand"
          value={car.brand}
          onChange={handleBrandChange}
        />
        <br />
        <br />
        <label> MODEL: </label>
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleModelChange}
        />
        <br />
        <br />
        <label> COLOR: </label>
        <input
          type="text"
          name="color"
          value={car.color}
          onChange={handleColorChange}
        />
      </div>
      <div className="car-display">
        <h3>Your Dream Car Is Here!</h3>
        <p>{car.year}</p>
        <p>{car.brand}</p>
        <p>{car.model}</p>
        <p>{car.color}</p>
      </div>
    </>
  );
}
export default ObjectState;
