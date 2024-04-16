import React, { useEffect } from 'react'
import { useState } from 'react';
const Eyes = () => {
    const [rotate,setRotate] = useState(0) ;
    const [translateX,setTranslateX] = useState(0) ;
    const [translateY,setTranslateY] = useState(0) ;
    
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let x = e.clientX;
            let y = e.clientY;
            let deltaX = x-(window.innerWidth/2) 
            let deltaY = y-(window.innerHeight/2) 
            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
            setRotate(angle-180)
            let deltaX2 = (x-(window.innerWidth/2))*0.04 
            let deltaY2 = (y-(window.innerHeight/2))*0.04 
            const maxTranslation = 0.01 * window.innerWidth;
            var tempX = deltaX2
            var tempY = deltaY2
            tempX = Math.min(Math.abs(tempX), maxTranslation) * Math.sign(tempX);
            tempY = Math.min(Math.abs(tempY), maxTranslation) * Math.sign(tempY);
            setTranslateX(tempX)
            setTranslateY(tempY)
        })
    },[])

  return (
    <div  scrollclassName='eyes'>
        <div className='flex items-center gap-10 justify-center w-full h-screen bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] cursor-pointer'>
        <div className='relative w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center text-center'>
            <div className='absolute text-white uppercase font-[Neue Montreal] antialiased text-sm z-10'>Play</div>
            <div style={{
                transform: `translate(${translateX}px,${translateY}px)`
            }}
                className=' w-[9vw] h-[9vw] rounded-full flex justify-center items-center bg-black'>
            <div style={{transform:`  rotate(${rotate}deg)`}}className={`line w-full`}>
                <div className='w-[2vw] h-[2vw] rounded-full bg-white flex justify-center'></div>
                </div>
            </div>
        </div>
        <div className=' w-[15vw] h-[15vw] rounded-full bg-white  flex justify-center items-center'>
        <div className='absolute text-white uppercase font-[Neue Montreal] antialiased text-sm z-10'>Play</div>
            <div style = {{
                transform: `translate(${translateX}px,${translateY}px)`
            }}className=' w-[9vw] h-[9vw] rounded-full flex justify-center items-center bg-black'>
            <div style={{transform:` rotate(${rotate}deg)`}}className={`line  w-full`}>
                <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes


