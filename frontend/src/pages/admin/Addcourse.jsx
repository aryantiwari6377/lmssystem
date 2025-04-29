

// import React, { useState } from 'react';
// import { addcourse } from '../../services/Admin/addcourse';

// const Addcourse = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         category: '',
//         subcategory: '',
//         duration: '',
//         learn: [''],
//         content: [{ sectionTitle: '', description: '' }],
//         status: 'free',
//         review: '0',
//         enrollment: '0',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleLearnChange = (index, value) => {
//         const updatedLearn = [...formData.learn];
//         updatedLearn[index] = value;
//         setFormData({ ...formData, learn: updatedLearn });
//     };

//     const addLearnPoint = () => {
//         setFormData({ ...formData, learn: [...formData.learn, ''] });
//     };

//     const addContentSection = () => {
//         setFormData({
//             ...formData,
//             content: [...formData.content, { sectionTitle: '', description: '' }],
//         });
//     };

//     const handleContentChange = (index, field, value) => {
//         const updatedContent = [...formData.content];
//         updatedContent[index][field] = value;
//         setFormData({ ...formData, content: updatedContent });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data Submitted:', formData);
//         const res = addcourse(FormData);
//         if(res.status == 200){
//             alert("course added successfully");
//         }
//     };



//     return (
//         <form onSubmit={handleSubmit} className=' space-y-4 '>
           
//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Title:</label>
//                 <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                     required
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Category:</label>
//                 <input
//                     type="text"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                     required
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Subcategory:</label>
//                 <input
//                     type="text"
//                     name="subcategory"
//                     value={formData.subcategory}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Duration:</label>
//                 <input
//                     type="text"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                 />
//             </div>

         
//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Learn (Points):</label>
//                 <div className='flex gap-y-4 flex-wrap'>
//                     {formData.learn.map((point, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             value={point}
//                             onChange={(e) => handleLearnChange(index, e.target.value)}
//                             className='flex-grow w-full outline-none'
//                             placeholder={`Point ${index + 1}`}
//                         />
//                     ))}
//                     <button
//                         type="button"
//                         onClick={addLearnPoint}
//                         className='bg-blue-500 text-white px-4 py-2 rounded'
//                     >
//                         Add Option
//                     </button>
//                 </div>
//             </div>

         
//             <div className='flex flex-col  gap-x-4'>
//                 <label className='w-[100px] text-start'>Content (Sections):</label>
//                 <div className='flex flex-col gap-y-4'>
//                     {formData.content.map((section, index) => (
//                         <div key={index} className='flex items-center gap-x-4 mt-8'>
//                             <input
//                                 type="text"
//                                 placeholder="Section Title"
//                                 value={section.sectionTitle}
//                                 onChange={(e) =>
//                                     handleContentChange(index, 'sectionTitle', e.target.value)
//                                 }
//                                 className='flex-grow border border-gray-300 rounded px-4 py-2 outline-none'
//                             />
//                             <textarea
//                                 placeholder="Description"
//                                 value={section.description}
//                                 onChange={(e) =>
//                                     handleContentChange(index, 'description', e.target.value)
//                                 }
//                                 className='flex-grow border border-gray-300 rounded px-4 py-2 outline-none '
//                             />
//                             <button
//                                 type="button"
//                                 onClick={addContentSection}
//                                 className='bg-blue-500 text-white px-2 py-2 rounded'
//                             >
//                                 Add Section
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Status, Review, and Enrollment Fields */}
//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Status:</label>
//                 <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className='flex-grow'
//                 >
//                     <option value="free">Free</option>
//                     <option value="paid">Paid</option>
//                 </select>
//             </div>

           

           

//             <button
//                 type="submit"
//                 className='bg-green-500 text-white px-4 py-2 rounded mt-4'
//             >
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default Addcourse;

// import React, { useState } from 'react';
// import { addcourse } from '../../services/Admin/addcourse';

