import logo from './logo.svg';
import './App.css';
import MyClassCompExample from "./components/state/MyClassCompExample";
import MyFunctionCompExample from "./components/state/MyFunctionCompExample";
import MyHookFunctionComponent from "./components/state/MyHookFunctionComponent";
import MyClassCompLifeEx from "./components/lifecycle/MyClassCompLifeEx";
import MyFuncLifeEx from "./components/lifecycle/MyFuncLifeEx";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>State Example</h3>
          <MyClassCompExample/>
          <MyFunctionCompExample/>
          <MyHookFunctionComponent/>
          <h3>Life Cycle Example</h3>
          <MyClassCompLifeEx/>
          <MyFuncLifeEx/>
        </header>
      </div>
  );
}

export default App;
