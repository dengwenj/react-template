import React from 'react'

import './App.css'
import logo from './assets/logo192.png'

export default function App() {
  return (
    <div className='app'>
      <img src={logo} alt="logo" />
      <div>Welcome to the react app created by the CLI developed by Deng Wenjie</div>
      <div>
        If you want to know me this is my github:
        <a 
          className='info'
          href="https://github.com/dengwenj"
          target='_blank' 
          rel="noreferrer"
        >
          dengwenj
        </a>
      </div>
    </div>
  )
}
