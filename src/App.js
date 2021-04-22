import './App.css';
import Board from './components/Board'
import Browser from './components/Browser/Browser'
import Properties from './components/Properties'
function App() {
  return (
    <div className="App">
      <Browser></Browser>
      <Board></Board>
      <Properties></Properties>
    </div>
  );
}

export default App;
