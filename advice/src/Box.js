import React from 'react';
import './Box.scss';

import mobileDivider from './svg/pattern-divider-mobile.svg';
import desktopDivider from './svg/pattern-divider-desktop.svg';
import Button from './Button';


function Box({advice, adviceNr, handleNewData}) {

let imageUrl = window.innerWidth >= 650 ? desktopDivider : mobileDivider;

  return (
    <div className='box text-center'>
        <h1>{adviceNr}</h1>
        <p>{advice}</p>
        <img src={imageUrl} alt="divider" />
        <Button getNewData={handleNewData}/>
    </div>
  )
}

export default Box