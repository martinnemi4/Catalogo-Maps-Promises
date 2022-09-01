import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <NavBar/>
        </header>
      </div>
      <div className='productos'>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
