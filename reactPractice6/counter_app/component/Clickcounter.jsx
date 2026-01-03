import { useRef, useState } from "react";

function Clickcounter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Button clicked:", countRef.current);
  };

  return (
    <div>
      <p>Button Clicked: {countRef.current} times</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>Re-render</button>
    </div>
  );
}

export default Clickcounter;
