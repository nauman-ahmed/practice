import { useState } from 'react'
import './App.css'

import Counter from './components/card'

function App() {

  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <Counter />
      </div>
    </>
  )
}

export default App
