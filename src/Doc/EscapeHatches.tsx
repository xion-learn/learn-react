import { useState, useRef, useEffect } from 'react';

function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('🔵 安排 "' + text + '" 日志');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 取消 "' + text + '" 日志');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        日志内容：{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '卸载' : '挂载'} 组件
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>时间过去了： {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        开始
      </button>
      <button onClick={handleStop}>
        停止
      </button>
    </>
  );
}

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
