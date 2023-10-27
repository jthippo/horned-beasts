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
  const [horns, setHorns] = useState("");

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownbeast(beast);
  }

  function handleFilter(event) {
    setHorns(event.target.value);
  }

  return (
    <div>
      <Header />
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100</option>
      </select>
      <Gallery
        beasts={beasts}
        handleShowModal={handleShowModal}
        horns={horns}
      />
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
