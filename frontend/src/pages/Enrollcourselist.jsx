import React from 'react'
import { enrolllist } from '../services/getenrolllist';
import { useState, useEffect } from 'react';
import cyber from "../images/ctbersecurity.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate, useNavigate } from 'react-router-dom';
import {unenroll} from '../services/unenroll';

function Enrollcourselist() {
  const [course, setCourse] = useState([]);
  const [enroll,setenroll] = useState(false);
  const navigate = useNavigate();
  const fetchscourse = async () => {
    try {
      const res = await enrolllist();
      console.log("on main page", res);
      if (res.status == 200) {
        setCourse(res.data.courselist);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchscourse();
  }, []);


  const deletecoure = async(id)=>{
    const res = await unenroll(id);
    // console.log(res);
    // if(res.status == 200){
    //    alert("course unenrolled");
    // }
    if(res.status == 200){
        fetchscourse();
    }
  }

  // return (
  //   <div>
  //     <div>
  //       <ul className='flex justify-between'>

  //         <li>Title</li>
  //         <li>status</li>

  //       </ul>

  //     </div>
  //     <div className="flex justify-between">
  //       {course.map((course, index) => (
  //         <div key={index}>
  //           <p>{course.title}</p>
  //           <p>{course.status}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
  // return (
  //   <div className="container mx-auto p-4">
  //     <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
  //     <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
  //       <thead className="bg-gray-100">
  //         <tr>
  //           <th className="py-2 px-4 border-b text-left">Title</th>
  //           <th className="py-2 px-4 border-b text-left">Status</th>
  //           <th className="py-2 px-4 border-b text-left">Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {course.map((course, index) => (
  //           <tr key={index} className="hover:bg-gray-50">
  //             <td className="py-2 px-4 border-b">{course.title}</td>
  //             <td className="py-2 px-4 border-b">{course.status}</td>
  //             <td className="py-2 px-4 border-b">
  //               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
  //                 View Details
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul className="space-y-4">
         
          <li className="flex justify-between font-semibold border-b pb-2 w-[90%]">
            <span className="w-1/6">S.No.</span>
            <span className="w-2/6">Title</span>
            <span className="w-2/6">Status</span>
          </li>


          {course.length === 0 ? (
  <div className="text-center text-gray-500 py-4">
    You are not enrolled in any course.
  </div>
) : (
  course.map((course, index) => (
    <li key={index} className="flex justify-between items-center" onClick={() => { navigate(`/coursepage/${course._id}`) }}>
      <span className="w-1/6">{index + 1}</span>
      <div className='h-[50px] w-[60px]'>
        <img src={cyber} className='rounded-md h-full w-full' />
      </div>
      <span className="w-2/6">{course.title}</span>
      <span className="w-2/6">{course.status}</span>
      <button 
        className="px-2 text-red-600" 
        onClick={(e) => { e.stopPropagation(); deletecoure(course._id); }}
      >
        
        Unenroll
      </button>
    </li>
  ))
)}

        </ul>
      </div>
    </div>
  );
}


export default Enrollcourselist;
