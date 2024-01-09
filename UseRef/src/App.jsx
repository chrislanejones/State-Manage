import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, SetNames] = useState([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    SetNames([
      ...names,
      {
        id: idRef.current++,
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <div>
        {names.map((firstName) => (
          <div key={firstName.name}>
            {firstName.id} - {firstName.name}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default App;
