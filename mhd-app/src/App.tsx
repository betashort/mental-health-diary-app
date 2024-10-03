import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import DiaryPage from './pages/DiaryPage';
import ActivityGraphPage from './pages/ActivityGraphPage';
import FeelingGraphPage from './pages/FeelingGraphPage';
import TipsPage from './pages/TipsPage';
import DashboardPage from './pages/DashboardPage';
import { BASE_URL } from './const/baseUrl';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-full'>
        <Routes>
          <Route path={BASE_URL} element={<DashboardPage />}/>
          <Route path={BASE_URL + '/diary'} element = { <DiaryPage />} />
          <Route path={BASE_URL + '/activity-graph'} element= { <ActivityGraphPage />} />
          <Route path= {BASE_URL + '/feeling-graph'} element= { <FeelingGraphPage />} />
          <Route path= {BASE_URL + '/tips'} element = {<TipsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
