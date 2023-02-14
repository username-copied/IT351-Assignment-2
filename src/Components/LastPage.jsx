import React from 'react'

const LastPage = () => {
  return (<>
  <div className='text-center text-2xl'>Response time for selecting options from menu in milliseconds</div>
    <div className='text-center text-xl p-4 m-4 border-dashed border-4 border-indigo-500 '>{localStorage.getItem("t2")-localStorage.getItem("t1")}</div> 
    <div className='text-center text-xl p-4 m-4 border-dashed border-4 border-indigo-500 '>Response time for selecting option 1:{localStorage.getItem("t2")} <br/> Resonse time for selecting option 2:{localStorage.getItem("t1")}</div> 
  </>
       
)
}

export default LastPage