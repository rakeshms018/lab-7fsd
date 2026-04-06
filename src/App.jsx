import 'aframe'
import { useState } from 'react'
import './App.css'

// AR Scene Component
function ARScene() {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      <a-box
        id="box"
        position="0 0 -0.8"
        color="#4CC3D9"
        scale="0.3 0.3 0.3"
      ></a-box>

      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

// Main App Component
export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => {
    setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))
  }

  // Update box color dynamically
  if (document.querySelector('#box')) {
    document.querySelector('#box').setAttribute('color', clr)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>AR Box Color Toggle</h2>

      <button
        onClick={toggle}
        style={{
          padding: '10px 20px',
          marginBottom: '10px',
          cursor: 'pointer'
        }}
      >
        Toggle Color
      </button>

      <ARScene />
    </div>
  )
}