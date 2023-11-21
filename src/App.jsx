

import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;