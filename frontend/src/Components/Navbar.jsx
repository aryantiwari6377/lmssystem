

// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import alisonImage from '../images/alison.png'
// import userimg from '../images/userimg.jpg'
// import coursesnav from '../images/coursesnav.PNG'
// import careernav from '../images/careernav.PNG'
// import aptinav from '../images/aptinav.PNG'
// import workplace from '../images/workplacenav.PNG'
// import health from '../images/mentalnav.PNG'
// import lmslogo from '../images/lmslogo.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faHome, faUser, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

// import Exploreslider from '../pages/Exploreslider'
// import Discoverslider from '../pages/Discoverslider'
// import Login from '../pages/Login'

// export default function Navbar({ handleExploreCourses }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [exploreOpen, setExploreOpen] = useState(false)
//   const [discoverOpen, setdiscoverOpen] = useState(false)
//   const [isLoginOpen, setIsLoginOpen] = useState(false)
//   const navigate = useNavigate()

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//   }

//   const toggleExplore = () => {
//     setExploreOpen(!exploreOpen)
//   }

//   const toggleLogin = () => {
//     setIsLoginOpen(!isLoginOpen)
//   }

//   const toggleDiscover = () => {
//     setdiscoverOpen(!discoverOpen)
//   }

  
//   const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)
//   // useEffect(() => {
//   //    const handleClickOutside = (event) => { const isDropdownClick = event.target.closest('.more-dropdown-container');
//   //      if (moreDropdownOpen && !isDropdownClick) { setMoreDropdownOpen(false); } };
//   //       document.addEventListener('mousedown', handleClickOutside); return () => { document.removeEventListener('mousedown', handleClickOutside); };
//   //      }, [moreDropdownOpen]);

  
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'auto'
//     }
//   }, [mobileMenuOpen])

//   return (
//     <div className="w-full mb-2 pt-4 md:pt-6 md:px-8 lg:px-12">
       
//       <nav className="flex w-full items-center justify-between md:justify-around md:max-w-7xl md:mx-auto relative">
//         {/* Mobile hamburger button */}
//         <div className="md:hidden flex items-center ml-4">
//           <button onClick={toggleMobileMenu} className="text-xl mt-1">
//             <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="ml-4 md:ml-0 pt-1 md:pt-0">
//           <img src={lmslogo} alt="Alison Logo" className="h-[100px] w-24 md:h-8 md:w-32" />
//         </div>

//         {/* Navigation Links - Mobile (side drawer) & Desktop (horizontal) */}
//         <div
//           className={`absolute z-50 md:static top-[70px] pt-0  left-0 h-screen md:h-auto w-full md:w-auto bg-white md:bg-transparent p-8 md:p-0 flex flex-col md:flex-row gap-6 transform transition-transform duration-300 ease-in-out 
//             ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
//         >
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:items-center">
//             {/* Home link - desktop only */}
//             <li className="hidden md:block">
//               <a href="/" className="text-gray-800 hover:text-green-600 font-medium transition duration-200">Home</a>
//             </li>
            
//             {/* Explore Courses - both mobile and desktop */}
//             <li className="flex cursor-pointer items-center" onClick={() => { navigate('/coursepage') }}>
//               <img src={coursesnav} className="w-[33px] h-[41px] md:w-6 md:h-6 md:mr-2" alt="Courses icon" /> 
//               <span className="p-2 md:p-0 hover:text-green-600 transition duration-200">Explore Courses</span> 
//               <span className='md:hidden absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg]' onClick={toggleExplore}></span>
//             </li>
            
