import React from 'react';
import Main from './components/Main.js';
// import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import classes from './App.module.css';
// import { Nav } from 'react-bootstrap';



function App() {
  return (
    <div className={classes.App}>
        {/* <BrowserRouter>
        <Nav className={classes.navbar}  defaultActiveKey='/'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link'  to='/projects'>Projects</NavLink>
          <NavLink className='nav-link'  to='/aboutme'>About Me</NavLink>
        </Nav>
        <Route exact path='/' component={Main}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/aboutme' component={AboutMe}/>
       </BrowserRouter>  */}
    <Main/>
    <Projects/>
    <AboutMe/>
    </div>
  );
}

export default App;


