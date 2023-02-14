import React from 'react';
import { useNavigate } from "react-router-dom";

const Decorates = () => {
  const navigate = useNavigate();
  let t2;

  function selectOption(){
    t2= new Date().getTime();
    localStorage.setItem("t2",t2);
    navigate("/");
  }


  return (<div className='flex  justify-center'>
    <div className='bg-[#FFC93C] h-[600px] rounded-2xl p-4 m-4'><div className='text-center text-2xl'>Decorates</div>
  <h3 className="uppercase text-center mt-6">Select one option from dropdown menu</h3>
  <div className="flex items-center justify-center mt-8 ">
      <label htmlFor="menu">Choose a menu:</label>

      <select onChange={selectOption} className="border-2 border-black" id="cars">
        <option className='bg-blue-200' value="none">none</option>
        <option className='bg-blue-200' value="Decorates">Flower Pot</option>
        <option className='bg-blue-200' value="Electricals">Wine Glasses</option>
        <option className='bg-blue-200' value="Grocery">Decor Lamps</option>
      </select>
      {/* <div></div> */}
  </div>
  </div>
  </div>
    
  )
}

export default Decorates