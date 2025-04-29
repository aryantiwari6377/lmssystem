

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faUser, faBook } from '@fortawesome/free-solid-svg-icons';
import { adminlist } from '../../services/Admin/adminlist';
import { adminuserlist } from '../../services/Admin/userlist';
import {admincourselist} from '../../services/Admin/courselist';

function Comon() {
  const [users, setUsers] = useState([]); 
  const [userlist,setUserlist] = useState([]);
const [ courselist, setCourselist] = useState([]);

  const adminlistfetch = async () => {
    try {
      const res = await adminlist();
     
      setUsers(res.plainadminList || []);
    } catch (error) {
      console.error('Error fetching admin list:', error);
    }
  };
  
  useEffect(() => {
    const fetchuserlist = async () => {
      try {
        const res = await adminuserlist();
    
        if (res && res.users) {
          setUserlist(res.users);
        } 
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };
    fetchuserlist();
  }, []);
  
  
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

  useEffect(() => {
    adminlistfetch();
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="mb-6">
        <h2 className="font-bold text-xl mb-4">Admin</h2>

     
        <div className="hidden sm:grid bg-red-300 grid-cols-3 gap-4 font-semibold text-center mb-2">
          <p>SNo.</p>
          <p>Name</p>
          <p>Email</p>
        </div>

  
        <ul className="space-y-4 bg-gray-300">
          {users.length > 0 ? (
            users.map((user, index) => (
              <li
                key={user.id || index}
                className="grid grid-cols-1 text-start sm:grid-cols-3 gap-4 items-center rounded-lg  p-2 shadow-md"
              >
                <span className="sm:text-center font-bold">{index + 1}.</span>
                <span className="sm:text-center">{user.name}</span>
                <span className="sm:text-center">{user.email}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No admins available</li>
          )}
        </ul>
      </div>

   
      <div className="flex flex-col gap-y-3 sm:flex-row justify-around">
        <div className="shadow-2xl sm:w-[35%] h-32">
          <h2 className="text-sm font-bold text-gray mt-2">Total Users</h2>
          <div className="flex justify-around items-center mt-3">
            <p className="text-2xl">{userlist.length}</p>
            <FontAwesomeIcon icon={faUser} className="pt-[3px] text-4xl" />
          </div>
        </div>
        <div className="shadow-2xl sm:w-[35%] h-32">
          <h2 className="text-sm font-bold text-gray mt-2">Total Course</h2>
          <div className="flex justify-around items-center mt-3">
            <p className="text-2xl">{courselist.length}</p>
            <FontAwesomeIcon icon={faBook} className="pt-[3px] text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comon;
