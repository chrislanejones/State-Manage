import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);

  fetch("/names.json")
    .then((response) => response.json())
    .then((data) => setNames(data));

  return <div>Names: {names.join(", ")}</div>;
}

export default App;
