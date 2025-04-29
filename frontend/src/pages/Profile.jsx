

// import React, { useEffect, useState, useRef } from 'react';
// import user from '../images/userimg.jpg';
// import { Link, useNavigate } from 'react-router-dom';
// import { logoutfun } from '../services/logoutfun';
// import { profiledata } from '../services/profile';
// import { profileimageService } from '../services/editProfile';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// function Profile() {
//   const [userdetail, setUserDetail] = useState({});
//   const [logoutbut, setLogoutbut] = useState(false);
//   const [profileImg, setProfileImg] = useState();
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);

//   // Open file input when icon clicked
//   const handleEditClick = () => {
//     fileInputRef.current.click();
//   };
 
//   // Handle file selection and upload
//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64 = reader.result;
//         const response = await profileimageService(base64);
//         // Refresh profile data after image update
    
//         if (!response.error) {
//           setProfileImg(response.data.user.image);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const logouthandle = async () => {
//     const response = await logoutfun();
//     if (response.status === 200) {
//       setLogoutbut(true);
//       navigate("/login");
//     }
//   };
  
//   const fetchUserData = async () => {
//     try {
//       const response = await profiledata();
//       if (response && response.user) {
//         setUserDetail(response.user);
//       }
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//     }
//   };
  
//   useEffect(() => {
//     fetchUserData();
//   }, []);
  
//   return (
//     <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-6 z-0">
//       {/* Profile Header Section */}
//       <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
//         <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
//           {/* Profile Image Section */}
//           <div className="relative mb-4 md:mb-0">
//             <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
//               <img 
//                 src={userdetail.image || user} 
//                 alt="Profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer" onClick={handleEditClick}>
//               <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               accept="image/*"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>
          
//           {/* User Details Section */}
//           <div className="flex flex-col items-center md:items-start flex-grow">
//             <h1 className="text-2xl font-bold text-gray-800">{userdetail.name || 'User Name'}</h1>
//             <p className="text-red-400 mb-2">{userdetail.email || 'user@example.com'}</p>
            
//             <button 
//               onClick={logouthandle}
//               className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center"
//             >
//               <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Profile Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <Link to="/enrollcourselist" className="no-underline">
//           <div className="bg-indigo-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md">
//             <h3 className="text-lg font-medium text-gray-800">Enrolled Courses</h3>
//             <p className="text-sm text-gray-600 mt-1">View all your courses</p>
//           </div>
//         </Link>
        
//         <Link to="/scoretable" className="no-underline">
//           <div className="bg-indigo-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md">
//             <h3 className="text-lg font-medium text-gray-800">Test Scores</h3>
//             <p className="text-sm text-gray-600 mt-1">Check your performance</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Profile;




// import React, { useEffect, useState, useRef } from 'react';
// import user from '../images/userimg.jpg';
// import { Link, useNavigate } from 'react-router-dom';
// import { logoutfun } from '../services/logoutfun';
// import { profiledata } from '../services/profile';
// import { profileimageService } from '../services/editProfile';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProfileImage } from '../Redux/Slices/ProfileSlice'; // Assume this action exists

// function Profile() {
//   const dispatch = useDispatch();
//   const storedProfileImg = useSelector(state => state.user.profileImage);
  
//   const [userdetail, setUserDetail] = useState({});
//   const [profileImg, setProfileImg] = useState(storedProfileImg || null);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);

//   // Open file input when icon clicked
//   const handleEditClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       try {
//         // Set temporary preview immediately for better UX
//         const previewUrl = URL.createObjectURL(file);
//         setProfileImg(previewUrl);
//         // Store preview in Redux for immediate access across components
//         dispatch(setProfileImage(previewUrl));
        
//         // Now process the file and upload to server
//         const reader = new FileReader();
//         reader.onloadend = async () => {
//           const base64 = reader.result;
//           setIsLoading(true);
//           const response = await profileimageService(base64);
          
//           if (response && !response.error && response.data && response.data.user) {
//             // Update the user details with the response data
//             setUserDetail(response.data.user);
            
//             // Make sure to update profile image from the response
//             if (response.data.user.image) {
//               const permanentImageUrl = response.data.user.image;
//               setProfileImg(permanentImageUrl);
//               // Store in Redux for immediate access in other components
//               dispatch(setProfileImage(permanentImageUrl));
//               // Also store in localStorage as fallback for page refreshes
//               localStorage.setItem('profileImg', permanentImageUrl);
              
