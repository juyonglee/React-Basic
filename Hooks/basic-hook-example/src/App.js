import logo from './logo.svg';
import './App.css';
import MyClassCompExample from "./components/MyClassCompExample";
import MyFunctionCompExample from "./components/MyFunctionCompExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyClassCompExample/>
        <MyFunctionCompExample/>
      </header>
    </div>
  );
}

export default App;
