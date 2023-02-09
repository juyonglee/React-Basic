import logo from './logo.svg';
import './App.css';
import MyControlledComponent from "./components/MyControlledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyControlledComponent/>
      </header>
    </div>
  );
}

export default App;
