import React from 'react'
import ReactDOM from 'react-dom/client'
import { VideoGamesApp } from './VideoGamesApp'
import '../node_modules/atropos/atropos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoGamesApp />
  </React.StrictMode>
)
