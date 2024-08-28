import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './SideNavbar';
import WhatIsWhat from './HomePage';
import AddBlog from './ItemAdd';
import PdfShow from './PdfShow';

function App() {
  return (
    <>
    <Router>
      <HomePage />
      <Routes>
      <Route exact path="/" element={<WhatIsWhat />} />
      <Route exact path="/add-blog" element={<AddBlog />} />
      <Route exact path="/how-to-learn" element={<PdfShow />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
