import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const PageBottom = () => {
  useGSAP(function(){
    gsap.to('.banner',{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:'linear'

    })
  })
  return (
    <div className="absolute left-0 p-20 flex items-end justify-between bottom-0 w-full">
      <div>
        <h2 className="text-xl  leading-[1vw] font-[anzo2]">
        BRAND DESIGN | WEBSITE DESIGN  </h2>
        <h3 className="text-lg leading-[2vw] text-gray-400 font-[anzo3]">BESPOKE FREELANCE</h3>
      
      </div>
    <div className="py-2 flex gap-2 flex-col right-10 fixed" id='banner'>  <img className=' banner'src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
    <img  className=' banner' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" /></div>
    </div>
  )
}

export default PageBottom