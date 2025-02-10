// import './App.css';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Preview from './components/Preview';
import MyDictionaty from './components/MyDictionary';
import FormWord from './components/FormWord';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Preview />
        <Card />
        <MyDictionaty />
      </main>
      <Footer />
    </div>
  );
}

export default App;
