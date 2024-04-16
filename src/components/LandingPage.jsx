import React from 'react'
import {motion} from 'framer-motion'

const LandingPage = () => {
  return (
    <div>
        <div className='pl-8 mt-20 border-b-[1px] pb-52 border-slate-400 mb-3'>
        <div className='fullLand flex justify-between'>
        <div className='myText'>
       <div className=' leading-[6.5vw] m-0 p-0 font-[FoundersGrotesk] font-semibold text-[125px] uppercase '>We create </div>
       <div className='flex'>
        <motion.img initial={{width:0}} animate={{width:'150px'}} transition={{ease:[0.76, 0, 0.24, 1],duration:1.5}}className='rounded-lg mt-3 mr-3 w-[150px] h-[85px]' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
       <div className=' leading-[6.5vw] font-[FoundersGrotesk] font-semibold text-[125px] uppercase '>Eye-opening </div>
       </div>
       <div className=' leading-[6.5vw] font-[FoundersGrotesk] font-semibold text-[125px] uppercase '>presentations </div>
        </div>
       
        </div>
    </div>
     <div className='flex justify-between px-20'>
     {
         ["For public and private companies", "From the first pich to IPO"].map((ele,index)=>(
             <div key={index}>{ele}</div>
         ))
        }
        <div className='flex' >
            <div className='border-[1px] rounded-[20px] border-slate-600 px-5 mr-1 font-light text-sm uppercase font-[Neue Montreal] antialiased pt-1.5'>Start the project</div>
            <span className='width-2 border-[1px] px-2 py-2 border-slate-600 text-xs rounded-full'>.jo..</span>
            </div>
 </div>
 <div data-scroll data-scroll-section data-scroll-speed="0.05" className='footerFull bg-[#0A4D43] h-[500px] border-5 pt-2 rounded-tl-[10px] rounded-tr-[10px] mt-10 flex text-[400px] overflow-hidden'>
    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}}  className='text-white font-[FoundersGrotesk] uppercase leading-[17vw] border-t-[1px] border-slate-500  font-semibold  whitespace-nowrap pr-[100px] items center'>We Are Ouche</motion.h1>
    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}}  className='text-white font-[FoundersGrotesk] uppercase leading-[17vw] border-t-[1px] border-slate-500  font-semibold  whitespace-nowrap  items center'>We Are Ouche</motion.h1>
    {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-white font-[FoundersGrotesk] ml-10 gap-5 uppercase font-semibold whitespace-nowrap border-t-[1px] border-slate-500'>We Are Ouche</motion.h1> */}
 </div>
    </div>
    
  )
}

export default LandingPage
 