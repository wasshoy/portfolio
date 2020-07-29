import React from 'react';
import Profile from './Profile';
import Skill from './Skill';
import '../css/About.css';

class About extends React.Component {
  render() {
    return (
      <div className='about wrapper'>
        <h1 className='page-title'>
          <span>about</span>
        </h1>
        <Profile />
        <Skill />
      </div>
    );
  }
}

export default About;
