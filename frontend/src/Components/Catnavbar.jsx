
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSchool, faBriefcase, faCoins} from '@fortawesome/free-solid-svg-icons';
// import { faLeanpub } from '@fortawesome/free-brands-svg-icons'; 
// import { useState } from 'react';

// function Catnavbar() {
  
//   return (
//     <div className='mt-20 '>
//         <nav className='flex rounded-md h-[30px] bg-[rgb(243,246,247)] justify-between w-[80%] ml-[10%] md:w-[50%] md:ml-[25%] md:h-[40px] md:rounded-full text-sm lg:text-lg pr-6'>
//             <div className='w-[120px] lg:w-[220px] bg-[rgb(0,155,93)] w-[80px] text-white rounded-2xl flex gap-x-2 justify-center items-center text-[17px]'><FontAwesomeIcon icon={faLeanpub} />
//                <p className='cursor-pointer'><a href={"/"}>Learn<span className='hidden lg:inline-block'>& Get Certificates</span></a></p> </div>
//             <div className='flex gap-x-2 pt-1 flex items-center text-[17px]'><FontAwesomeIcon icon={ faBriefcase} /><p><a href={"/careerPage"}><span className='hidden lg:inline-block'>Build Your</span>Career</a></p></div>
//             <div className='flex gap-x-2 pt-1 flex items-center text-[17px]'> <FontAwesomeIcon icon={faCoins} /><p><a href={"/earnPage"}>Earn <span className='hidden lg:inline-block'>On Alison</span></a></p></div>
          
//         </nav>
//     </div>
//   )
 
// }

// export default Catnavbar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Catnavbar() {
  const [activeOption, setActiveOption] = useState('learn');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="mt-20">
      <nav className="flex rounded-md h-[30px] bg-[rgb(243,246,247)] justify-between w-[80%] ml-[10%] md:w-[50%] md:ml-[25%] md:h-[40px] md:rounded-full text-sm lg:text-lg pr-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-[120px] lg:w-[220px] ${
              isActive ? 'bg-[rgb(0,155,93)] text-white' : 'bg-transparent text-black'
            } rounded-2xl flex gap-x-2 justify-center items-center text-[17px] cursor-pointer`
          }
          onClick={() => handleOptionClick('learn')}
        >
          <FontAwesomeIcon icon={faLeanpub} />
          <p>
            Learn<span className="hidden lg:inline-block"> & Get Certificates</span>
          </p>
        </NavLink>
        <NavLink
          to="/careerPage"
          className={({ isActive }) =>
            `flex gap-x-2 pt-1 px-2 rounded-2xl items-center text-[17px] cursor-pointer ${
              isActive ? 'bg-[rgb(0,155,93)] text-white' : 'bg-transparent text-black'
            }`
          }
          onClick={() => handleOptionClick('career')}
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <p>
            <span className="hidden lg:inline-block">Build Your</span> Career
          </p>
        </NavLink>
        <NavLink
          to="/earnPage"
          className={({ isActive }) =>
            `flex gap-x-2 pt-1 px-2 rounded-2xl items-center text-[17px] cursor-pointer ${
              isActive ? 'bg-[rgb(0,155,93)] text-white' : 'bg-transparent text-black'
            }`
          }
          onClick={() => handleOptionClick('earn')}
        >
          <FontAwesomeIcon icon={faCoins} />
          <p>
            Earn <span className="hidden lg:inline-block">On Alison</span>
          </p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Catnavbar;
