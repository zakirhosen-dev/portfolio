import React, { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, ["the second parameter"]);
  return <div>use of useEffect</div>;
}
