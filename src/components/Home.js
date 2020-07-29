import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <section className='home-section'>
          <div className='home'>
            <h1 className='page-title'>
              <span>hello!</span>
            </h1>
          </div>
          <p>こんにちは。 ありがとうございます。</p>
          <p>Tea が ゆらぐアニメーション がほしい。 カヌレもほしい。</p>
          <p>クリックしたら こぼれて はい景を そめる。</p>
        </section>
      </div>
    );
  }
}

export default Home;
