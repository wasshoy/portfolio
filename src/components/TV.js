import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/TV.css';
import '../css/TVtransitions.css';

const works = [
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
    image: 'pic00.png',
  },
  {
    id: 1,
    name: 'Start Saving Energy Today.',
    content: (
      <p>I designed this poster for a public offering in Kyushu Univ.</p>
    ),
    url: 'https://www.kyushu-u.ac.jp/ja/university/approach/syoene01/',
    image: 'pic01.png',
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
    image: 'pic02.png',
  },
];
const maxWorkId = works.length - 1;

function Thumbnail(props) {
  return (
    <li
      className='thumbnail'
      onClick={() => {
        props.setCurrentWorkId(props.work.id);
        props.setShowGlitch(true);
      }}
    >
      <span>
        <img
          className='thumbnail__image'
          src={`${process.env.PUBLIC_URL}/img/${props.work.image}`}
          alt='thumbnail'
        />
      </span>
    </li>
  );
}

function ThumbnailList(props) {
  const worksList = works.map((work) => {
    return (
      <Thumbnail
        work={work}
        key={work.id}
        setCurrentWorkId={props.setCurrentWorkId}
        setShowGlitch={props.setShowGlitch}
      />
    );
  });
  return <ul className='TV-app__thumbnails'>{worksList}</ul>;
}

function TV() {
  const [currentWorkId, setCurrentWorkId] = useState(0);
  const [enterAnimation, setEnterAnimation] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  return (
    <div className='TV-app'>
      <div className='TV-app__tv'>
        <div className='TV-app__tv__body'>
          <div className='TV-app__tv__body__screen'>
            <a href={works[currentWorkId].url}>
              <CSSTransition
                in={enterAnimation}
                timeout={200}
                classNames='TV-app__tv__body__screen-animation'
                onEnter={() => setShowGlitch(false)}
                onExited={() => setShowGlitch(true)}
              >
                <img
                  className='TV-app__tv__body__screen__image'
                  src={`${process.env.PUBLIC_URL}/img/${works[currentWorkId].image}`}
                  alt='tv-screen'
                />
              </CSSTransition>
            </a>
          </div>
          <div className='TV-app__tv__dial-btns'>
            <ul>
              <li>
                <button
                  className='button prev-btn'
                  onClick={() => {
                    setCurrentWorkId(
                      currentWorkId !== 0 ? currentWorkId - 1 : maxWorkId
                    );
                    setShowGlitch(true);
                  }}
                >
                  &lt;
                </button>
              </li>
              <li>
                <button
                  className='button next-btn'
                  onClick={() => {
                    setCurrentWorkId(
                      currentWorkId !== maxWorkId ? currentWorkId + 1 : 0
                    );
                    setShowGlitch(true);
                  }}
                >
                  &nbsp;&gt;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='TV-app__tv__description'>
        <h4 className='TV-app__tv__description__title'>
          {works[currentWorkId].name}
        </h4>
        {works[currentWorkId].content}
      </div>
      <ThumbnailList
        setCurrentWorkId={setCurrentWorkId}
        setShowGlitch={setShowGlitch}
      />
    </div>
  );
}

export default TV;
