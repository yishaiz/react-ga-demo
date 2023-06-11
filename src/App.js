// import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import { useState } from 'react';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  console.log('render');
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal show={modalIsOpen} closed={() => closeModal()} />
      <Backdrop show={modalIsOpen} />
      <button className="Button" onClick={() => openModal()}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="title">Running Google Analytics</p>
    //   </header>
    //   <p>version : {version}</p>
    //   <form>
    //     <input type="text" name="myInput" />
    //   </form>
    // </div>
  );
}

export default App;
