import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 1. استيراد الـ Provider الذي أنشأناه
import { GameProvider } from './context/GameContext' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. تغليف التطبيق بـ GameProvider */}
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
)
