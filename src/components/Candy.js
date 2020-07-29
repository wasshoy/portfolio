import React from 'react';

class Candy extends React.Component {
  render() {
    return (
      <div className='candies'>
        <div className='python-candy'>
          <img
            className='python-icon'
            src={`${process.env.PUBLIC_URL}/img/python.svg`}
            alt='python-icon'
          />
        </div>
        <div className='html-candy'>
          <img
            className='html-icon'
            src={`${process.env.PUBLIC_URL}/img/html-5.svg`}
            alt='html-icon'
          />
        </div>
        <div className='css-candy'>
          <img
            className='css-icon'
            src={`${process.env.PUBLIC_URL}/img/css-3.svg`}
            alt='css-icon'
          />
        </div>
        <div className='scss-candy'>
          {/* <img className='scss-icon' src={CSSIcon} alt='scss-icon' /> */}
        </div>
      </div>
    );
  }
}

export default Candy;
