import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  
    function selectOption(event){
        if(event.target.value==="Decorates"){
          navigate("/decorates");
        }
        if(event.target.value==="Electricals"){
          navigate("/electricals");
        }
        if(event.target.value==="Grocery"){
          navigate("/grocery");
        }
        if(event.target.value==="none"){
          navigate("/");
        }
    }

  return (
    <div><div className="h-full">
    <h1 className="text-center text-2xl mt-4">Hick's Law:</h1>
    <h3 className="uppercase text-center mt-6">Select one option from dropdown menu</h3>
    <div className="flex items-center justify-center mt-8 ">
        <label htmlFor="menu">Choose a menu:</label>

        <select onChange={selectOption} className="border-2 border-black" id="cars">
          <option value="none">none</option>
          <option value="Decorates">Decorates</option>
          <option value="Electricals">Electricals</option>
          <option value="Grocery">Grocery</option>
        </select>

    </div>
  </div></div>
  )
}

export default Home