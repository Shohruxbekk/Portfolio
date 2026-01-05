import React from 'react'
import Nav from './Nav.jsx'
import Content from './Content.jsx'
const App = () => {
  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center'>
      <Nav></Nav>
      <Content></Content>

    </div>
  )
}

export default App
