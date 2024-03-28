import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import MainLayout from '../src/components/mainpageUI/MainLayout'
import BrandCom from './pages/BrandCom';
import WritePost from './pages/WritePost';
import ShopCom from './pages/ShopCom';
import FreeCom from './pages/FreeCom';

import MainPage from './pages/MainPage';
import TimerScroll from './components/mainpageUI/TimerScroll';
import VintageNews from './pages/VintageNews';
import Loading from './pages/Loading';
import Footer from './components/Footer';
import ComLayout from './components/mainpageUI/CommunityLayout';

function App() {
  const currentPath = "/BrandCommunity";
  return (
    <BrowserRouter>
    
      
      
      {/*
      <Routes>
      <Route index element = {<BrandCom />} />
        <Route path = "/post-write" element={<WritePost />} />
        <Route path = "/BrandCommunity" element={<BrandCom />} />
        <Route path = "/ShopCommunity" element={<ShopCom />} />
        <Route path = "/FreeCommunity" element={<FreeCom />} />
      </Routes>
  */}
      <Routes>
      <Route index element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/" element={<TimerScroll />} />
          <Route path="/banner/:id" element={<VintageNews />} />
          <Route path="/BrandCommunity" element={<ComLayout currentPath="/BrandCommunity"><BrandCom/></ComLayout>} />
          <Route path="/ShopCommunity" element={<ComLayout currentPath="/ShopCommunity"><ShopCom/></ComLayout>} />
          <Route path="/FreeCommunity" element={<ComLayout currentPath="/FreeCommunity"><FreeCom/></ComLayout>} />
          <Route path={`${currentPath}/WritePost`} element={<WritePost />} />
      </Routes>
    
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