import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center'>
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png"/>
            <video controls autoPlay={true} loop muted className='relative z-10 h-[70vh] w-[50vw] object-cover' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>


            <div className='h-0.5 w-2/3 top-[30%] absolute z-0 bg-black'></div>
            <div className='h-0.5 w-3/4 top-[60%]  absolute z-0 bg-black'></div>
            <div className='h-0.5 w-5/6 top-[80%]  absolute z-0 bg-black'></div>

            
    </div>
    
  )
}

export default Page3