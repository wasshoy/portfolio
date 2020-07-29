import React from 'react';
import '../css/Profile.css';

class Profile extends React.Component {
  render() {
    return (
      <section className='about__profile'>
        <div className='about__profile__title'>
          <img
            className='about__profile__icon'
            src={`${process.env.PUBLIC_URL}/img/spring-panda-256.png`}
            alt='icon'
          />
          <span>wasshoy</span>
        </div>
        <hr className='separator' />
        <section className='about__profile__text'>
          {/* <table>
            <tr>
              <td>2015-2019</td>
              <td>Kyushu University, Japan Bachelor</td>
            </tr>
            <tr>
              <td>2019-</td>
              <td>Kyushu University</td>
            </tr>
          </table> */}
          <p></p>
          <ul className='about__profile__links'>
            <li>
              <a href='https://github.com/wasshoy/'>GitHub</a>
            </li>
            <li>
              <a href='https://twitter.com/wasshoy_wasshoy/'>Twitter</a>
            </li>
            <li>
              <a href='https://codepen.io/wasshoy'>CodePen</a>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Profile;
