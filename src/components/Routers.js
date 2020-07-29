import React from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Work from './Work';

class Routers extends React.Component {
  render() {
    return (
      <section className='route-section'>
        <Route exact path='/' component={Home} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/about' component={About} />
      </section>
    );
  }
}

export default Routers;
