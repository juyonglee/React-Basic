import logo from './logo.svg';
import './App.css';
import MyClassCompExample from "./components/MyClassCompExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyClassCompExample/>
      </header>
    </div>
  );
}

export default App;