//             {/* Dropdown for More on desktop */}
//             <li className="relative group hidden md:block">
//               <div  className='flex' onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}>
//               <span className="hover:text-green-600 cursor-pointer font-medium transition duration-200">More</span>
//               <div className="ml-1 transition-transform duration-200 h-[14px] mt-2" style={{ transform: moreDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polyline points="6 9 12 15 18 9"></polyline> </svg> </div>
//              </div>
//               <div className={`absolute  ${moreDropdownOpen ? "block" : "hidden"} left-0 top-full mt-2 bg-white shadow-lg rounded-md overflow-hidden w-64 border border-gray-100`}>
//                 <Link to="/apptitudepage" className="flex items-center p-3 hover:bg-gray-50">
//                   <img src={aptinav} className="w-6 h-6 mr-3" alt="Aptitude test icon" />
//                   <span>Aptitude Test</span>
//                 </Link>
//                 <Link to="/personality" className="flex items-center p-3 hover:bg-gray-50">
//                   <img src={workplace} className="w-6 h-6 mr-3" alt="Workplace personality icon" />
//                   <span className='text-start'>Workplace Personality Assessment</span>
//                 </Link>
//                 <Link to="/adminlogin" className="flex p-3 pl-12 hover:bg-gray-50 block">
//                  <span className='text-start'>Admin</span> 
//                 </Link>
//               </div>
//             </li>

//             {/* Mobile-only links */}
//             <Link to="/apptitudepage" className="md:hidden">
//               <li className="flex items-center" onClick={toggleMobileMenu}>
//                 <img src={aptinav} alt="Aptitude icon" className="w-[33px] h-[41px]" />
//                 <span className="p-3">Aptitude Test</span>
//               </li>
//             </Link>
//             <Link to="/personality" className="md:hidden">
//               <li className="flex items-center" onClick={toggleMobileMenu}>
//                 <img src={workplace} alt="Workplace icon" className="w-[33px] h-[41px]" />
//                 <span className="p-3">Workplace Personality Assessment</span>
//               </li>
//             </Link>
//             <li className="flex md:hidden">
//               <span className="p-3 font-bold"><a href="/">Home</a></span>
//             </li>
//             <li className="flex md:hidden">
//               <span className="p-3 font-bold"><a href="/adminlogin">Adminpanel</a></span>
//             </li>
//           </ul>
//         </div>

//         {/* User actions section */}
//         <div className="flex items-center space-x-4 mr-4 md:mr-0">
//           <button 
//             className="text-white bg-[rgb(0,155,93)] px-5 py-1.5 rounded-xl font-medium text-sm hover:bg-[rgb(0,135,83)] transition duration-200"
//             onClick={toggleLogin}
//           >
//             Login
//           </button>
          
//           <div 
//             className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden cursor-pointer border-2 border-gray-200 hover:border-green-500 transition duration-200"
//             onClick={() => { navigate("/profile") }}
//           >
//             <img src={userimg} className="w-full h-full object-cover" alt="User profile" />
//           </div>
//         </div>
//       </nav>

//       {/* Slider components */}
//       <Exploreslider exploreOpen={exploreOpen} toggleMobileMenu={toggleMobileMenu} toggleExplore={toggleExplore} />
//       <Discoverslider discoverOpen={discoverOpen} toggleDiscover={toggleDiscover} />
//       <Login isLoginOpen={isLoginOpen} toggleLogin={toggleLogin} setIsLoginOpen={setIsLoginOpen} />
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import alisonImage from '../images/alison.png'
import userimg from '../images/userimg.jpg'
import coursesnav from '../images/coursesnav.PNG'
import aptinav from '../images/aptinav.PNG'
import workplace from '../images/workplacenav.PNG'
import lmslogo from '../images/lmslogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Exploreslider from '../pages/Exploreslider'
import Discoverslider from '../pages/Discoverslider'
import Login from '../pages/Login'

