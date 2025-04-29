

import React, { useEffect, useState } from 'react';
import { admincourselist } from '../../services/Admin/courselist';
import cyber from "../../images/ctbersecurity.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {adminremovecourse} from "../../services/Admin/courselist"

function Courselist() {
  const [courselist, setCourselist] = useState([]);
  

  const removecourse =(id)=>{
    const res = adminremovecourse(id);
     if(res.status == 200){
      alert('course deleted');
     }
  }
  
  useEffect(() => {
    const fetchcourselist = async () => {
      const res = await admincourselist();
      console.log(res);
      if (res.plainCourseList) {
        setCourselist(res.plainCourseList);
      } else {
        console.error("plainCourseList is undefined");
      }
    };
    fetchcourselist();
 
    
  }, [courselist]);

  return (
    <div className="container mx-auto mt-3 ">
    
      <div className="hidden bg-blue-300 sm:grid sm:grid-cols-5 font-bold text-center border-b-2 pb-2">
        <p>S No.</p>
        <p>Image</p>
        <p>Title</p>
        <p>Status</p>
        <p>Action</p>
      </div>
    
      <div className='pt-6'>
      {courselist.map((course, index) => (
        <div key={index} className="grid grid-cols-1 gap-y-2 sm:grid-cols-5 text-center py-2 border-b">
          <div className='text-start sm:text-center font-bold'><p>{index + 1}.</p></div>
           <div className="w-full sm:h-[50px] sm:w-[60px] mx-auto flex  gap-x-2 ">
            <img src={cyber} alt="Course" className="h-[50px] w-[60px] sm:h-full sm:w-full object-cover" />
            <p className='text-start sm:hidden '>{course.title}</p>
          </div>
          <div className='hidden sm:block'><p>{course.title}</p></div>
            
          <div className='text-start sm:text-center'><p>{course.status}</p></div>
          <div className='text-end sm:text-center'>
            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer text-red-500"
              onClick={()=>{removecourse(course._id)}}
            />
          </div>
         
        </div>
      ))}
    </div>
    </div>
  );
}

export default Courselist;
