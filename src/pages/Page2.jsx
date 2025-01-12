import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all" 
import walk from '../assets/walk.gif'

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        gsap.from('.h3',{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:'.h3',
                start:'top 50%',
                end:'top -250%',
               scrub:2,
            }
        })
    })
  return ( 
    <div id='section2' className="bg-white text-center p-10 text-black">
        <h3 className="text-gray-500 text-lg font-[anzo3]">
        ©  anzo.studio 2024 | designed and developed</h3>
    <div className='h3'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[33vw] mt-[5vw]">IMPACTFUL</h1>
    </div>
    <div className='h3'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">design</h1>
    </div>
    <div className='h3'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">is the </h1>
    </div>
    <div className='h3'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">design</h1>
    </div>
    <div className='h3'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">that</h1>
    </div>
    <div className='h3'>
        <h1 className="text-[35vw] text-black relative font-[anzo4] uppercase leading-[30vw]">works!</h1>
        <img className="absolute z-10 top-[10vw] h-[46vh] animate-slide w-full" src={walk}></img>
    </div>

    <div>
 </div>
    </div>
  )
}

export default Page2