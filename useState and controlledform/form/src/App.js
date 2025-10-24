import logo from './logo.svg';
import './App.css';
import ProductForm from './component/ProductForm';
import DisplayProducts from './component/DisplayProducts';

function App() {
  return (
    <div>
      <table>
        <tr>
          <td> <ProductForm/> </td>
          <td> <DisplayProducts/> </td>
          
        </tr>
      </table>
        
    </div>
  );
}

export default App;
