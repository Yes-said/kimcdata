import { useState } from 'react'
import 'bulma/css/bulma.min.css';
import ReactDOM from 'react-dom';
import './App.css'
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Sidebar from './Componets/Sidebar';


const App = () => {

  return (
  
    <div>
    <Navbar />
    <div className="columns">
      <div className="column is-one-quarter">
        <Sidebar />
      </div>
      <div className="column">
       
      </div>
    </div>
    <Footer />
  </div>
    
  )
}


export default App
