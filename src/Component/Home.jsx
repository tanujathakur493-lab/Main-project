import React from 'react'
import Header from '../Layout/Header';
import Banner from './Banner';
import Shop from '../Pages/Shop';
import About from '../Pages/About';


export const Home = () => {
  return (
    <>

        <Banner/>
           <Shop/>
           <About/>
          
    </>
  )
}
export default Home;
