import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, SetNames] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);

  const onAddName = () => {
    SetNames([
      ...names,
      {
        id: 10,
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <div>
        {names.map((firstName) => (
          <div key={firstName.name}>{firstName.name}</div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default App;
