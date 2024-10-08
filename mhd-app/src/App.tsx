import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
//const
import { BASE_URL } from './const/baseUrl';
//component
import Header from './component/Header';
import Footer from './component/Footer';
//page
import DashboardPage from './pages/DashboardPage';
import DiaryPage from './pages/DiaryPage';
import ActivityGraphPage from './pages/ActivityGraphPage';
import FeelingGraphPage from './pages/FeelingGraphPage';
import TipsPage from './pages/TipsPage';
import FindOutStrongPointPage from './pages/tips/FindOutStrongPointPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-full'>
        <Routes>
          <Route path={BASE_URL} element={<DashboardPage />}/>
          <Route path={BASE_URL + 'diary'} element = { <DiaryPage />} />
          <Route path={BASE_URL + 'activity-graph'} element= { <ActivityGraphPage />} />
          <Route path= {BASE_URL + 'feeling-graph'} element= { <FeelingGraphPage />} />
          <Route path= {BASE_URL + 'tips'} element = {<TipsPage />} />
          <Route path= {BASE_URL + 'tips/findout-strongpoint'} element = {<FindOutStrongPointPage />} />
          <Route path= "*" element= {<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
