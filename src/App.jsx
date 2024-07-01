import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Tecno from './components/Tecno'

function App() {

  return (
    <>
      <Navbar/>
      <main>
          <div id="home" className='my-36'>
          <Home/>
          </div>

          <div id="tentang" className='my-36'>
          <About/>
          </div>

          <div id="teknologi" className='my-36'>
            <Tecno/>
          </div>
      </main>
    </>
  )
}

export default App
