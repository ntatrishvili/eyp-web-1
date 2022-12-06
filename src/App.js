import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
    return (
        <div className='page-container'>
            <div className='content-wrap'>
                <React.Fragment>
                    <Navbar />
                </React.Fragment>
            </div>
            <Footer/> 
        </div>
    );
}

export default App;