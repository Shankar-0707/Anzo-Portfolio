import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {

  

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
      gsap.from('.rotateText2',{
              transform:'rotateX(45deg)',
              duration:2,
              opacity:0,
              
              stagger:1,
              scrollTrigger:{
                  trigger:'.rotateText2',
                  start:'top 70%',
                  end:'top -200%',
                  scrub:1
              }
      })
  })


  return (
    <div id='section3' className='bg-white'>   
      
      <div className='rotateText2'>
    <h1 className='text-[40vw] font-[anzo5] text-center leading-[33vw]'>HELPING</h1>
    </div>
       
    <div>
    <h1 className='rotateText2 text-[40vw] font-[anzo5] text-center text-gray-400 leading-[33vw]'>MY</h1>
    </div>     
       
    <div>
    <h1 className='rotateText2 text-[40vw] font-[anzo5] text-center leading-[33vw]'>CLIENTS</h1>
    </div>    
       
    <div>
    <h1 className='rotateText2 text-[40vw] font-[anzo5] text-center leading-[33vw]'>TO ACHIEVE</h1>
    </div>    
        
    <div>
    <h1 className='rotateText2 text-[40vw] font-[anzo5] text-center text-gray-600 leading-[33vw]'>THEIR</h1>
    </div>     
       
    <div>
    <h1 className='rotateText2 text-[40vw] font-[anzo5] text-center leading-[33vw]'>DREAMS</h1>
    </div>   
    
     </div>
  )
}

export default Page5