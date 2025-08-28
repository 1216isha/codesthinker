import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import UserContextProvider from './context/UserContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider >
      <div className=''>
        <App />
      </div>
    </UserContextProvider>
    <ToastContainer />
  </StrictMode>,
)
