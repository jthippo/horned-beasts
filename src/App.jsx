import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import beastArr from "./data.json";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Gallery beasts={beastArr} />
      <Footer />
    </div>
  );
}

export default App;
