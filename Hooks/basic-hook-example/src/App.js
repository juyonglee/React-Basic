import logo from './logo.svg';
import './App.css';
import MyClassCompExample from "./components/MyClassCompExample";
import MyFunctionCompExample from "./components/MyFunctionCompExample";
import MyHookFunctionComponent from "./components/MyHookFunctionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyClassCompExample/>
        <MyFunctionCompExample/>
        <MyHookFunctionComponent/>
      </header>
    </div>
  );
}

export default App;
