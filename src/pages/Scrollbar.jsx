import React, { useState } from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

function Scrollbar(slide) {
       const img =[
            "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
            "https://cdn.pixabay.com/photo/2021/03/02/16/34/woman-6063087_1280.jpg"
        ]

        let [current,setCurrent] = useState(0)

        let previousSlide = ()=>{
            if(current === 0) setCurrent(img.length-1)
            else setCurrent(current-1)    
        }

        let nextSlide = ()=>{
            if(current === img.length-1) setCurrent(0)
                else setCurrent(current+1) 
        }
   
  return (
    <div className='overflow-hidden relative'>
        <div className ={`flex transition ease-out duration-400 `} style={{transform: `translateX(-${current*100}%)`}}>
        {
            img.map((ele)=>(
                <img src={ele} alt="" height={"50%"} />
            ))
        }
        </div>
        <div className=' absolute top-0 h-full w-full flex justify-between items-center text-white px-10'> 
            <button onClick={previousSlide}>
             <FaCircleArrowLeft/>
            </button>
            <button onClick={nextSlide}>
             <FaCircleArrowRight/>
            </button>
       </div>
       <div className=' absolute bottom-0 py-4 flex justify-center items-center gap-5 w-full'>
        {
            img.map((ele,i)=>(
                <div onClick={()=>setCurrent(i)} key={i} className={`rounded-full w-3 h-3 cursor-pointer ${i===current? "bg-white" : `bg-slate-400`}`}></div>
            ))
        }
       </div>
    </div>
  )
}

export default Scrollbar
