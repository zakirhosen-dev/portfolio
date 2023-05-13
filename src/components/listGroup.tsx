import { useState } from "react";

export default function ListGroup() {
  let listItems = ["dhaka", "chittagong", "mymensingh"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="container">
        <h1>List Group</h1>
        <ul className="list-group">
          {listItems.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
