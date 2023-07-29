import "./App.css";
import Footer from "./Routes/Footer";
import Navbar from "./Routes/Navbar";
import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
      {/* <Calendar/> */}

    </div>
  );
}

export default App;
