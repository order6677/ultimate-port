import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
   <div>
    <NavBar  />
    <Home />
    <About />
    <Sociallinks /> 
    <Portfolio />
   </div>
  );
}

export default App; 
