import React, { useEffect, useState } from "react";

const About = () => {
  const [counter, setCounter] = useState<number>(0);

  function sendMessageToMainProcess() {
    // @ts-ignore
    const response = window.ipcRenderer.sendSync("ping", counter);
    setCounter(response);
  }

  useEffect(sendMessageToMainProcess, []);
  return (
    <>
      <h1>About</h1>
      <button onClick={sendMessageToMainProcess}>click me</button>
      <p>{counter}</p>
    </>
  );
};

export default About;
