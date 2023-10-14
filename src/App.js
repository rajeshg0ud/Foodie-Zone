import React from 'react'
import TopNav from './components/TopNav';
import Featured from './components/Featured';
import Delivery from './components/Delivery';
import TopPicks from './components/TopPicks';
import Food from './components/Food';
import Footer from './components/Footer';
import './index.css'; 

const App = () => {
  return (
    <div>
      <TopNav />
      <TopPicks />
      <Featured />
      <Food />
      <Delivery />
      <Footer />
    </div>
  )
}

export default App
