import BasicExample from './components/Navbar';
import Typewriter from 'typewriter-effect';
import Gallery from './components/Gallery'
import './App.css';
import GenerateSquares from './components/Squares';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <div className="squares" />
      <GenerateSquares />
      <BasicExample  />
      
      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString("Hi, my name is David Jones. I'm a dev from the UK.")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .start();
  }}
/>
      <About />
      <Skills />
      <Gallery />
      <Contact />

    </div>
  );
}

export default App;
