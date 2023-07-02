import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Welcome from './Welcome';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/welcome' element={<Welcome />} />

        {/* Per cdo route tjeter qe shkruhet ne URL e nuk ekziston te Routes tona, navigo tek faqja Home, dmth '/' */}
        {/* <Route path='*' element={<Navigate to='/' />} /> */}

        {/* Per cdo route tjeter qe shkruhet ne URL navigo tek faqja 404 Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
