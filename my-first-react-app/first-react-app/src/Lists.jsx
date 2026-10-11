import { useLayoutEffect } from "react";

function Lists(props) {
  //sort function sorts items in place

  //sorting based on name

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorts the items in the list alphabetically
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetic order

  // // sorting based on calories

  // fruits.sort((a, b) => a.calories - b.calories); // ascending order or calories

  // const lowcalfruits = fruits.filter((fruit) => fruit.calories >= 150); // then replace fruits.map... with lowcalfruits.map

  const category = props.category;
  const propList = props.items;

  propList.sort((a, b) => a.calories - b.calories); // ascending order or calories

  const list = propList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category"> {category}</h3>
      <ol className="list-items">{list}</ol>
    </>
  );
}
export default Lists;
