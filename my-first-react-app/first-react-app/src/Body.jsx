function Body() {
  const book1 = "Atomic habits";
  const book2 = "The psychology of money";
  return (
    <div>
      <p>What's up everybody. Here are the books in hand:</p>
      <ul>
        <li>Let them</li>
        <li>Rich dad poor dad</li>
        <li>{book2}</li>
        <li>{book1.toUpperCase()}</li>
      </ul>
    </div>
  );
}
export default Body;
