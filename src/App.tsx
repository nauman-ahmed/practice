import { useState } from 'react'
import './App.css'

import UserCard from './components/card'

function App() {

  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <UserCard name="John Doe" age={30} isActive={true} />
        <UserCard name="Jane Smith" />
        <UserCard name="Alice Johnson" isActive={false} />
      </div>
    </>
  )
}

export default App
