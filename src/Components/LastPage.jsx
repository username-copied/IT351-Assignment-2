import React from 'react'

const LastPage = () => {
  return (<div className='flex justify-center'>
    <div className='p-4 m-4 h-[600px]'>

    <div className='text-center text-2xl'>Response time for selecting options from menu in milliseconds</div>
    <div className='text-center text-xl p-4 m-4 border-dashed border-4 border-indigo-500 '>Time needed for selecting from first menu: {localStorage.getItem("t1")-localStorage.getItem("t2")}</div> 
    <div className='text-center text-xl p-4 m-4 border-dashed border-4 border-indigo-500 '>Time needed for selecting from second menu: {localStorage.getItem("t3")-localStorage.getItem("t2")}</div> 
    <div className='text-center text-xl p-4 m-4 border-dashed border-4 border-indigo-500 '>Time needed for selecting from third menu: {localStorage.getItem("t4")-localStorage.getItem("t3")}</div> 

    </div>
  
      {/* Graph */}
    


  </div>
       
)
}

export default LastPage