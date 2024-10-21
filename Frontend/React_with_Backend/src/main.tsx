import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import TelefonFelvetel from './components/TelefonFelvetel.tsx';
import TelefonLista from './components/TelefonLista.tsx';


const router = createBrowserRouter([
  { 
    path: "/",
    element: <TelefonLista/>,

  },
  { 
    path: "/telefonok",
    element: <TelefonLista/>,

  },
  { 
    path: "/telefonfelvetel",
    element: <TelefonFelvetel/>,

  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(

 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>



)
