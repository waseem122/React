import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Content(){
  return (<><div className='content'>
          <h1>Wtech And App Development</h1>
          <p>This is Web and App Development plateform</p>
          <button>Watch Free Videos</button>
          <button>Download Apps</button>
          </div></>)
}

function App(){
  return (<><div className='container'>
          <div className='header'>
            <div className='logo'>Wtech</div>
            <div className='nav'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Blogs</a></li>
                <li><a href='#'>Contact Us</a></li>
              </ul>
            </div>
          </div>
          <Content/>

        </div></>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);