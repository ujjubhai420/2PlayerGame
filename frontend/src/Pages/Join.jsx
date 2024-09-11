
import { useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import { GameDescription } from "../Components/GameDescription"
import { Heading } from "../Components/Heading"


export default function Join(){
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/game");
  }
  
  return <>
   <div className="bg-sage-300 rounded-lg grid grid-rows-3 justify-items-center ">
     <Heading/>
     <GameDescription className=""/>
     <div className="flex justify-center"><Button btnName="Join" onClick={handleClick} /></div>
     
  </div>
    
  </>
}