import moon from '../assets/moon.mp4'
const Page5 = () => {
  return (
    <div className="h-screen relative p-8 bg-white">
    <div className="bg-black h-full  w-full rounded-[50px] ">
        <video autoPlay loop muted src={moon} className='h-full w-full'></video>
        <h1 className='font-[anzo4] text-[30vw] absolute -bottom-[70px] text-white ml-14'>ABOUT</h1>
    </div>
</div>
  )
}

export default Page5