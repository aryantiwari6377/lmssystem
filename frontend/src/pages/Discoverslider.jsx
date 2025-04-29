
import React from 'react';

import It from '../images/itimg.PNG';
import health from '../images/healthimg.PNG';
import language from '../images/languageimg.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import business from '../images/businessimg.PNG';
import management from '../images/managementimg.PNG';

function Discoverslider({discoverOpen,toggleDiscover}) {

          
  return (
    <div className={`fixed top-24  right-0 transform ${discoverOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-full h-full bg-white shadow-lg z-50 overflow-y-auto pt-10`}>
             <div className='flex justify-between px-4'>
                <div className='flex font-bold gap-x-3 text-[16px]'> <FontAwesomeIcon icon={faArrowLeft} onClick={toggleDiscover}/><p>Explore Careers</p></div>
                <div className='text-green-700 text-sm font-semibold'>View All Categories</div>
             </div>
             <ul className='p-8 pt-12 flex flex-col gap-y-6'>
                <li className='flex gap-x-4'>
                    <img src={It} className='w-8 h-8'/>
                    <div className='text-sm'><p className='font-semibold'>Health Science</p><p>(1,149 Courses)</p></div>
                    <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
                <li className='flex gap-x-4'>
                <img src={ health} className='w-8 h-8'/>
                <div className='text-sm'><p className='font-semibold'>Finance</p><p>(1,112 Courses)</p></div>
                <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
                <li className='flex gap-x-4'>
                <img src={language} className='w-8 h-8'/>
                <div className='text-sm'><p className='font-semibold'>Information Technology</p><p>(410 Courses)</p></div>
                <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
                <li className='flex gap-x-4'>
                <img src={business} className='w-8 h-8'/>
                <div className='text-sm'><p className='font-semibold'>Business Management Administration</p><p>(702 Courses)</p></div>
                <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
                <li className='flex gap-x-4'>
                <img src={management} className='w-8 h-8'/>
                <div className='text-sm'><p className='font-semibold'>Marketing & Sales</p><p>(506 Courses)</p></div>
                <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
                  
                <li className='flex gap-x-4'>
                <img src={management} className='w-8 h-8'/>
                <div className='text-sm'><p className='font-semibold'>Hospitality & Tourism</p><p>(506 Courses)</p></div>
                <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
                <li className='flex gap-x-4'>
                <img src={management} className='w-8 h-8'/>
                <div className='text-sm'><p className='font-semibold'>management</p><p>(506 Courses)</p></div>
                <span className='absolute right-5 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-transform rotate-[-45deg] '></span>
                </li>
               
             
             </ul>
    </div>
  )
}


export default Discoverslider