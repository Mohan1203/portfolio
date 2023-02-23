import './App.css';
import MainPage from './component/mainpage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./component/header";
import Footer from "./component/footer";
import AboutMe from './component/aboutme';
import ContactMe from './component/contactme';

function App() {

  function photoshackle(e){
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.getElementById("profilephoto").style.transform = "translate(+"+x*10+"px,+"+y*10+"px)";


}
  return (
    document.body.style.backgroundColor = "#0081C9",
      <Router>
    <div className="App" onMouseMove={photoshackle}>
    <Header />

 

         <Routes>
         <Route path="/" element={<MainPage/>}/>
         <Route path="/about" element={<AboutMe/>}/>
         <Route path="/contactme" element={<ContactMe/>}/>
         </Routes>
        <Footer />
    </div>
      </Router>
  );
}

export default App;
// https://lmpixels.com/wp/leven-wp/
