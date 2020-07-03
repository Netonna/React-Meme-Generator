import React from "react";

export const Display = ({ input, meme }) => {
  return (
    <div className='memeDisplay'>
      <p className='upperText'>{input.top}</p>
      <img src={meme} alt='Meme' className='memeImage' />
      <p className='buttomText'>{input.buttom}</p>
    </div>
  );
};
Display.defaultProps = {
  meme: "https://i.imgflip.com/1g8my4.jpg",
};
