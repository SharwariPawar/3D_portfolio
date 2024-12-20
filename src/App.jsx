<<<<<<< HEAD
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home,About,Projects,Contact } from './pages';
import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
     <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
     </Router>   
    </main>
  )
}

=======
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home,About,Projects,Contact } from './pages';
import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
     <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
     </Router>   
    </main>
  )
}

>>>>>>> 4a7059b0e5a550f3e09b3f22e91fdac57dd4241f
export default App