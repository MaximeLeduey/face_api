import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Data from './pages/Data';
import Webcam from './pages/Webcam';
import InProgress from './pages/InProgress';
import End from './pages/End';
import './assets/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
   <div className='site-wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/webcam' element={<Webcam />} />
        <Route path='/inProgress' element={<InProgress />} />
        <Route path='/end' element={<End />} />
        <Route path='/data' element={<Data/>} />
      </Routes>
      <Footer />
   </div>
  )
}

export default App;
