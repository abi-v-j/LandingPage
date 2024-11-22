import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './components/Experience'
import './App.css'

const App = () => {
  return (
    <Canvas camera={{
      far:64,
      position:[2.3,1.5,2.3]
    }}>
      <Experience/>
    </Canvas>
  )
}

export default App