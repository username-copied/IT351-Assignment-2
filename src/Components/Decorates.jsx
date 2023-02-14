import React from 'react';
import { useNavigate } from "react-router-dom";

const Decorates = () => {
  const navigate = useNavigate();
  let t2;

  function selectOption(){
    t2= new Date().getTime();
    localStorage.setItem("t2",t2);
    navigate("/lastPage");
  }

  function getTimeDifference(){
      let T1=localStorage.getItem("t1");
      let T2 = localStorage.getItem("t2");
      let t3 = T2-T1;
      return t3;
    }

    console.log(getTimeDifference());

  return (<>
  <div className='text-center text-2xl'>Decorates</div>
  <h3 className="uppercase text-center mt-6">Select one option from dropdown menu</h3>
  <div className="flex items-center justify-center mt-8 ">
      <label htmlFor="menu">Choose a menu:</label>

      <select onChange={selectOption} className="border-2 border-black" id="cars">
        <option value="none">none</option>
        <option value="Decorates">Flower Pot</option>
        <option value="Electricals">Wine Glasses</option>
        <option value="Grocery">Decor Lamps</option>
      </select>
      {/* <div></div> */}
  </div>
  </>
    
  )
}

export default Decorates