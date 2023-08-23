import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BottomBar from "./components/BottomBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home  />

      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <BottomBar/>
    </div>
  );
}

export default App;
