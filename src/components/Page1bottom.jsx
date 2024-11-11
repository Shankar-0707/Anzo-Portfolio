import { useGSAP } from '@gsap/react'
import gsap, { Linear } from 'gsap'
import React from 'react'

const Page1bottom = () => {


  useGSAP(()=>{
    gsap.to('#img',{
      rotate:360,
      ease:'linear',
      duration:3,
      repeat:-1
    })
  })

  return (
    
    <div className='ml-16'>
        <h3 className='text-white font-[anzo1] mt-14'>BRAND DESIGN | WEBSITE DESIGN</h3>
        <h3 className='text-gray-500 font-[anzo3] '>BESPOKE FREELANCE</h3>

        <img id='img' className='fixed right-14 bottom-36 ' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"/>

        <img id='img' className='fixed right-14 bottom-14' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"/>
    </div>
    
    
    

    
  )
}

export default Page1bottom