//               // If we created a blob URL earlier, revoke it to prevent memory leaks
//               if (previewUrl && previewUrl.startsWith('blob:')) {
//                 URL.revokeObjectURL(previewUrl);
//               }
//             }
//           }
//           setIsLoading(false);
//         };
//         reader.readAsDataURL(file);
//       } catch (error) {
//         console.error('Error processing image:', error);
//         setIsLoading(false);
//       }
//     }
//   };
  
//   const fetchUserData = async () => {
//     try {
//       setIsLoading(true);
//       const response = await profiledata();
//       if (response && response.user) {
//         setUserDetail(response.user);
//         // Only update profile image if it exists in the response
//         if (response.user.image) {
//           const imageUrl = response.user.image;
//           setProfileImg(imageUrl);
//           // Store in Redux for immediate access in other components
//           dispatch(setProfileImage(imageUrl));
//           // Also store in localStorage as fallback
//           localStorage.setItem('profileImg', imageUrl);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   useEffect(() => {
//     // If we have the image in Redux, use it immediately
//     if (storedProfileImg) {
//       setProfileImg(storedProfileImg);
//       setIsLoading(false); // No need to show loading if we have the image
//     } 
//     // If not in Redux but in localStorage, use that
//     else if (localStorage.getItem('profileImg')) {
//       const savedImg = localStorage.getItem('profileImg');
//       setProfileImg(savedImg);
//       dispatch(setProfileImage(savedImg)); // Also update Redux
//     }
    
//     // Always fetch the latest data from API
//     fetchUserData();
    
//     // Cleanup function
//     return () => {
//       // Clean up any blob URLs
//       if (profileImg && profileImg.startsWith('blob:')) {
//         URL.revokeObjectURL(profileImg);
//       }
//     };
//   }, [dispatch, storedProfileImg]);
  
//   // Log out function
//   const logouthandle = async () => {
//     const response = await logoutfun();
//     if (response.status === 200) {
//       // Clear the profile image on logout
//       localStorage.removeItem('profileImg');
//       dispatch(setProfileImage(null));
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-6 mt-16 z-0">
//       {/* Profile Header Section */}
//       <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
//         <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
//           {/* Profile Image Section */}
//           <div className="relative mb-4 md:mb-0">
//             <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
//               {isLoading && !profileImg ? (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-200">
//                   <span className="text-gray-400">Loading...</span>
//                 </div>
//               ) : (
//                 <img
//                   src={profileImg || (userdetail.image || user)}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     console.log("Image load error, falling back to default");
//                     e.target.src = user;
//                     // Clear invalid images from storage
//                     if (localStorage.getItem('profileImg') === profileImg) {
//                       localStorage.removeItem('profileImg');
//                     }
//                     if (storedProfileImg === profileImg) {
//                       dispatch(setProfileImage(null));
//                     }
//                     setProfileImg(null);
//                   }}
//                 />
//               )}
//             </div>
//             <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer" onClick={handleEditClick}>
//               <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               accept="image/*"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>
          
//           {/* User Details Section */}
//           <div className="flex flex-col items-center md:items-start flex-grow">
//             <h1 className="text-2xl font-bold text-gray-800">{userdetail.name || 'User Name'}</h1>
//             <p className="text-red-400 mb-2">{userdetail.email || 'user@example.com'}</p>
            
//             <button 
//               onClick={logouthandle}
//               className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center"
//             >
//               <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Profile Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <Link to="/enrollcourselist" className="no-underline">
//           <div className="bg-indigo-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md">
//             <h3 className="text-lg font-medium text-gray-800">Enrolled Courses</h3>
//             <p className="text-sm text-gray-600 mt-1">View all your courses</p>
//           </div>
//         </Link>
        
//         <Link to="/scoretable" className="no-underline">
//           <div className="bg-indigo-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md">
//             <h3 className="text-lg font-medium text-gray-800">Test Scores</h3>
//             <p className="text-sm text-gray-600 mt-1">Check your performance</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Profile;



import React, { useEffect, useState, useRef } from 'react';
import user from '../images/userimg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { logoutfun } from '../services/logoutfun';
import { profiledata } from '../services/profile';
import { profileimageService } from '../services/editProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage, setUserDetails } from '../Redux/Slices/ProfileSlice';

