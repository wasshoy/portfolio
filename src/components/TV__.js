import React from 'react';
import '../css/TV.css';
import '../css/TVtransitions.css';

function Thumbnail(props) {
  return (
    <li
      className='thumbnail'
      onClick={() => props.changeMainWork(props.work.id)}
    >
      <span>
        <img
          className='thumbnail__image'
          src={`${process.env.PUBLIC_URL}${props.work.image}`}
          alt='thumbnail'
        />
      </span>
    </li>
  );
}

function ThumbnailList(props) {
  const works = props.works.map((work) => {
    return (
      <Thumbnail
        work={work}
        key={work.id}
        changeMainWork={props.changeMainWork}
      />
    );
  });
  return <ul className='TV-app__thumbnails'>{works}</ul>;
}

class TV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [
        {
          id: 0,
          name: 'Portfolio Web Site',
          content: (
            <p>
              Here.
              <br /> ゆっくり していってね！
            </p>
          ),
          url: 'https://github.com/wasshoy/',
          image: '/img/pic00.png',
        },
        {
          id: 1,
          name: 'Start Saving Energy Today.',
          content: (
            <p>I designed this poster for a public offering in Kyushu Univ.</p>
          ),
          url: 'https://www.kyushu-u.ac.jp/ja/university/approach/syoene01/',
          image: '/img/pic01.png',
        },
        {
          id: 2,
          name: '空想辞典',
          content: (
            <p>
              かくうの 日本語を <br />
              みんなで作って 集める サイトです。
            </p>
          ),
          url: 'https://google.com/',
          image: '/img/pic02.png',
        },
      ],
      mainWorkId: 0,
      maxWorkId: 2,
    };
    this.changeMainWork = this.changeMainWork.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goBackPrevious = this.goBackPrevious.bind(this);
  }
  goBackPrevious() {
    this.setState((prevState) => {
      if (this.state.mainWorkId > 0) {
        return { mainWorkId: prevState.mainWorkId - 1 };
      } else {
        return { mainWorkId: this.state.maxWorkId };
      }
    });
  }
  goToNext() {
    this.setState((prevState) => {
      if (this.state.mainWorkId < prevState.maxWorkId) {
        return { mainWorkId: prevState.mainWorkId + 1 };
      } else {
        return { mainWorkId: 0 };
      }
    });
  }
  changeMainWork(id) {
    this.setState({ mainWorkId: id });
  }
  render() {
    return (
      <div className='TV-app'>
        <div className='TV-app__tv'>
          <div className='TV-app__tv__body'>
            <div className='TV-app__tv__body__screen'>
              <a href={this.state.works[this.state.mainWorkId].url}>
                <img
                  className='TV-app__tv__body__image'
                  src={`${process.env.PUBLIC_URL}${
                    this.state.works[this.state.mainWorkId].image
                  }`}
                  alt='tv-screen'
                />
              </a>
            </div>
            <div className='TV-app__tv__dial-btns'>
              <ul>
                <li>
                  <button
                    className='prev-btn'
                    onClick={() => this.goBackPrevious()}
                  >
                    &lt;
                  </button>
                </li>
                <li>
                  <button className='next-btn' onClick={() => this.goToNext()}>
                    &nbsp;&gt;
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='TV-app__tv__description'>
          <h4 className='TV-app__tv__description__title'>
            {this.state.works[this.state.mainWorkId].name}
          </h4>
          {this.state.works[this.state.mainWorkId].content}
        </div>
        <ThumbnailList
          works={this.state.works}
          changeMainWork={this.changeMainWork}
        />
      </div>
    );
  }
}

export default TV;
