import React, { useState } from "react";

export const Input = (prop) => {
  const [topTextState, setTopTextState] = useState("");
  const [buttomTextState, setbuttomTextState] = useState("");
  return (
    <div className='memeTextInput'>
      <input
        name='topInput'
        value={topTextState}
        onChange={(event) => setTopTextState(event.target.value)}
      />
      <input
        name='buttomInput'
        value={buttomTextState}
        onChange={(event) => setbuttomTextState(event.target.value)}
      />
      <div
        className='button'
        onClick={() => prop.textInput(topTextState, buttomTextState)}
      >
        Generate
      </div>
    </div>
  );
};
