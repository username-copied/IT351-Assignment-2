import React from 'react'
import { useNavigate } from "react-router-dom";


const Electricals = () => {
  const navigate = useNavigate();
  let t3;

  function selectOption(){
    t3= new Date().getTime();
    localStorage.setItem("t3",t3);
    navigate("/");
  }

  return (<div className='flex justify-center bg-[#FFC93C]'>
    <div className=''>
    <div className='text-center text-2xl m-4 p-4 '>Electricals</div>
  <div class="bg-[#FFC93C] ">

  <ul  class="bg-[#FFC93C] cursor-pointer absolute mt-2 rounded-lg shadow-lg">
    <li class="p-4 m-4 rounded-2xl bg-white">Computers & Accessories
      <ul onClick={selectOption} class="pl-8">
        <li class="px-4 py-2 hover:bg-blue-300">Laptops</li>
        <li class="px-4 py-2 hover:bg-blue-300">Desktops</li>
        <li class="px-4 py-2 hover:bg-blue-300">Keyboards & Mice</li>
      </ul>
    </li>
    <li class="p-4 m-4 rounded-2xl bg-white">Mobile & Tablets
      <ul onClick={selectOption} class="pl-8">
        <li class="px-4 py-2 hover:bg-blue-300">Smartphones</li>
        <li class="px-4 py-2 hover:bg-blue-300">Tablets</li>
        <li class="px-4 py-2 hover:bg-blue-300">Accessories</li>
      </ul>
    </li>
    <li class="p-4 m-4 rounded-2xl bg-white">Television & Audio
      <ul onClick={selectOption} class="pl-8">
        <li class="px-4 py-2 hover:bg-blue-300">Televisions</li>
        <li class="px-4 py-2 hover:bg-blue-300">Bluetooth Speakers</li>
        <li class="px-4 py-2 hover:bg-blue-300">Headphones</li>
      </ul>
    </li>
  </ul>
</div>

    </div>
  
  </div>)
}

export default Electricals