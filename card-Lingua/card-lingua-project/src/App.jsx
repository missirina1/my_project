// import './App.css';
import './App.scss';
import Header from './components/Structure/Header';
import Footer from './components/Structure/Footer';
import AppRoutes from './components/Routes/AppRoutes';
import Preview from './components/Preview/Preview';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Preview />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
