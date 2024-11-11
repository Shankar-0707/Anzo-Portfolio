import React, { useRef, useState } from 'react'
// import TiltText from '../components/TiltText'/
import Page1bottom from '../components/Page1bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e)=>{
      
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)

        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)

        
  }


  useGSAP(()=>{
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3
    })
  },[xVal,yVal])

  return (
    <>
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='relative h-screen px-5 py-4 rounded-md bg-white'>
        <div id='page1-in' className='relative shadow-xl shadow-gray-700 h-full w-full rounded-3xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_606,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>


        <img className='ml-20 pt-12' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"/>

        <div id='tiltpage' ref={tiltRef} className='mt-28 ml-11'>
        <h1 className='text-6xl text-white font-[anzo2]'>I AM <span className='text-black'>DARK MODE <span className='text-white'>™</span></span></h1>
        <h1 className='text-8xl text-white font-[anzo2]'>DESIGNER</h1>
        <h1 className='text-6xl text-white font-[anzo2]'>TO HIRE</h1>
    </div>



          <Page1bottom />
        </div>
        
      

    </div>
    
    
    
    
    
    </>




      



  )
}

export default Page1