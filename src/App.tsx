import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import BrandCom from './pages/BrandCom';
import WritePost from './pages/WritePost';
import ShopCom from './pages/ShopCom';
import FreeCom from './pages/FreeCom';

import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      
      <MainPage/>
      <Routes>
      <Route index element = {<BrandCom />} />
        <Route path = "/post-write" element={<WritePost />} />
        <Route path = "/BrandCommunity" element={<BrandCom />} />
        <Route path = "/ShopCommunity" element={<ShopCom />} />
        <Route path = "/FreeCommunity" element={<FreeCom />} />
      </Routes>
      
    </Layout>
    
    </BrowserRouter>
    
  );
}

/*
function App() {
  return (
    <BrowserRouter>
    <Layout>
      
      <BrandCom/>
      <Routes>
      <Route index element = {<BrandCom />} />
        <Route path = "/post-write" element={<WritePost />} />
        <Route path = "/BrandCommunity" element={<BrandCom />} />
        <Route path = "/ShopCommunity" element={<ShopCom />} />
        <Route path = "/FreeCommunity" element={<FreeCom />} />
      </Routes>
      
    </Layout>
    
    </BrowserRouter>
    
  );
}
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;