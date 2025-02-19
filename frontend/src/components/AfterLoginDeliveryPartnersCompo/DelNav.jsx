import React, { useState } from 'react'
import { SiGreasyfork } from 'react-icons/si';
const DelNav= () => {
    const [status,setStatus]= useState("Open"); 
    const handleChange = (e)=> {
         setStatus(e.target.value);   
    }
    return (
        <div className="h-[78px] w-full fixed z-[50] top-0 shadow-md bg-white">
            <nav className=" p-5 flex gap-x-[900px] ">
                <div>
                    <h1 className="font-poppins md:text-3xl font-extrabold tracking-wide flex ml-12 ">
                        <span className="text-yellow-400 flex justify-center items-center">
                            <span>fo</span>
                            <SiGreasyfork className='rotate-90 mt-1 mr-[1px]' size={20} />
                            <span>die</span>
                        </span>
                        <span>Buddy</span>
                    </h1>
                </div>              

                <div className=' font-poppins'>
                    <select className={` shadow-md border-none rounded-md h-8 w-28 font-medium ${status=="Open"?"text-green-600 outline-none":"text-red-600 outline-none"} `} value={status} onChange ={handleChange}>
                    <option className='text-black' value="Open" >Open</option>
                    <option className='text-black' value="Closed" >Closed</option>
                    </select>
                </div>
            </nav>
        </div>
    );
}

export default DelNav