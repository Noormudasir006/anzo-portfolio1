import moon1 from '../assets/moon1.gif'

const Page4 = () => {
  return (
    <div className="h-screen p-8 bg-white rounded-[50px]">
      <div className="h-full w-full rounded-[50px] relative">
        <video 
          className="rounded-[50px] object-cover w-full h-full" 
          autoPlay 
          loop 
          muted 
          src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/1080p/mp4/file.mp4">
        </video>
        
        <div className="absolute inset-0 flex flex-col justify-center z-10 font-[anzo4] ml-11 ">
          <h1 className="uppercase leading-[16vw] text-[20vw] text-gray-500  font-[anzo4]">what</h1>
          <h2 className="uppercase text-white leading-[12vw] mb-14 text-[15vw] z-20 font-[anzo4]">i do</h2>
          <h4 className='text-white font-[anzo]'>I DESIGN AND DEVELOP</h4>
<h4 className='text-gray-400 font-[anzo3]'>MODERN, IMPACTFUL AND LUXURIOUS</h4>
<h4 className='text-white font-[anzo]'>websites that seamlessly bridge your  goals with needs of your clients.</h4>
        </div>

        <img 
          className="absolute top-[17vw] right-0" 
          src={moon1} 
          alt="Moon GIF"
        />
      </div>
    </div>
  )
}

export default Page4
