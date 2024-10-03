import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import { Dashboard } from '@mui/icons-material';
import DiaryPage from './pages/DiaryPage';
import ActivityGraphPage from './pages/ActivityGraphPage';
import FeelingGraphPage from './pages/FeelingGraphPage';
import TipsPage from './pages/TipsPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<DashboardPage />}/>
          <Route path='/diary' element = { <DiaryPage />} />
          <Route path='/activity-graph' element= { <ActivityGraphPage />} />
          <Route path='/feeling-graph' element= { <FeelingGraphPage />} />
          <Route path='/tips' element = {<TipsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
