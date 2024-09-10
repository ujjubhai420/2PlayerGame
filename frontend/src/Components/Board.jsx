import { useState } from "react"
function Square({id}){
  const [value,setValue]=useState("");
  function handleClick(){
    //SEND REQUEST TO WS SERVER 
   setValue("X");
  }
  return(<>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold   border-none w-10 h-10  " onClick={handleClick}><div>{value?value:" "}  </div> </button></>)

}

export function Board(){
return<>
<div className="grid grid-rows-3 gap-2">
 <div className="grid grid-cols-3 ">
  <Square id="1" class="flex items-center justify-center" />
  <Square id="2" />
  <Square id="3"/>
 </div>
 <div className="grid grid-cols-3">
  <Square id="4"/>
  <Square id="5"/>
  <Square id="6"/>
 </div>
 <div className="grid grid-cols-3">
  <Square id="7"/>
  <Square id="8"/>
  <Square id="9"/>
 </div>
</div>

</>
}