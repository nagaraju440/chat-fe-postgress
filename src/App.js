import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SecondSection from './components/Secondsection/SecondSection.js'
import Section3  from './components/Section3/section3'
function App() {
  return (
     <div>
        <Navbar/>
        <SecondSection></SecondSection>
        <Section3></Section3>
     </div>
  );
}

export default App;
