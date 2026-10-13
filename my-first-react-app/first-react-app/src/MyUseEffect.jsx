import { useState, useEffect } from "react";
function MyUseState() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // they say that this code above runs when ever a component renders but isn't useEffect the one that's making it rerender by changing the values of width and height???
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  );
}
export default MyUseState;
