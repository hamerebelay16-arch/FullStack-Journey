import { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>{color}</p>
        </div>
        <div className="selector-container">
          <label> Select Color: </label>
          <input
            type="color"
            value={color}
            className="color-selector"
            onChange={handleColorChange}
          />
        </div>
      </div>
    </>
  );
}
export default ColorPicker;
