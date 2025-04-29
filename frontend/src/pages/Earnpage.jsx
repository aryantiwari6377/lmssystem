

import techimg from '../images/techimg.jpg';
import refer from '../images/referimg.jpg';
// import alison from '../images/alison.png';
import alison from '../images/newalison_processed.jpg';
import skill from '../images/showskillcardimg2_processed.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import familyandfriends from '../images/familyandfriends.PNG';
import teachcarrer from '../images/techcareer.PNG';
import creatorcareer from '../images/creatorcareer.PNG';
import member from '../images/member.PNG';
import Earnedesktoparticle from './Earnedesktoparticle';
import Earnmobilearticle from './Earnmobilearticle';
import { useNavigate } from 'react-router-dom';
import Catnavbar from '../Components/Catnavbar';
import Footer from '../Components/Footer';

function Earnpage() {
  const navigate = useNavigate();

  const handlefirst = () =>{
    navigate('/programme');
  }

  return (
    <div>   
                  <Catnavbar/>
        <div className='text-center font-bold pt-10 lg:text-[28px] text-[24px]  '>
                <h2 className='text-[rgb(45,57,65)] text-xl font-semibold'><span className='text-[rgb(0,145,199)] text-xl font-semibold block lg:inline'>Earn Money</span> By Empowering Millions</h2>
            </div>
            <div className='flex flex-col gap-y-10 py-8 items-center  lg:flex-row lg:gap-x-8 lg:ml-[19%]'>
                <div className='flex gap-x-2 shadow-2xl p-2 rounded-[16px] w-[306px] h-[96px]  lg:h-[250px] lg:w-[240px]   lg:flex-col lg:gap-y-4' onClick={handlefirst}>
                    <div className='w-[70px] h-[70px] lg:h-[50%] lg:w-[90%] lg:ml-[5%]'> <img src={techimg} className='h-[100%] w-[100%] lg:w-[60%] lg:h-[80%] rounded-[12px] lg:ml-[20%] lg:mt-[20px]' /></div>
                    <div className='w-[200px] font-bold lg:text-center lg:w-auto flex  items-center lg:text-[15px] lg:p-2' ><p className=''>Affiliates Programme</p> <FontAwesomeIcon icon={faArrowRight} className='lg:hidden' /></div>
                </div>

                <div className='flex gap-x-2 shadow-2xl p-2 rounded-[16px] w-[306px] h-[96px]  lg:h-[250px] lg:w-[240px]  lg:flex-col lg:gap-y-4'>
                    <div className='w-[70px] h-[70px] lg:h-[50%] lg:w-[90%] lg:ml-[5%]'><img src={refer} className='h-[100%] w-[100%] lg:w-[60%] lg:h-[80%] rounded-[12px] lg:ml-[20%] lg:mt-[20px]' /></div>
                    <div className='w-[200px] font-bold lg:text-center lg:w-auto  flex  items-center lg:text-[15px] lg:p-2'><p className=''>Refer Your Friend</p><FontAwesomeIcon icon={faArrowRight} className='lg:hidden'/></div>
                </div>

                <div className='flex gap-x-2 shadow-2xl p-2 rounded-[16px] w-[306px] h-[96px]  lg:h-[250px] lg:w-[240px]  lg:flex-col lg:gap-y-4'> {/*bg-yellow-400 */}
                    <div className='w-[70px] h-[70px] lg:h-[50%] lg:w-[90%] lg:ml-[5%]'><img src={alison} className='h-[100%] w-[100%] lg:w-[100%] lg:h-[80%] rounded-[12px] lg:ml-[0%] lg:mt-[20px]' /></div>
                    <div className='w-[200px] font-bold lg:text-center lg:w-auto  flex  items-center  lg:text-[15px] lg:p-2'><p className=''>Tech On Alison</p><FontAwesomeIcon icon={faArrowRight} className='lg:hidden'/></div>
                </div>

      
             
            </div>
             
             
           {/* <div className=''>
            <div className='w-[92%] mx-[4%]'>
               <h2 className='text-xl font-bold text-center my-5'>Empower Your Friends & Family By Sharing Free Quality Education</h2>
               <Image src={familyandfriends} className='text-center w-[190px] h-[160px] m-auto'/>
               <p className='text-center text-sm my-5'> Refer your friends, family and social network to Alison and earn free Digital Certificates and Digital Diplomas. Refer as many people as you want to - the more you refer, the more rewards you unlock! </p>
               <button className='text-[15px] font-bold text-white bg-[rgb(0,155,93)] py-3 px-5 rounded-md '>Share And Earn Rewards</button>
           </div>
           </div> */}

          <div className="block md:hidden">
    <Earnmobilearticle />
  </div>
  <div className="hidden md:block">
    <Earnedesktoparticle />
  </div>

  <Footer/>
    </div>
  )
}

export default Earnpage