import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Intro />
        <Skills />
      </main>
    </div>
  );
}

export default App;
