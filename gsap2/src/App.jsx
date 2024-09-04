import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
 const randomX= gsap.utils.random(-500,500,100)
 const rotateX= gsap.utils.random(-360,360,30)
 const randomY= gsap.utils.random(-500,500,30)

const [xValue, setxValue] = useState(0)
const [YValue, setYValue] = useState(0)
const [roti, setroti] = useState(0)
const imageRef=useRef()

useGSAP(()=>{
  gsap.to(imageRef.current,{
    x:xValue,
    y:YValue,
    duration:0.6,
    rotate:roti

  })
},{scope:'main',dependencies:[xValue,YValue,roti]})

  return (
    <main>
      <img onClick={()=>{
        setxValue(randomX)
        setroti(rotateX)
        setYValue(randomY)
      }} ref={imageRef} src="https://tse4.mm.bing.net/th?id=OIP.WjJALJIvlAzmzkcfzwTG0QHaFV&pid=Api&P=0&h=220" alt="" />
    </main>
  );
};

export default App;
