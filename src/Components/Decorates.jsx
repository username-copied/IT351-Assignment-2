import React from 'react'

const Decorates = () => {

  function selectOption(){

  }

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

  </div>
  </>
    
  )
}

export default Decorates