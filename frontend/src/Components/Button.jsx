export default function Button({btnName,onClick}){

  return <button onClick={onClick} className=" border-none rounded-md text-sage-200 bg-sage-400 hover:bg-sage-500  font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 ">{btnName}</button>
}