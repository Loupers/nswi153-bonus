import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Down from './down.js';
import Up from './up';
import A from './about';
import Layout from './layout';
import { ContextProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

const Context = React.createContext();

export default function App() {
  return (
    <div>
      < Router >
        <Routes>
          <Route index element={<Layout />} />
          <Route path="About" element={<A />} />
          <Route path="up" element={<Up />} />
          <Route path="down" element={<Down />} />
        </Routes>
      </ Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider><App /></ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
