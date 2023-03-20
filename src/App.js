// import logo from './logo.svg';
import './App.css';
import './modules/Book'
import Header from './modules/Header';
import ListOfBooks from './modules/ListOfBooks';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListOfBooks></ListOfBooks>
    </div>
  );
}

export default App;
