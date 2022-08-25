import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){
  return (<><div className='container'>
          <div className='header'>
            <div className='logo'>Wtech</div>
            <div className='nav'>
              <ul>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Services</a></li>
                <li><a>Blogs</a></li>
                <li><a>Contact Us</a></li>
              </ul>
            </div>
          </div>

        </div></>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);