import { useState, useMemo } from "react";

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>Name: {sortedNames.join(", ")}</div>
    </>
  );
}

export default App;
