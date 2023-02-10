import logo from './logo.svg';
import './App.css';
import MyControlledComponent from "./components/MyControlledComponent";
import MyUncontrolledComponent from "./components/MyUncontrolledComponent";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <MyControlledComponent/>
          <MyUncontrolledComponent/>
        </header>
      </div>
  );
}

export default App;
