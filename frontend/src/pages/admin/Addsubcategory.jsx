import React, { useState } from 'react'
import {addsubcategory} from "../../services/Admin/addsubcategory";

function Addsubcategory() {

   const [category, setCategory] = useState("");
   const [subcategory, setsubCategory] = useState("");

  const handleform = async(e) =>{
    e.preventDefault();
    const res = await addsubcategory(category,subcategory);
     console.log("is",res);
    if(res.status == 200){
      alert('subcategory added');
    }
    else if(res.status == 404){
      alert('category not found');
    }
    else{
      alert('subcategory not added');
    }
  
  }

  return (
    <div>
          <h2 className='text-xl font-bold mb-6'>Add Subcategory</h2>
        <form onSubmit={handleform}>
                 
            <div>
                <label>Category:</label>
                <input type="text " className='outline-none ml-[6px]' onChange={(e)=>{setCategory(e.target.value)}}/>
            </div>
            <div>
                <label>Subcategory:</label>
                <input type="text " className='outline-none ml-[6px]' onChange={(e)=>{setsubCategory(e.target.value)}}/>
            </div>
            <button  className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
        </form>
         
    </div>
  )
}

export default Addsubcategory