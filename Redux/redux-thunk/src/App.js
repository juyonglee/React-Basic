import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer/>
      </header>
    </div>
  );
}

export default App;
