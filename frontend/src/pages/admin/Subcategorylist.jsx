// import React from 'react'
// import { adminuserlist} from "../../services/Admin/userlist"
// import { useEffect, useState } from 'react';


// function Userlist() {
//   const [userlist, setUserlist] = useState([]);

//   useEffect(() => {
//     const fetchuserlist = async () => {
//       const res = await adminuserlist();
//       console.log(res);
//       if (res) {
//         setUserlist(res.users);
//       } else {
//         console.error("plainCourseList is undefined");
//       }
//     };
//     fetchuserlist();
//   }, []);


//   return (
//     <div className=''>
//       <div className='flex justify-around w-[520px] font-bold'><p>S No.</p><p>Name</p><p>Email</p></div>
        
//           {userlist.map((user,index)=>(
//                 <div key={index} className='flex justify-around'>
//                    <p>{index + 1}</p>
//                    <p>{user.name}</p>
//                    <p>{user.email}</p>
//                    <button>Block user</button>
//                 </div>
//           ))}
//     </div>
//   )
// }

// export default Userlist


// import React, { useEffect, useState } from 'react';
// import { adminuserlist } from "../../services/Admin/userlist";

// function Userlist() {
//   const [userlist, setUserlist] = useState([]);

//   useEffect(() => {
//     const fetchuserlist = async () => {
//       const res = await adminuserlist();
//       console.log(res);
//       if (res && res.users) {
//         setUserlist(res.users);
//       } else {
//         console.error("Users list is undefined");
//       }
//     };
//     fetchuserlist();
//   }, []);

//   return (
//     <div className="container mx-auto">
//       {/* Table Header */}
//       <div className="grid grid-cols-4 font-bold text-center border-b-2 pb-2">
//         <p>S No.</p>
//         <p>Name</p>
//         <p>Email</p>
//         <p>Action</p>
//       </div>

//       {/* Table Content */}
//       {userlist.map((user, index) => (
//         <div key={index} className="grid grid-cols-4 text-center py-2 border-b">
//           <div><p>{index + 1}</p></div>
//           <div><p>{user.name}</p></div>
//           <div><p>{user.email}</p></div>
//           <div>
//             <button 
//               className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//               onClick={() => console.log(`Block user: ${user.name}`)}
//             >
//               Block User
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Userlist;


// import React, { useEffect, useState } from 'react';
// import { adminuserlist } from "../../services/Admin/userlist";
// import userimg from "../../images/userimg.jpg";

// function Userlist() {
//   const [userlist, setUserlist] = useState([]);

//   useEffect(() => {
//     const fetchuserlist = async () => {
//       const res = await adminuserlist();
//       console.log(res);
//       if (res && res.users) {
//         setUserlist(res.users);
//       } else {
//         console.error("Users list is undefined");
//       }
//     };
//     fetchuserlist();
//   }, []);

//   return (
//     <div className="container mx-auto">
//       {/* Table Header */}
//       <div className="grid grid-cols-5 font-bold text-center border-b-2 pb-2">
//         <p>S No.</p>
//         <p>Image</p>
//         <p>Name</p>
//         <p>Email</p>
//         <p>Action</p>
//       </div>

//       {/* Table Content */}
//       {userlist.map((user, index) => (
//         <div key={index} className="grid grid-cols-5 text-center py-2 border-b items-center">
//           <div><p>{index + 1}</p></div>
//           <div>
//             <img 
//               src={user.image || userimg} 
//               alt={`${user.name}'s profile`}
//               className="h-12 w-12 rounded-full object-cover mx-auto"
//             />
//           </div>
//           <div><p>{user.name}</p></div>
//           <div><p>{user.email}</p></div>
//           <div>
//             <button 
//               className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//               onClick={() => console.log(`Block user: ${user.name}`)}
//             >
//               Block User
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Userlist;

// import React, { useEffect, useState } from 'react';
// import { adminuserlist } from "../../services/Admin/userlist";
// import userimg from "../../images/userimg.jpg";

// function Userlist() {
//   const [userlist, setUserlist] = useState([]);

//   useEffect(() => {
//     const fetchuserlist = async () => {
//       const res = await adminuserlist();
//       console.log(res);
//       if (res && res.users) {
//         setUserlist(res.users);
//       } else {
//         console.error("Users list is undefined");
//       }
//     };
//     fetchuserlist();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Table Header */}
//       <div className="grid grid-cols-4 font-bold text-center border-b-2 pb-2 mb-4 ">
//         <p>S No.</p>
//         <p>Name</p>
//         <p>Email</p>
//         <p>Action</p>
//       </div>

//       {/* Table Content */}
//       {userlist.map((user, index) => (
//         <div 
//           key={index} 
//           className="grid grid-cols-4 text-center py-2 border-b items-center bg-white hover:bg-gray-50 transition-all"
//         >
//           <div>
//             <p className="font-semibold">{index + 1}</p>
//           </div>
//           <div className="flex items-center space-x-5 justify-start pl-6">
//             <img 
//               src={user.image || userimg} 
//               alt={`${user.name}'s profile`} 
//               className="h-10 w-10 rounded-full object-cover border"
//             />
//             <p className="text-gray-700">{user.name}</p>
//           </div>
//           <div>
//             <p className="text-gray-600 ">{user.email}</p>
//           </div>
//           <div>
//             <button 
//               className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-all"
//               onClick={() => console.log(`Block user: ${user.name}`)}
//             >
//               Block
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Userlist;

import React, { useEffect, useState } from 'react';
import { adminsubcategorylist } from "../../services/Admin/subcategorylist";

function Subcategorylist() {
  const [subcategory, setSubcategorylist] = useState([]);

  useEffect(() => {
    const fetchSubcategoryList = async () => {
      const res = await adminsubcategorylist();
      console.log(res);
      if (res && res.subcategoryList) {
        setSubcategorylist(res.subcategoryList);
      } else {
        console.error("Subcategory list is undefined");
      }
    };
    fetchSubcategoryList();
  }, []);

  return (
    <div className="container mx-auto sm:p-4">
  
      <div className="grid grid-cols-2 font-bold text-center border-b-2 pb-2 mb-4">
        <p>Category</p>
        <p>Subcategory</p>
      </div>

      {/* Table Content */}
      {subcategory.map((category, index) => (
        <div 
          key={index} 
          className="grid grid-cols-2 text-center py-2 border-b items-center bg-white hover:bg-gray-50 transition-all"
        >
          <p className="font-semibold">{category.category}</p>
          {/* <p className="text-gray-700">{category.subcategory}</p> */}
          <p className="text-gray-700 text-start">
      {Array.isArray(category.subcategory)
        ? category.subcategory.join(", ") 
        : category.subcategory} 
    </p>
        </div>
      ))}
    </div>
  );
}

export default Subcategorylist;
