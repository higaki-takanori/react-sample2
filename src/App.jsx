import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(1);
  const [faceShow, setFaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShow = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      faceShow || setFaceShow(true);
    } else {
      faceShow && setFaceShow(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello react!</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink" message="お元気です!" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShow}>on/off</button>
      {faceShow && <p>Σ('◉⌓◉’)</p>}
    </>
  );
};

export default App;
