import React from 'react'
import { useNavigate } from "react-router-dom";

const Grocery = () => {
  const navigate = useNavigate();
  let t4;

  function selectOption(){
    t4= new Date().getTime();
    localStorage.setItem("t4",t4);
    navigate("/lastPage");
  }

  return (<>
  <div className='text-center text-2xl'>Grocery</div>
  <h3 className="uppercase text-center mt-6">Select one option from dropdown menu</h3>
  <div className="flex items-center justify-center mt-8 ">
      {/* <label htmlFor="menu">Choose a menu:</label> */}

      <input onClick={selectOption} type="radio" id="html" name="fav_language" value="HTML"></input>
      <label for="html">Rice</label>
      <input onClick={selectOption} type="radio" id="html2" name="fav_language" value="HTML"></input>
      <label for="html2">Wheat</label>
      <input onClick={selectOption} type="radio" id="html3" name="fav_language" value="HTML"></input>
      <label for="html3">Jowar</label>

  </div>
  </>)
}

export default Grocery