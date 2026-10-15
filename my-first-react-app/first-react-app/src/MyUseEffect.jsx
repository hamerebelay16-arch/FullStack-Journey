import { useState, useEffect } from "react";
function MyUseState() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      // this return statement runs before the component rerenders(if no dependencies) or before the component unmounts. It helps clean up the event listener when the component is removed from the DOM
    };
  });
  useEffect(() => {
    document.title = `(Size: ${width} x ${height})`;
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
