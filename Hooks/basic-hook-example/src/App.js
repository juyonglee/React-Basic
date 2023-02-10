import logo from './logo.svg';
import './App.css';
import MyClassCompExample from "./components/state/MyClassCompExample";
import MyFunctionCompExample from "./components/state/MyFunctionCompExample";
import MyHookFunctionComponent from "./components/state/MyHookFunctionComponent";

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
