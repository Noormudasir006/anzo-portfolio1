import man from '../assets/man.gif';

const Page10 = () => {
  return (
    <div className="h-screen mt-[10vw] w-[93vw] ml-[40px] bg-black rounded-[50px] relative">
    
      <video 
        autoPlay 
        loop 
        muted 
        src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4" 
        className="h-full w-full rounded-[50px] object-cover"
      ></video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h1 className="text-white text-[9vw] leading-[9vw] font-[anzo4]">PERSONAL</h1>
        <h3 className="text-white text-lg">Intuition, Imagination, Discipline</h3>

        <h1 className="text-white text-[9vw] leading-[9vw] font-[anzo4] mt-4">PROFESSIONAL</h1>
        <h3 className="text-white text-lg">Time Management, Multitasking, Creativity</h3>

        <h1 className="text-white text-[9vw] font-[anzo4] leading-[9vw] mt-4">ADDITIONAL</h1>
      </div>

      {/* Left-Side Video */}
      <img
        
        src={man} 
        className="absolute top-1/2 -translate-y-1/2 right-0 ml-4 h-[30vw] z-50"
      ></img>
    </div>
  );
}

export default Page10;
