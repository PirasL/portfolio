import "./App.css";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";

function App() {
  function scrollToAnchor() {}
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
