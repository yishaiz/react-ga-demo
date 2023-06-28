import React from 'react';
import './Home.css';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import List from '../List/List';
import { useState } from 'react';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  console.log('render');
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal show={modalIsOpen} closed={() => closeModal()} />
      <Backdrop show={modalIsOpen} />
      {/* <button className="Button" onClick={() => openModal()}>
        Open Modal
      </button> */}
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default Home;
