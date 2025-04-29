import React, { useEffect, useState } from 'react'

import alisonImage from '../images/alison.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import coursesnav from '../images/coursesnav.PNG';
import careernav from '../images/careernav.PNG';
import aptinav from '../images/aptinav.PNG';
import workplace from '../images/workplacenav.PNG';
import health from '../images/mentalnav.PNG';
import Exploreslider from '../pages/Exploreslider';
import Discoverslider from '../pages/Discoverslider';
import Login from '../pages/Login';
import userimg from '../images/userimg.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({handleExploreCourses}) {
       
    
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [exploreOpen, setExploreOpen] =  useState(false);
      const [discoverOpen, setdiscoverOpen] =  useState(false);
      const [isLoginOpen, setIsLoginOpen] = useState(false);
      const navigate = useNavigate();

    const toggleMobileMenu = () =>{
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const toggleExplore = () =>{
      setExploreOpen(!exploreOpen);
  }

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleDiscover =()=>{
    setdiscoverOpen(!discoverOpen)
  }

  useEffect(()=>{
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';   
    }
   
  },[mobileMenuOpen])


  

  return (

    <div className='w-full pt-10'>
           <nav className='flex  w-full justify-around  text-sm md:text-base'>
           <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl mt-3">
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
              <div className='pt-[26px] md:pt-[10px]'>
              <img src={alisonImage}   alt="Example Image" className='h-6 w-24' />
              </div>
              {/* <div
          className={`absolute md:static top-0 right-0 h-screen md:h-auto w-3/4 md:w-auto bg-white md:bg-transparent p-8 md:p-0 flex flex-col md:flex-row gap-6 transform transition-transform duration-300 ease-in-out 
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
        >
        <div */} 
     
         <div
          className={`absolute z-50 md:static top-[100px] left-0 h-screen md:h-auto w-full md:w-auto bg-white md:bg-transparent p-8 md:p-0 flex flex-col md:flex-row gap-6 transform transition-transform duration-300 ease-in-out 
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
            <li className='flex cursor-pointer' onClick={()=>{navigate('/coursepage')}}><img src={coursesnav}  className='w-[33px] h-[41px]' /> <span className='p-2 ' >Explore Courses</span> <span className='md:hidden absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] ' onClick={toggleExplore}></span> </li>
           
           {/* <li className='flex md:hidden'><img src={careernav} className='w-[33px] h-[41px]'/><span className='p-2'>Discover Careers</span> <span className='md:hidden absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-[-45deg] ' onClick={toggleDiscover}></span></li> */}
           <li className='p-2 hidden md:block'><a href="/">Home</a></li>
           <li className='relative group hidden cursor-pointer  md:block p-2'>
    <span className='hover:font-bold'>More</span>
    
  
    <ul className='absolute hidden group-hover:block  bg-white shadow-lg p-4 space-y-2 w-60'>
     <Link to="/apptitudepage"><li className='flex cursor-pointer'>
        <img src={aptinav} className='w-8 h-10'/>
        <span className='p-3'>Aptitude Test</span>
      </li></Link>
      <Link to="/personality">
      <li className='flex'>
        <img src={workplace} className='w-8 h-10 mt-5'/>
        <span className='pt-4 pl-3 text-start'>Workplace Personality Assessment</span>
      </li>
      </Link>
      <Link to="/adminlogin">
      <li  className='pt-4 pl-12 text-start'>
        Admin
        {/* <span className='pt-4  text-start'>Adminpanel</span> */}
      </li>
      </Link>
    </ul>
  </li>
  <Link to="/apptitudepage"> <li className='flex md:hidden' onClick={toggleMobileMenu}><img src={aptinav}/><span className='p-3'>Aptitude Test</span></li></Link>
  <Link to="/personality">   <li className='flex md:hidden' onClick={toggleMobileMenu}><img src={workplace}/><span className='p-3'>Workplace Personality Assessment</span></li></Link>
            <li className='flex md:hidden'><span className='p-3 font-bold'><a href="/">Home</a></span></li>
            <li className='flex md:hidden'><span className='p-3 font-bold'><a href="/adminlogin">Adminpanel</a></span></li>
           
          </ul>
        </div>
              <div className='flex gap-x-6 pt-[23px] md:pt-[6px]'>
                <button className='text-white bg-[rgb(0,155,93)] w-[74px] h-[30px] rounded-xl font-bold' onClick={toggleLogin} >Login</button>
              </div>
              <div className='w-[68px] h-[60px] md:w-24 md:h-20 px-1' onClick={()=>{navigate("/profile");  }} ><img src={userimg} className='w-full h-full rounded-[50%]'/></div>      
              <Exploreslider exploreOpen={exploreOpen} toggleMobileMenu={toggleMobileMenu} toggleExplore={toggleExplore}/>
              <Discoverslider discoverOpen={discoverOpen} toggleDiscover={toggleDiscover}/>
          
           </nav>
           <Login isLoginOpen={isLoginOpen} toggleLogin={toggleLogin} setIsLoginOpen={setIsLoginOpen}/>
    </div>



// <div className='w-full pt-10'>
// <nav className='flex  w-full justify-around text-base'>
// <div className="md:hidden flex items-center">
// <button onClick={toggleMobileMenu} className="text-xl">
//  <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
// </button>
// </div>
//    <div>
//    <Image src={alisonImage}   alt="Example Image" className='h-6 w-24' />
//    </div>
//    <div>
//      <ul className='flex justify-around gap-x-16'>
//          <li>Explore Courses</li>
//          <li>Discover Careers</li>
//          <li>More</li>
//      </ul>
//    </div>
//    <div className='flex gap-x-6'>
//      <button className='text-[rgb(0,155,93)]'>login</button>
//      <button className='text-white bg-[rgb(0,155,93)] w-[80px] h-[30px] rounded-md'>sign up</button>
//    </div>
// </nav>
// </div>
  )
}
