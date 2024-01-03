import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
