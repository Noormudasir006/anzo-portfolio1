

const page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-white ">
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video autoPlay loop muted className="h-[54vh] w-[50vw]object-cover z-20 absolute" src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        <div className="h-1 w-[65%] bg-gray-500 top-[30%] absolute z-0"></div>
        <div className="h-1 w-[75%] bg-gray-500 top-[53%] absolute z-0"></div>
        <div className="h-1 w-[86%] bg-gray-500 top-[73%]    absolute z-0"></div>
    </div>
  )
}

export default page3