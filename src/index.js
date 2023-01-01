import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<>
        <App/>
</>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <BrowserRouter>
//     <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/about' element ={<About />}/>
//         <Route path='/contact' element ={<Contact />}/>
//         <Route path='/news' element ={<News />}/>
//     </Routes>
//         <div>Hello World!</div>
//     </BrowserRouter>
// )