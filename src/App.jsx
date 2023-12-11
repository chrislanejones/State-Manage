import { useState, useMemo } from "react";

function SortedList({ list }) {
  const sortedList = useMemo(() => [...list].sort(), [list]);
  return <div>{sortedList.join(", ")} </div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Overkill -> const countTotal = useMemo(() => count1 + count2, [count1, count2]);
  const countTotal = count1 + count2;

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>Name: {sortedNames.join(", ")}</div>
      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      <div>Total: {countTotal}</div>
      <SortedList list={names} />
    </>
  );
}

export default App;
