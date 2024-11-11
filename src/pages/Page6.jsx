import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen w-[95vw] flex items-center justify-center relative'>
        <video  autoPlay="true" loop className='absolute w-[100%] ml-12 mt-24 rounded-xl' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
        
        <div>
        <span className=' absolute left-10 bottom-0 text-[25vw] font-[anzo5] text-white'>ABOUT</span>
        </div>
    </div>
  )
}

export default Page6