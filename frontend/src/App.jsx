import { useState } from 'react'

import Join from './Pages/Join'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Game } from './Pages/Game'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <div className="min-h-full h-screen flex items-center bg-sage-200 justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Join/>}/>
          <Route path='/game' element={<Game/>}/>
         </Routes>
       </BrowserRouter>
      </div>
    </div>
       
    </>
  )
}

export default App
