import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import DemoComponent from './components/DemoComponent';
import Demo from './Demo';
import MyMethod from './components/Method';
import MyClassComponent from './components/MyClassComponent';
import PropsObject from './components/PropsObject';

function App() {

  let product = {
    productName : "Hp-123",
    cost  : 2500
  }

  return (
    <div>
       Hello this app
        <Welcome username="Ramesh" role="admin"/>
        <hr/>
        <DemoComponent/>
        <hr/>
        <Demo/>
        <hr/>
        <MyMethod/>
        <hr/>
        <MyClassComponent/>
        <hr/>
        <PropsObject data={product}/>
    </div>
  );
}

export default App;
