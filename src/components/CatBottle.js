import React from 'react';
import Candy from './Candy';
import '../css/CatBottle.css';

class CatBottle extends React.Component {
  render() {
    return (
      <div className='catbottle'>
        <div className='catbottle__cap'>
          <span>Skill Candy</span>
        </div>
        <div className='catbottle__body'>
          <div className='catbottle__bottom'></div>
          <Candy />
        </div>
      </div>
    );
  }
}

export default CatBottle;
