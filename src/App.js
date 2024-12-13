
import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Landing from './components/Landing';
import HeaderModule from './components/HeaderModule';
function App() {
  const Home = () => {
    return <h1 className='mt-5 text-center'>Home Page</h1>;
  }

  const About = () => {
    return <h1 className='mt-5 text-center'>About Page</h1>;
  }


  const Connections = () => {
    return <h1 className='mt-5 text-center'>Connections Page</h1>;
  }


  const Media = () => {
    return <h1 className='mt-5 text-center'>Media Page</h1>;
  }

  const Videos = () => {
    return <h1 className='mt-5 text-center'>Videos Page</h1>;
  }

  const Events = () => {
    return <h1 className='mt-5 text-center'>Events Page</h1>;
  }

  const Activity = () => {
    return <h1 className='mt-5 text-center'>Activity Page</h1>;
  }





  return (
    <div className="">
      <Router>

        <HeaderModule />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/media" element={<Media />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/events" element={<Events />} />
          <Route path="/activity" element={<Activity />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
