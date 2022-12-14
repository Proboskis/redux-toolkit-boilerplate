import Header from './components/Header/Header';
import Library from './components/Library/Library';
import AddBook from './components/AddBook/AddBook';
import './App.css';

function App() {
  return (
      <div className='App'>
        <Header />
        <AddBook />
        <Library />
      </div>
  );
}

export default App;