// const Addcourse = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         category: '',
//         subcategory: '',
//         duration: '', 
//         learn: [''],
//         content: [{ sectionTitle: "", description: "", topics: [] }],,
//         status: 'free',
//         review: '',  
//         enrollment: '',  
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleLearnChange = (index, value) => {
//         const updatedLearn = [...formData.learn];
//         updatedLearn[index] = value;
//         setFormData({ ...formData, learn: updatedLearn });
//     };

//     const addLearnPoint = () => {
//         setFormData({ ...formData, learn: [...formData.learn, ''] });
//     };

//     const addContentSection = () => {
//         setFormData({
//             ...formData,
//             content: [...formData.content, { sectionTitle: '', description: '' }],
//         });
//     };

//     const handleContentChange = (index, field, value) => {
//         const updatedContent = [...formData.content];
//         updatedContent[index][field] = value;
//         setFormData({ ...formData, content: updatedContent });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

       
//         const formDataWithNumber = {
//             ...formData,
//             duration: Number(formData.duration),  
//             review: Number(formData.review),      
//             enrollment: Number(formData.enrollment)  
//         };

//         console.log('Form Data Submitted:', formDataWithNumber);
//         const res = await addcourse(formDataWithNumber);
//         if (res.status === 200) {
//             alert("Course added successfully");
//         } else {
//             alert("Error adding course");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className='space-y-4'>
//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Title:</label>
//                 <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                     required
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Category:</label>
//                 <input
//                     type="text"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                     required
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Subcategory:</label>
//                 <input
//                     type="text"
//                     name="subcategory"
//                     value={formData.subcategory}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Duration:</label>
//                 <input
//                     type="text"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Learn (Points):</label>
//                 <div className='flex gap-y-4 flex-wrap'>
//                     {formData.learn.map((point, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             value={point}
//                             onChange={(e) => handleLearnChange(index, e.target.value)}
//                             className='flex-grow w-full outline-none'
//                             placeholder={`Point ${index + 1}`}
//                         />
//                     ))}
//                     <button
//                         type="button"
//                         onClick={addLearnPoint}
//                         className='bg-blue-500 text-white px-4 py-2 rounded'
//                     >
//                         Add Option
//                     </button>
//                 </div>
//             </div>

//             <div className='flex flex-col gap-x-4'>
//                 <label className='w-[100px] text-start'>Content (Sections):</label>
//                 <div className='flex flex-col gap-y-4'>
//                     {formData.content.map((section, index) => (
//                         <div key={index} className='flex items-center gap-x-4 mt-8'>
//                             <input
//                                 type="text"
//                                 placeholder="Section Title"
//                                 value={section.sectionTitle}
//                                 onChange={(e) =>
//                                     handleContentChange(index, 'sectionTitle', e.target.value)
//                                 }
//                                 className='flex-grow border border-gray-300 rounded px-4 py-2 outline-none'
//                             />
//                             <textarea
//                                 placeholder="Description"
//                                 value={section.description}
//                                 onChange={(e) =>
//                                     handleContentChange(index, 'description', e.target.value)
//                                 }
//                                 className='flex-grow border border-gray-300 rounded px-4 py-2 outline-none'
//                             />
//                             <button
//                                 type="button"
//                                 onClick={addContentSection}
//                                 className='bg-blue-500 text-white px-2 py-2 rounded'
//                             >
//                                 Add Section
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

          
//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Status:</label>
//                 <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className='flex-grow'
//                 >
//                     <option value="free">Free</option>
//                     <option value="paid">Paid</option>
//                 </select>
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Review:</label>
//                 <input
//                     type="text"
//                     name="review"
//                     value={formData.review}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                 />
//             </div>

//             <div className='flex items-center gap-x-4'>
//                 <label className='w-[100px] text-start'>Enrollment:</label>
//                 <input
//                     type="text"
//                     name="enrollment"
//                     value={formData.enrollment}
//                     onChange={handleChange}
//                     className='flex-grow outline-none'
//                 />
//             </div>

//             <button
//                 type="submit"
//                 className='bg-green-500 text-white px-4 py-2 rounded mt-4'
//             >
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default Addcourse;

import React, { useState } from 'react';
import { addcourse } from '../../services/Admin/addcourse'; 

const Addcourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        subcategory: '',
        duration: '', 
        learn: [''],
        content: [{ sectionTitle: "", description: "", topics: [] }],
        status: 'free',
        review: '',
        enrollment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    const handleLearnChange = (index, value) => {
        const updatedLearn = [...formData.learn];
        updatedLearn[index] = value;
        setFormData({ ...formData, learn: updatedLearn });
    };

 
    const addLearnPoint = () => {
        setFormData({ ...formData, learn: [...formData.learn, ''] });
    };


    const addContentSection = () => {
        setFormData({
            ...formData,
            content: [...formData.content, { sectionTitle: '', description: '', topics: [] }],
        });
    };

    const handleContentChange = (index, field, value) => {
        const updatedContent = [...formData.content];
        updatedContent[index][field] = value;
        setFormData({ ...formData, content: updatedContent });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataWithNumber = {
            ...formData,
            duration: Number(formData.duration),
            review: Number(formData.review),
            enrollment: Number(formData.enrollment),
        };

        console.log('Form Data Submitted:', formDataWithNumber);
        try {
            const res = await addcourse(formDataWithNumber);
            if (res.status === 200) {
                alert('Course added successfully');
                setFormData({
                    title: '',
                    category: '',
                    subcategory: '',
                    duration: '', 
                    learn: [''],
                    content: [{ sectionTitle: "", description: "", topics: [] }],
                    status: 'free',
                    review: '',
                    enrollment: '',
                });
            } else {
                alert('Error adding course');
            }
        } catch (error) {
            console.error('Error during course submission:', error);
            alert('Error submitting course');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 px-3 w-[200px] xs:w-auto">
            <div className="flex  flex-col sm:flex-row sm:items-center gap-x-4">
                <label className="w-[100px] text-start">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="flex-grow outline-none border-2 border-gray-300"
                    required
                />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-x-4">
                <label className="w-[100px] text-start">Category:</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="flex-grow outline-none border-2 border-gray-300"
                    required
                />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-x-4">
                <label className="w-[100px] text-start">Subcategory:</label>
                <input
                    type="text"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleChange}
                    className="flex-grow outline-none border-2 border-gray-300"
                />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-x-4">
                <label className="w-[100px] text-start">Duration:</label>
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="flex-grow outline-none border-2 border-gray-300"
                    required
                />
            </div>

            <div className="flex  flex-col sm:flex-row sm:items-center gap-x-4">
                <label className="w-[100px] text-start">Learn (Points):</label>
                <div className="flex gap-y-4 flex-wrap">
                    {formData.learn.map((point, index) => (
                        <input
                            key={index}
                            type="text"
                            value={point}
                            onChange={(e) => handleLearnChange(index, e.target.value)}
                            className="flex-grow w-full outline-none border-2 border-gray-300"
                            placeholder={`Point ${index + 1}`}
                        />
                    ))}
                    <button
                        type="button"
                        onClick={addLearnPoint}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Option
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-x-4">
                <label className="w-[100px] text-start">Content (Sections):</label>
                <div className="flex flex-col gap-y-4">
                    {formData.content.map((section, index) => (
                        <div key={index} className="flex flex-col gap-y-2  sm:flex-row items-center gap-x-4 mt-8">
                            <input
                                type="text"
                                placeholder="Section Title"
                                value={section.sectionTitle}
                                onChange={(e) =>
                                    handleContentChange(index, 'sectionTitle', e.target.value)
                                }
                                className="flex-grow border border-gray-300 rounded px-4 py-2 outline-none"
                            />
                            <textarea
                                placeholder="Description"
                                value={section.description}
                                onChange={(e) =>
                                    handleContentChange(index, 'description', e.target.value)
                                }
                                className="flex-grow border border-gray-300 rounded px-4 py-2 outline-none"
                            />
                            <button
                                type="button"
                                onClick={addContentSection}
                                className="bg-blue-500 text-white px-2 py-2 rounded"
                            >
                                Add Section
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-x-4">
                <label className="w-[100px] text-start">Status:</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="flex-grow"
                >
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                </select>
            </div>

            <div className="flex items-center gap-x-4">
                <label className="w-[100px] text-start">Review:</label>
                <input
                    type="number"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    className="flex-grow outline-none"
                    required
                />
            </div>

            <div className="flex items-center gap-x-4">
                <label className="w-[100px] text-start">Enrollment:</label>
                <input
                    type="number"
                    name="enrollment"
                    value={formData.enrollment}
                    onChange={handleChange}
                    className="flex-grow outline-none"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
                Submit
            </button>
        </form>
    );
};

export default Addcourse;
