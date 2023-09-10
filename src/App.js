import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from  './components/Contact';
import News from './components/News';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Partners from './components/Partners';
import Who_we_are from './components/Who_we_are';
import What_we_do from './components/Who_we_are';



function App() {
    return (
        <div className='page-container'>
            <div className='content-wrap'>      
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/who_we_are' element ={<Who_we_are/>}/>
                        <Route path='/what_we_do' element ={<What_we_do/>}/>
                        <Route path='/contact' element ={<Contact/>}/>
                        <Route path='/news' element ={<News/>}/>
                        <Route path='/partners' element ={<Partners/>}/>
                    </Routes>
                    <Footer/> 
                </BrowserRouter> 
            </div>
        </div>
    );

}

export default App;