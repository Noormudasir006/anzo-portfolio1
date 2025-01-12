
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all" 
const Page6 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        gsap.from('.rotate',{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:'.rotate',
                start:'top 90%',
                end:'top -250%',
               scrub:2,
            }
        })
    })
  return (
    <div className="bg-white text-center p-10 text-black">
            <div className='rotate'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[33vw] mt-[5vw]">helping</h1>
    </div>
    <div className='rotate'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">my</h1>
    </div>
    <div className='rotate'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">clients</h1>
    </div>
    <div className='rotate'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">to achieve </h1>
    </div>
    <div className='rotate'>
        <h1 className="text-[35vw] text-black font-[anzo4] uppercase leading-[30vw]">their</h1>
    </div>
    <div className='rotate'>
        <h1 className="text-[35vw] text-black relative font-[anzo4] uppercase leading-[30vw]">goals!</h1>
 
    </div>

    <div></div>
    </div>
  )
}

export default Page6