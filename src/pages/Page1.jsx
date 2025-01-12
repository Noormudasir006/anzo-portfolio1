// import TiltText from "../components/TiltText"
import { useGSAP } from '@gsap/react'
import PageBottom from '../components/PageBottom'
import { useRef, useState } from "react"
import gsap from 'gsap'
import TiltText from '../components/TiltText'

const Page1 = () => {
  const tiltRef = useRef(null)
  // const gsap= useRef()
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)
  const mouseMoving=(e)=>{
// console.log(tiltRef.current.getBoundingClientRect())
setxVal((e.clientX-tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/30)
setyVal(-(e.clientX-tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/20)
// tiltRef.current.style.transform=  `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }
  useGSAP(()=>{
    gsap.to(tiltRef.current,{

      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3, 
      ease: 'elastic.out(1,0.3)'
    }
  )
  },[xVal,yVal])
  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
    }} className="h-screen bg-white px-6 py-5 relative">
        <div id='page1-in' className="h-full bg-cover p-10 shadow-xl relative shadow-gray-700 rounded-[50px] bg-[url(./assets/bg.png)]">
        <img className='h-30 ml-10' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
      <TiltText abc={tiltRef}/>
     <PageBottom />
       </div>
     
    </div>
  )
}

export default Page1