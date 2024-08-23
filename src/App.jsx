
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Router'

function App() {

  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
