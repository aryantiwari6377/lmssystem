import React from 'react'
import Navbar from './Navbar';
import Catnavbar from './Catnavbar';
import Ratedpage from '../pages/Ratedpage';
import Learnpage from '../pages/Learnpage';
import Courses from '../pages/Courses';
import Faq from '../pages/Faq';
import Footer from './Footer';

function Home() {
  return (
    <div>
         {/* <Navbar /> */}
      <Catnavbar />
      <Learnpage />
      <Ratedpage />
      <Courses />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
