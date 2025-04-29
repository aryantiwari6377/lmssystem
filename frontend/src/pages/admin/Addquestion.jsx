// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Addquestion = () => {
//     const [questions, setQuestions] = useState([]); 
//     const [categories, setCategories] = useState([]); 
//     const [newQuestion, setNewQuestion] = useState('');
//     const [options, setOptions] = useState(['', '', '', '']); 
//     const [correctAnswer, setCorrectAnswer] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [newCategory, setNewCategory] = useState(''); 


//     useEffect(() => {
//         // fetchQuestions();
//         // fetchCategories();
//     }, []);

//     // const fetchQuestions = async () => {
//     //     try {
//     //         const response = await axios.get('/api/questions');
//     //         setQuestions(response.data);
//     //     } catch (error) {
//     //         console.error('Error fetching questions:', error);
//     //     }
//     // };

//     // const fetchCategories = async () => {
//     //     try {
//     //         const response = await axios.get('/api/categories');
//     //         setCategories(response.data);
//     //     } catch (error) {
//     //         console.error('Error fetching categories:', error);
//     //     }
//     // };

//     const handleAddQuestion = async () => {
//         if (!newQuestion || !selectedCategory || options.some((opt) => !opt) || !correctAnswer) {
//             alert('Please fill in all fields, including question, options, and correct answer.');
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/api/question', {
//                 question: newQuestion,
//                 options,
//                 correctAnswer,
//                 category: selectedCategory,
//             });
//             if(response.status === 404){
//                 alert('category not found');
//             }
//             setQuestions([...questions, response.data]);
//             setNewQuestion('');
//             setOptions(['', '', '', '']);
//             setCorrectAnswer('');
//         } catch (error) {
//             console.error('Error adding question:', error);
//         }
//     };

   
//     const handleOptionChange = (index, value) => {
//         const updatedOptions = [...options];
//         updatedOptions[index] = value;
//         setOptions(updatedOptions);
//     };

//     return (
//         <div className="p-6  w-[240px] xs:w-auto">
//             <h1 className="text-2xl font-bold mb-4">Add Questions</h1>
            
//             <div className="mb-6">
//                 <h2 className="text-xl font-semibold mb-2 text-start">Add New Question</h2>
//                 <input
//                     type="text"
//                     placeholder="Enter question"
//                     value={newQuestion}
//                     onChange={(e) => setNewQuestion(e.target.value)}
//                     className="border p-2 mb-4 w-full outline-none"
//                 />

//                 <h3 className="text-lg font-semibold mb-2 text-start">Options:</h3>
              
//                 <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
//     {options.map((option, index) => (
//         <div key={index} className="flex items-center">
//             <input
//                 type="text"
//                 placeholder={`Option ${String.fromCharCode(65 + index)}`}
//                 value={option}
//                 onChange={(e) => handleOptionChange(index, e.target.value)}
//                 className="border p-2 w-32 outline-none" 
//             />
//         </div>
//     ))}
// </div>


//                 <div className="mb-4">
//                     <label className="block font-semibold mb-1 text-start">Correct Answer:</label>
//                     <input
//                         type="text"
//                         placeholder="Enter correct answer (e.g., A, B, C, D)"
//                         value={correctAnswer}
//                         onChange={(e) => setCorrectAnswer(e.target.value)}
//                         className="border p-2 outline-none "
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block font-semibold mb-1 text-start">Category:</label>
//                     <select
//                         value={selectedCategory}
//                         onChange={(e) => setSelectedCategory(e.target.value)}
//                         className="border p-2 w-full"
//                     >
//                             <option>
//                                   Verbal
//                             </option>
//                             <option>
//                                 Numerical
//                             </option>
//                             <option>
//                                 Abstract
//                             </option>
//                             <option>
//                                 Personality
//                             </option>
                    
//                     </select>
//                 </div>

//                 <button
//                     onClick={handleAddQuestion}
//                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                     Add Question
//                 </button>
//             </div>

        
//         </div>
//     );
// };

// export default Addquestion;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Addquestion = () => {
    const [questions, setQuestions] = useState([]); 
    const [newQuestion, setNewQuestion] = useState('');
    const [options, setOptions] = useState({
        option1: '',
        option2: '',
        option3: '',
        option4: ''
    }); 
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        
    }, []);

    const handleAddQuestion = async () => {
        if (
            !newQuestion ||
            !selectedCategory ||
            !options.option1 ||
            !options.option2 ||
            !options.option3 ||
            !options.option4 ||
            !correctAnswer
        ) {
            alert('Please fill in all fields, including question, options, and correct answer.');
            return;
        }
          //http://localhost:5000/api/question 
        try {
            const response = await axios.post('https://coursecraft-backend-3pke.onrender.com/api/question', {
                question: newQuestion,
                options,
                correctAnswer,
                category: selectedCategory,
            });
            console.log(response);
            if(response.status == 201){
                alert("question added");
            }
            setQuestions([...questions, response.data]);
            setNewQuestion('');
            setOptions({
                option1: '',
                option2: '',
                option3: '',
                option4: ''
            });
            setCorrectAnswer('');
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    const handleOptionChange = (key, value) => {
        setOptions((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div className="p-6 w-[240px] xs:w-auto">
            <h1 className="text-2xl font-bold mb-4">Add Questions</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-start">Add New Question</h2>
                <input
                    type="text"
                    placeholder="Enter question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    className="border p-2 mb-4 w-full outline-none"
                />

                <h3 className="text-lg font-semibold mb-2 text-start">Options:</h3>
                <div className="flex flex-col gap-2 mb-4">
                    {Object.keys(options).map((key) => (
                        <div key={key} className="flex items-center">
                            <input
                                type="text"
                                placeholder={`Enter ${key}`}
                                value={options[key]}
                                onChange={(e) => handleOptionChange(key, e.target.value)}
                                className="border p-2 w-full outline-none"
                            />
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-start">Correct Answer:</label>
                    <input
                        type="text"
                        placeholder="Enter correct answer (e.g., A, B, C, D)"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        className="border p-2 outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-start">Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border p-2 w-full"
                    >
                        <option value="" disabled>Select category</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Numerical">Numerical</option>
                        <option value="Abstract">Abstract</option>
                        <option value="Personality">Personality</option>
                    </select>
                </div>

                <button
                    onClick={handleAddQuestion}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Question
                </button>
            </div>
        </div>
    );
};

export default Addquestion;
