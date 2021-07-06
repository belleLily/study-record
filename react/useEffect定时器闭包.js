import { useState, useEffect, useRef } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let [timers, setTimers] = useState([]);
  let saveCallback = useRef();
  let callback = () => {
    setCount((count += 1));
  };
  useEffect(() => {
    saveCallback.current = callback;
  });
  useEffect(() => {
    let tick = () => {
      saveCallback.current();
    };
    let timer = window.setInterval(tick, 1000);
    timers.push(timer);
    setTimers(timers);
    console.log(timers);
    return () => {
      clearInterval(timer);
    };
  }, [timers]);
  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}
