
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {


  return (
    <main className="font-['Lato'] img-font  ">
      <div className="max-w-[950px] mx-auto">
        <Header />
        <Home />
        <NavBar />
        <Projects />
        <div className=" min-h-screen"></div>
      </div>
    </main>
  );
}

export default App
