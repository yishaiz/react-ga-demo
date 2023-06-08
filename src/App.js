import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">Running Google Analytics (updated)</p>
      </header>
      <form>
        <input type="text" name="myInput" />
      </form>
    </div>
  );
}

export default App;
