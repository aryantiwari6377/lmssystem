

import React, { useEffect, useState } from 'react';
import { adminuserlist } from "../../services/Admin/userlist";
import userimg from "../../images/userimg.jpg";
import {blocklist} from "../../services/Admin/blocklist";
import {unblocklist} from "../../services/Admin/blocklist";

function Userlist() {
  const [userlist, setUserlist] = useState([]);
  // const [block, setBlock] = useState(false); 

   const blockfun = async(email)=>{
    try{
          const res = await  blocklist(email);
          if (res.status === 200) {
         
            setUserlist((prev) =>
              prev.map((user) =>
                user.email === email ? { ...user, isblocked: true } : user
              )
            );
          }
        } catch (error) {
          console.error("Error blocking user:", error);
        }
       
   } 

   const unblockfun = async(email)=>{
    try{
    const res = await  unblocklist(email);
    if (res.status === 200) {
         
      setUserlist((prev) =>
        prev.map((user) =>
          user.email === email ? { ...user, isblocked: false } : user
        )
      );
    }
  } catch (error) {
    console.error("Error not block user:", error);
  }
   }
 

  useEffect(() => {
    const fetchuserlist = async () => {
      const res = await adminuserlist(); 
      console.log(res);
      if (res && res.users) {

        const sortedUsers = res.users.sort((a, b) => a.name.localeCompare(b.name));
        setUserlist(sortedUsers);
      } else {
        console.error("Users list is undefined");
      }
    };
    fetchuserlist();
 
  }, []);

  return (
   


    <div className="container mx-auto ">  
   
      <div className="hidden bg-red-300 sm:grid sm:grid-flow-col sm:grid-cols-4 font-bold text-center border-b-2 pb-2 mb-4">
        <p>S No.</p>
        <p>Name</p>
        <p>Email</p>
        <p>Action</p>
      </div>
      
      {userlist.map((user, index) => (
        <div    key={index} >
        <div 
       
          className="grid grid-cols-1 gap-y-2  sm:grid-cols-4 text-center py-2 border-b items-center bg-white hover:bg-gray-50 transition-all "
        >
          <div className='text-start sm:text-center'>
            <p className="font-semibold">{index + 1}.</p>
          </div>
          <div className="flex items-center space-x-2 justify-start sm:pl-6">
            <img 
              src={user.image || userimg} 
              alt={`${user.name}'s profile`} 
              className="h-10 w-10 rounded-full object-cover border"
            />
            <p className="text-gray-700">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-600 text-start sm:text-center">{user.email}</p>
          </div>
          </div>
          <div className=' text-end'>
            <button 
              className={` text-white px-3 py-1 font-bold rounded-full  transition-all ${user.isblocked ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
             onClick={user.isblocked ? ()=>{unblockfun(user.email)} : ()=>{blockfun(user.email)}}>
             {user.isblocked ? "UnBlock" : "Block"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Userlist;
