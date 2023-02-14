import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  
    let t1;

    function selectOption(event){
        if(event.target.value==="Decorates"){
          navigate("/decorates");
          t1= new Date().getTime();
          localStorage.setItem("t1",t1);      
        }
        if(event.target.value==="Electricals"){
          navigate("/electricals");
          t1= new Date().getTime();
          localStorage.setItem("t1",t1);
        }
        if(event.target.value==="Grocery"){
          navigate("/grocery");
          t1= new Date().getTime();
          localStorage.setItem("t1",t1);
        }
        if(event.target.value==="none"){
          navigate("/");
        }
    }

  return (
    <div className='flex justify-center'><div className="bg-[#FFC93C] rounded-2xl h-[600px] p-4 m-4">
    <h1 className="text-center text-2xl mt-4">Hick's Law:</h1>
    <h3 className="uppercase text-center mt-6">Select one option from dropdown menu</h3>
    <div className="flex items-center justify-center mt-8 ">
        <label htmlFor="menu">Choose a menu:</label>

        <select onChange={selectOption} className="text-black border-2 border-black" id="cars">
          <option className='bg-blue-200' value="none">None</option>
          <option className='bg-blue-200' value="Decorates">Decorates</option>
          <option className='bg-blue-200' value="Electricals">Electricals</option>
          <option className='bg-blue-200' value="Grocery">Grocery</option>
        </select>

    </div>
  </div></div>
  )
}

export default Home