function Profile() {
  const dispatch = useDispatch();
  const storedProfileImg = useSelector(state => state.user.profileImage);
  const storedUserDetails = useSelector(state => state.user.userDetails);
  
  const [userdetail, setUserDetail] = useState(storedUserDetails || {});
  const [profileImg, setProfileImg] = useState(storedProfileImg || null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Open file input when icon clicked
  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        // Set temporary preview immediately for better UX
        const previewUrl = URL.createObjectURL(file);
        setProfileImg(previewUrl);
        dispatch(setProfileImage(previewUrl));
        
        // Process the file and upload to server
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = reader.result;
          setIsLoading(true);
          const response = await profileimageService(base64);
          
          if (response && !response.error && response.data && response.data.user) {
            const userData = response.data.user;
            
            // Update both local state and Redux store
            setUserDetail(userData);
            dispatch(setUserDetails(userData));
            
            if (userData.image) {
              const permanentImageUrl = userData.image;
              setProfileImg(permanentImageUrl);
              dispatch(setProfileImage(permanentImageUrl));
              localStorage.setItem('profileImg', permanentImageUrl);
              localStorage.setItem('userDetails', JSON.stringify(userData));
              
              // Revoke any temporary blob URL to prevent memory leaks
              if (previewUrl && previewUrl.startsWith('blob:')) {
                URL.revokeObjectURL(previewUrl);
              }
            }
          }
          setIsLoading(false);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Error processing image:', error);
        setIsLoading(false);
      }
    }
  };
  
  const fetchUserData = async () => {
    try {
      const response = await profiledata();
      if (response && response.user) {
        const userData = response.user;
        
        // Update both local state and Redux store
        setUserDetail(userData);
        dispatch(setUserDetails(userData));
        
        if (userData.image) {
          const imageUrl = userData.image;
          setProfileImg(imageUrl);
          dispatch(setProfileImage(imageUrl));
         localStorage.setItem("name",userData.name);
         localStorage.setItem("email",userData.email);
        }
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
   useEffect(() => {
    // First priority: Use data from Redux if available
    if (storedUserDetails && Object.keys(storedUserDetails).length > 0) {
      setUserDetail(storedUserDetails);
      if (storedProfileImg) {
        setProfileImg(storedProfileImg);
      }
      setIsLoading(false);
    } 
    // Second priority: Check localStorage for persisted data
    else {
      const savedUserDetails = localStorage.getItem('userDetails');
      const savedImg = localStorage.getItem('profileImg');
      
      if (savedUserDetails) {
        try {
          const parsedDetails = JSON.parse(savedUserDetails);
          setUserDetail(parsedDetails);
          dispatch(setUserDetails(parsedDetails));
        } catch (e) {
          console.error('Error parsing stored user details', e);
        }
      }
      
      if (savedImg) {
        setProfileImg(savedImg);
        dispatch(setProfileImage(savedImg));
      }
    }
    
    // Always fetch fresh data from API to keep things updated
    fetchUserData();
    
    // Cleanup function
    return () => {
      if (profileImg && profileImg.startsWith('blob:')) {
        URL.revokeObjectURL(profileImg);
      }
    };
  }, [dispatch, storedProfileImg, storedUserDetails]);
  
  // Log out function
  
  const logouthandle = async () => {
    const response = await logoutfun();
    if (response.status === 200) {
      // Clear all stored user data
      localStorage.removeItem('profileImg');
      localStorage.removeItem('userDetails');
      dispatch(setProfileImage(null));
      dispatch(setUserDetails({}));
      navigate("/login");
    }
  };

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-6 mt-16 z-0">
      {/* Profile Header Section */}
      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          {/* Profile Image Section */}
          <div className="relative mb-4 md:mb-0">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
              {isLoading && !profileImg ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-400">Loading...</span>
                </div>
              ) : (
                <img
                  src={profileImg || (userdetail.image || user)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log("Image load error, falling back to default");
                    e.target.src = user;
                    // Clear invalid images from storage
                    if (localStorage.getItem('profileImg') === profileImg) {
                      localStorage.removeItem('profileImg');
                    }
                    if (storedProfileImg === profileImg) {
                      dispatch(setProfileImage(null));
                    }
                    setProfileImg(null);
                  }}
                />
              )}
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer" onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          
          {/* User Details Section */}
          <div className="flex flex-col items-center md:items-start flex-grow">
            <h1 className="text-2xl font-bold text-gray-800">{userdetail.name || name}</h1>
            <p className="text-red-400 mb-2">{userdetail.email || email}</p>
            
            <button 
              onClick={logouthandle}
              className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
      
      {/* Profile Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/enrollcourselist" className="no-underline">
          <div className="bg-indigo-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md">
            <h3 className="text-lg font-medium text-gray-800">Enrolled Courses</h3>
            <p className="text-sm text-gray-600 mt-1">View all your courses</p>
          </div>
        </Link>
        
        <Link to="/scoretable" className="no-underline">
          <div className="bg-indigo-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md">
            <h3 className="text-lg font-medium text-gray-800">Test Scores</h3>
            <p className="text-sm text-gray-600 mt-1">Check your performance</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;