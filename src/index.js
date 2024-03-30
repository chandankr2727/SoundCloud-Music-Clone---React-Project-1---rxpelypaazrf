import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MusicProvider } from './Contexts/musicContext';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './Contexts/authenticationContext';
import { AudioProvider } from './Contexts/audioContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MusicProvider>
      <UserProvider>
        <AudioProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </AudioProvider>
      </UserProvider>
    </MusicProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
