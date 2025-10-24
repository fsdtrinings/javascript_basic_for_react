import logo from './logo.svg';
import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';

function App() {
  return (
    <div>
      <Demo1 amount="10000" percentange="2" username="ramesh"/>
    
      <hr/>
      <Demo2/>
      <hr/>
      <Demo3/>
    
    </div>
  );
}

export default App;