export default function Navbar({ handleExploreCourses }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [discoverOpen, setdiscoverOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleExplore = () => {
    setExploreOpen(!exploreOpen)
  }

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen)
  }

  const toggleDiscover = () => {
    setdiscoverOpen(!discoverOpen)
  }
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <div className="w-full mb-2 pt-4 md:pt-6 md:px-8 lg:px-12">
       
      <nav className="flex w-full items-center justify-between md:justify-around md:max-w-7xl md:mx-auto relative">
        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center ml-4">
          <button onClick={toggleMobileMenu} className="text-xl mt-1">
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Logo - Fixed with proper sizing */}
        <div className="ml-4 md:ml-0  md:pt-0">
          <img 
            src={alisonImage} 
            alt="Aryan Logo" 
            className="h-8 w-auto md:h-10" 
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute z-50 md:static top-[70px] left-0 h-screen md:h-auto w-full md:w-auto bg-white md:bg-transparent p-8 md:p-0 flex flex-col md:flex-row gap-6 transform transition-transform duration-300 ease-in-out 
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:items-center">
            {/* Home link - desktop only */}
            <li className="hidden md:block">
              <a href="/" className="text-gray-800 hover:text-green-600 font-medium transition duration-200">Home</a>
            </li>
            
            {/* Explore Courses */}
            <li className="flex cursor-pointer items-center" onClick={() => { navigate('/coursepage') }}>
              <img src={coursesnav} className="w-[33px] h-[41px] md:w-6 md:h-6 md:mr-2" alt="Courses icon" /> 
              <span className="p-2 md:p-0 hover:text-green-600 transition duration-200">Explore Courses</span> 
              <span className='md:hidden absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg]' onClick={toggleExplore}></span>
            </li>
            
            {/* More dropdown */}
            <li className="relative group hidden md:block">
              <div className='flex items-center cursor-pointer' onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}>
                <span className="hover:text-green-600 font-medium transition duration-200">More</span>
                <div className="ml-1 transition-transform duration-200" style={{ transform: moreDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
                    <polyline points="6 9 12 15 18 9"></polyline> 
                  </svg> 
                </div>
              </div>
              <div className={`absolute ${moreDropdownOpen ? "block" : "hidden"} left-0 top-full mt-2 bg-white shadow-lg rounded-md overflow-hidden w-64 border border-gray-100`}>
                <Link to="/apptitudepage" className="flex items-center p-3 hover:bg-gray-50">
                  <img src={aptinav} className="w-6 h-6 mr-3" alt="Aptitude test icon" />
                  <span>Aptitude Test</span>
                </Link>
                <Link to="/personality" className="flex items-center p-3 hover:bg-gray-50">
                  <img src={workplace} className="w-6 h-6 mr-3" alt="Workplace personality icon" />
                  <span className='text-start'>Workplace Personality Assessment</span>
                </Link>
                <Link to="/adminlogin" className="flex p-3 pl-12 hover:bg-gray-50 block">
                 <span className='text-start'>Admin</span> 
                </Link>
              </div>
            </li>

            {/* Mobile-only links */}
            <Link to="/apptitudepage" className="md:hidden">
              <li className="flex items-center" onClick={toggleMobileMenu}>
                <img src={aptinav} alt="Aptitude icon" className="w-[33px] h-[41px]" />
                <span className="p-3">Aptitude Test</span>
              </li>
            </Link>
            <Link to="/personality" className="md:hidden">
              <li className="flex items-center" onClick={toggleMobileMenu}>
                <img src={workplace} alt="Workplace icon" className="w-[33px] h-[41px]" />
                <span className="p-3">Workplace Personality Assessment</span>
              </li>
            </Link>
            <li className="flex md:hidden">
              <span className="p-3 font-bold"><a href="/">Home</a></span>
            </li>
            <li className="flex md:hidden">
              <span className="p-3 font-bold"><a href="/adminlogin">Adminpanel</a></span>
            </li>
          </ul>
        </div>

        {/* User actions section */}
        <div className="flex items-center space-x-4 mr-4 md:mr-0">
          <button 
            className="text-white bg-[rgb(0,155,93)] px-5 py-1.5 rounded-xl font-medium text-sm hover:bg-[rgb(0,135,83)] transition duration-200"
            onClick={toggleLogin}
          >
            Login
          </button>
          
          <div 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden cursor-pointer border-2 border-gray-200 hover:border-green-500 transition duration-200"
            onClick={() => { navigate("/profile") }}
          >
            <img src={userimg} className="w-full h-full object-cover" alt="User profile" />
          </div>
        </div>
      </nav>

      {/* Slider components */}
      <Exploreslider exploreOpen={exploreOpen} toggleMobileMenu={toggleMobileMenu} toggleExplore={toggleExplore} />
      <Discoverslider discoverOpen={discoverOpen} toggleDiscover={toggleDiscover} />
      <Login isLoginOpen={isLoginOpen} toggleLogin={toggleLogin} setIsLoginOpen={setIsLoginOpen} />
    </div>
  )
}