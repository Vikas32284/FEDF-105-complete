import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Imagedemo from './htmlprograms/ImageDemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageDemo></ImageDemo>
  </StrictMode>,
)
