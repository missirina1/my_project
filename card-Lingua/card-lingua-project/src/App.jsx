// import './App.css';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Preview from './components/Preview/Preview';
import MyDictionaty from './components/MyDictionary/MyDictionary';
// import FormWord from './components/FormWord';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Preview />
        <MyDictionaty />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
