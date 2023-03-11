import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import VideoSection from './Components/VideoSection';
import Statistics from './Components/Statistics';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <VideoSection />
      <Statistics />
      <ContactMe />
    </div>
  );
}

export default App;
