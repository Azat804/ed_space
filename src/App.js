import "./App.css";
import Header from "./components/blocks/Header";
import Main from "./components/blocks/Main";
import Education from "./components/blocks/Education";
import Possibility from "./components/blocks/Possibility";
import Advantages from "./components/blocks/Advantage";
import Contacts from "./components/blocks/Contacts";
import Footer from "./components//blocks/Footer";
import Modal from "./components/blocks/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const obj = {
    openModal: () => {
      setIsModalOpen(true);
    },
    closeModal: () => {
      setIsModalOpen(false);
    },
  };
  return (
    <>
      <Header />
      <Main openModal={openModal} />
      <Education openModal={openModal} />
      <Possibility openModal={openModal} />
      <Advantages openModal={openModal} />
      <Contacts />
      <Footer />
      {isModalOpen ? <Modal closeModal={closeModal} /> : ""}
    </>
  );
}

export default App;
