import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beasts from "./data.json";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownbeast] = useState({});

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownbeast(beast);
  }

  return (
    <div>
      <Header />
      <Gallery beasts={beasts} handleShowModal={handleShowModal} />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default App;
