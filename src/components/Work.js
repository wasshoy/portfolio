import React from 'react';
import TV from './TV';
import '../css/Work.css';

class Work extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <h1 className='page-title'>
          <span>work</span>
        </h1>
        <section className='tv-wrapper'>
          <TV />
        </section>
      </div>
    );
  }
}

export default Work;
