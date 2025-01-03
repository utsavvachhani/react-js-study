import React from 'react';
import Files from './files.jpg';

function Card({Title = "Card Title" , btnText ="Click"}) {
  return (
    <div className="m-3 max-w-sm rounded overflow-hidden shadow-lg relative">
      <div className="h-40">
        <img className="w-full blur-sm" src={Files} alt="Card Image" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <div className="bg-white bg-opacity-50 p-2 rounded-md text-center">
            <div className="font-bold text-xl">{Title}</div>
            <p className="text-black text-base">
              This is a description of the card. It can be about anything you want.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-52 font-bold py-2 px-8 rounded">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
