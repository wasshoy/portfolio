import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './Home';
import Work from './Work';
import About from './About';
import '../css/destyle.css';
import '../css/App.css';
import '../css/Apptransitions.css';

const routes = [
  { path: '/', name: 'home', Component: Home },
  { path: '/work', name: 'work', Component: Work },
  { path: '/about', name: 'about', Component: About },
];

function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='nav'>
          {routes.map((route) => (
            <Link key={route.path} to={route.path} className='nav__menu'>
              {route.name}
            </Link>
          ))}
        </nav>
        <div className='container'>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={800}
                  classNames='content'
                  unmountOnExit
                >
                  <div className='content'>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Router>
      {/* <footer>
        <span>(c) 2020 wasshoy</span>
      </footer> */}
    </div>
  );
}

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Navbar />
//         <Routers />
//       </Router>
//       <footer>
//         <span>(c) 2020 wasshoy</span>
//       </footer>
//     </div>
//   );
// }

export default App;
