import './App.css';
import Quick from './components/quick';
import Profile from './components/profile';
import Intro from './components/intro';
import Skills from './components/skills';
import Project from './components/project';

function App() {

  return (
    <div className="App">
        
      <Quick />
      <Intro />
      <Profile />
      <Skills />
      <Project />
      
      <footer>
      </footer>
    </div>
  );
}

export default App;
