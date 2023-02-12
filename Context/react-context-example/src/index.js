import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlackPinkContext from "./contexts/BlackPinkContext";

const blackPink = [
  {
    name: '제니',
    eng_name: 'Jennie Kim',
    role: 'Lead Vocal',
    profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT55vGPpgwTmqOPP_JthS7cbSXwaD4gmS6aZObOT5KUJ1TCk7iHqPqqsaI&s=10"
  },
  {
    name: '지수',
    eng_name: 'Jisoo',
    role: 'Lead Vocal',
    profile_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2K5ch7QDYEw0Eq6VPBSsRvJxlmX4OIE7l4P7rlAxC4vW0wHV92N9yZg&s=10'
  },
  {
    name: '로제',
    eng_name: 'ROSÉ',
    role: 'Lead Dancer',
    profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLz4ldPbf1fI2hn6HvmFFVifqOWlr5n9xfllB6a-YcCb1zPZLGexzlrxk&s=10"
  },
  {
    name: '리사',
    eng_name: 'Lalisa Manobal',
    role: "Main Dancer",
    profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhzZbrIDYK5hXci1jAl1H53pRjr6fvV4kw1ik32lktdyYsqFs_cl3CWM&s=10"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BlackPinkContext.Provider value={blackPink}>
        <App/>
      </BlackPinkContext.Provider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
