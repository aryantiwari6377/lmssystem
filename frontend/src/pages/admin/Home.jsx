import React, { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faQuestion, faUser, faBookOpen, faCircleQuestion, faPlus, faThList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Addcourse from './Addcourse';
import Addsubcategory from './Addsubcategory';
import Courselist from './Courselist';
import Userlist from './Userlist';
import Addquestion from './Addquestion';
import Comon from './Comon';
import Subcategorylist from './Subcategorylist';

function Home() {
  const [active, setActive] = useState("home"); 

  return (
    <div className=''>
      <div className='flex'>

        <div className='w-[30%] md:w-[200px] h-screen text-[15px] text-[rgb(100,100,100)] px-4 pt-6 flex flex-col gap-y-5 border-r-[1px] border-gray-300'>
          <div className='w-full md:w-[140px] mx-auto text-start flex flex-col'>
            <h3>MAIN</h3>
            <ul className='text-[15px] mt-3 text-end md:text-start'>
             
                <li className="cursor-pointer" onClick={() => setActive('home')}>
                  <FontAwesomeIcon icon={faTableColumns} className="mr-2 text-purple-600" />
                  <span className='hidden sm:inline'>Dashboard</span>
                </li>
             
            </ul>
          </div>

          <div className='w-full md:w-[140px]  mx-auto text-start flex flex-col gap-y-4'>
            <h3>LIST</h3>
            <ul className='flex flex-col gap-y-2 text-[15px] text-end sm:text-start'>
              <li  className="cursor-pointer" onClick={() => setActive('user')}>
                <FontAwesomeIcon icon={faUser} className="mr-2 text-purple-600" />
                <span className='hidden sm:inline'> Users</span>
              </li>
              <li  className="cursor-pointer" onClick={() => setActive('course')}>
                <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-purple-600" />
                <span className='hidden sm:inline'> Courses</span>
              </li>
              <li  className="cursor-pointer" onClick={() => setActive('subcategorylist')}>
                <FontAwesomeIcon icon={faThList} className="mr-2 text-purple-600" />
                <span className='hidden sm:inline'> Subcategorys</span>
              </li>
            </ul>
          </div>

          <div className='w-full md:w-[140px] mx-auto text-start flex flex-col gap-y-4'>
            <h3>ADD</h3>
            <ul className='flex flex-col gap-y-2 text-[15px] mt-2 text-end sm:text-start'>
              <li  className="cursor-pointer flex  justify-end gap-x-3 md:gap-0 sm:justify-start" onClick={() => setActive('addcourse')}>
                <FontAwesomeIcon icon={faPlus} className="mr-2 text-purple-600" />
                <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-purple-600  sm:hidden" />
                <span className='hidden sm:inline'> Add Course</span>
              </li>
              <li  className="cursor-pointer flex  justify-end gap-x-3.5 md:gap-0 sm:justify-start" onClick={() => setActive('addsubcategory')}>
                <FontAwesomeIcon icon={faPlus} className="mr-2 text-purple-600" />
                <FontAwesomeIcon icon={faThList} className="mr-2 text-purple-600 sm:hidden" />
                <span className='hidden sm:inline'> Add Subcategory</span>
              </li>
              <li  className="cursor-pointer flex  justify-end gap-x-5 md:gap-0 sm:justify-start" onClick={() => setActive('addtest')}>
                <FontAwesomeIcon icon={faPlus} className="mr-2 text-purple-600" />
                <FontAwesomeIcon icon={faQuestion} className="mr-2 text-purple-600 sm:hidden" />
                <span className='hidden sm:inline'> Add test question</span>
              </li>
            </ul>
          </div>
        </div>


        <div className='pl-3 pr-2 md:p-8 w-full'>
          {active === "addcourse" && <Addcourse />}
          {active === "addsubcategory" && <Addsubcategory />}
          {active === "subcategorylist" && <Subcategorylist />}
          {active === "user" && <Userlist />}
          {active === "addtest" && <Addquestion />}
          {active === "course" && <Courselist />}
          {active === "home" && <Comon />}

        </div>
      </div>
    </div>
  );
}

export default Home;
