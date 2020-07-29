import React from 'react';
import CatBottle from './CatBottle';
import '../css/Skill.css';

class Skill extends React.Component {
  render() {
    return (
      <section className='about__skill'>
        {/* <div className='about__skill__title'>
          <img
            className='about__skill__icon'
            src={`${process.env.PUBLIC_URL}/img/spring-panda-256.png`}
            alt='icon'
          />
          <span>Skill</span>
        </div> */}
        {/* <hr className='separator' /> */}
        <CatBottle />
      </section>
    );
  }
}

export default Skill;
