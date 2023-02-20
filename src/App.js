import React, { Suspense } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {

  return (
    <Suspense fallback="loading" >
      <NavBar/>  
      <Home/>
      <About/>
      <Skills/>
      // <Work/>
      <Contact/>
    </Suspense>
  );
}

export default App;
