import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'

function App() {
 

  return (
    <>
      <div className='w-screen min-h-screen'>

        <Navbar></Navbar>
        <div className='w-2/3 h-96 bg-gray-200 flex flex-col text-center rounded-sm'>
          <input type="text" />
        </div>

        <Footer></Footer>
       </div>
    </>
  )
}

export default App
