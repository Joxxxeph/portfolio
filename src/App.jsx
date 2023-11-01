
import './App.css'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Stack from './components/Stack';

function App() {


  return (
    <main className="font-['Lato'] img-font  ">
      <div className="max-w-[950px] mx-auto">
        <Header />
        <Home />
        <NavBar />
        <Projects />
        <Stack />
        <AboutMe />
        <Contact />
        <div className=" min-h-screen"></div>
      </div>
    </main>
  );
}

export default App
