import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from  './Components/Contact';
import News from './Components/News';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Partners from './Components/Partners';
function App() {
    return (
        <div className='page-container'>
            <div className='content-wrap'>      
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element ={<About/>}/>
                        <Route path='/contact' element ={<Contact/>}/>
                        <Route path='/news' element ={<News/>}/>
                        <Route path='/partners' element ={<Partners/>}/>
                        <Route path='eyp-web-1' element ={<Home/>}/>
                    </Routes>
                    <Footer/> 
                </BrowserRouter> 
            </div>
        </div>
    );
}

export default App;