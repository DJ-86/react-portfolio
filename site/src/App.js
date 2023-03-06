import BasicExample from './components/Navbar';
import Typewriter from 'typewriter-effect';
import Squares from './components/Squares';
import Gallery from './components/Gallery'
import './App.css';
import GenerateSquares from './components/Squares';

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
      <div className ="introText">
      <Typewriter
        onInit={(typewriter) => {
        typewriter.typeString("Hi, my name is David Jones. I'm a dev from the UK.")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .start();
  }}
/>
      </div>
      <Gallery />

    </div>
  );
}

export default App;
