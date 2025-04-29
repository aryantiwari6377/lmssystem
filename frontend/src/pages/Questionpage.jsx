// import React, { useState, useEffect } from 'react';
// import { getquestion } from '../services/Questions'; // Adjust import as needed

// function Questionpage({ category }) {
//   const [allQuestions, setQuestions] = useState([]);
//   const [currentpage, setCurrentpage] = useState(1);
//   const [questionnumber, setQuestionnumber] = useState(1);

//   const onepageItems = 5;
//   const lastindex = currentpage * onepageItems;
//   const firstindex = lastindex - onepageItems;
//   const currentitems = allQuestions.slice(firstindex, lastindex);
//   const totalpage = Math.ceil(allQuestions.length/onepageItems);
  



//   const questionHandler = async () => {
//     try {
//       const response = await getquestion(category); // Pass the category
//       console.log(response);
//       setQuestions(response); // Assume response is an array of questions
//     } catch (error) {
//       console.log(error);
//     }
//   };

//  const handleprevpage =() => {
//   if(currentpage > 1){
//   setCurrentpage(currentpage - 1);
//   }
//  };

//  const handlenextpage =() => {
//   if(currentpage < totalpage){
//   setCurrentpage(currentpage + 1);
//   }
// };

//   useEffect(() => {
//     questionHandler();
//   }, [category]); 

//   return (
//     <div className='lg:mt-[400px]'>
//       {allQuestions.length > 0 ? (
//         currentitems.map((question, index) => (
//           <div key={index} className="mb-4 flex flex-col gap-y-6 mt-10 text-sm sm:text-md">
//             <p className='text-start font-bold'>Q{index + 1 + (currentpage - 1) * onepageItems}.{question.quesionstext}</p>
//             <div className='grid grid-cols-2 gap-4'>
//               {question.options.map((option, idx) => (
//                 <div className='flex items-center space-x-2' key={idx}>
//                   <div className='w-8 h-8 rounded-full border border-3 border-gray-500 hover:bg-green-800'></div>
//                   <p className='text-start w-[130px]'>{option.option1 || option.option2 || option.option3 || option.option4}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading questions...</p>
//       )}

//        <button className='text-white text-[14px] w-[70px] p-1 bg-green-600 font-bold rounded-md'>Submit</button>
        
//       <div className='w-24 flex justify-between mx-auto my-10'>
//         <button className='h-8 w-8 bg-sky-700 text-white font-bold' disable={currentpage == 1} onClick={handleprevpage}>{currentpage} </button>
//         <button className='h-8 w-8 bg-sky-700 text-white font-bold' disable={currentpage == totalpage} onClick={handlenextpage}>{currentpage + 1}</button>
//       </div>
//     </div>
//   );
// }

// export default Questionpage;

import React, { useState, useEffect } from 'react';
import { getquestion } from '../services/Questions'; 
import {submitscore} from '../services/submitscore';
import {useNavigate} from 'react-router-dom';

function Questionpage({ category }) {
  const [allQuestions, setQuestions] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({}); 
  const navigate = useNavigate();

  const onepageItems = 5;
  const lastindex = currentpage * onepageItems;
  const firstindex = lastindex - onepageItems;
  const currentitems = allQuestions.slice(firstindex, lastindex);
  const totalpage = Math.ceil(allQuestions.length / onepageItems);

  const questionHandler = async () => {
    try {
      const response = await getquestion(category); 
      console.log(response);
      setQuestions(response); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleprevpage = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
    }
  };

  const handlenextpage = () => {
    if (currentpage < totalpage) {
      setCurrentpage(currentpage + 1);
    }
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
  
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionIndex]: optionIndex
    }));
  };

  const handlescore = async() =>{
       const response = await submitscore(category , selectedOptions);
       console.log(response);
       if(response.status===200){
          console.log(response);
          navigate(`/scorepage/${category}`);
         
       }

  }

  useEffect(() => {
    questionHandler();
  }, [category]);

  useEffect(() => {
    // Clear the selected options when changing the page to avoid selection carry-over
    setSelectedOptions(prevState => {
      const updatedState = {};
      Object.keys(prevState).forEach(key => {
        if (parseInt(key) >= firstindex && parseInt(key) < lastindex) {
          updatedState[key] = prevState[key];
        }
      });
      return updatedState;
    });
  }, [currentpage]);
  

  return (
    <div className='lg:mt-[0px]'>
      {allQuestions.length > 0 ? (
        currentitems.map((question, index) => (
          <div key={index} className="mb-4 flex flex-col gap-y-6 mt-10 text-sm sm:text-md">
            <p className='text-start font-bold'>Q{index + 1 + (currentpage - 1) * onepageItems}. {question.quesionstext}</p>
            <div className='grid grid-cols-2 gap-4'>
              {question.options.map((option, idx) => (
                <div
                  className='flex items-center space-x-2 cursor-pointer'
                  key={idx}
                  onClick={() => handleOptionSelect(index, idx)} 
                >
                  <div
                    className={`w-8 h-8 rounded-full border border-3 ${selectedOptions[index] === idx ? 'border-green-800 bg-green-600' : 'border-gray-500 hover:bg-green-800'}`}
                  ></div>
                  <p className='text-start w-[130px]'>{option.option1 || option.option2 || option.option3 || option.option4}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading questions...</p>
      )}
       { currentpage==totalpage ? (
      <button className='text-white text-[14px] w-[70px] p-1 bg-green-600 font-bold rounded-md mt-6'  onClick={handlescore}>Submit</button>
        ) : null
}
      <div className='w-24 flex justify-between mx-auto my-10'>
        <button className='h-8 w-8 bg-sky-700 text-white font-bold' disabled={currentpage === 1} onClick={handleprevpage}>{currentpage}</button>
        <button className='h-8 w-8 bg-sky-700 text-white font-bold' disabled={currentpage === totalpage} onClick={handlenextpage}>{currentpage + 1}</button>
      </div>
    </div>
  );
}

export default Questionpage;
