import { useState, useEffect } from 'react';
import "./Timer.css";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [stop, setStop] = useState(false);
    useEffect(() => {
      if (stop) {
        return;
      }
      const id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },[count, stop]);
    

    const handleClick__stop = () => {
      setStop(true);
    };

    return(
      <div id = "timer">
          <h1>{count}秒経過</h1>
          <button id = "stop" onClick={handleClick__stop}>ストップ</button>
      </div>
    )
};

export default Timer;
