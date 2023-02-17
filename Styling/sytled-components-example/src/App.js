import logo from './logo.svg';
import './App.css';
import MyStyledButton from "./components/MyStyledButton";
import MyStyledButton01 from "./components/MyStyledButton01";
import MyStyledButton02 from "./components/MyStyledButton02";
import MyPrimaryStyledButton from "./components/MyPrimaryStyledButton";
import MyUpperCaseButton from "./components/MyUpperCaseButton";
import {createGlobalStyle} from "styled-components";
import MyStyledA from "./components/MyStyledA";

const GlobalStyle = createGlobalStyle`
  button {
    color: yellow;
  }
`

function App() {
  return (
    <div className="App">
      {/*<GlobalStyle></GlobalStyle>*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>
              <MyStyledButton>Style을 적용하지 않은 기본 Button</MyStyledButton>
            </p>
            <p>
              <MyStyledButton01>Style을 적용한 Button</MyStyledButton01>
            </p>
            <p>
              <MyStyledButton02 primary>props를 이용하여 Style을 적용한 Button</MyStyledButton02>
            </p>
            <p>
              <MyPrimaryStyledButton>기존의 Component를 이용하여 Style을 적용한 Button</MyPrimaryStyledButton>
            </p>
            <p>
              <MyStyledButton as="a" href="/">기존의 Styled Element을 다른 Tag처럼 이용하기</MyStyledButton>
            </p>
            <p>
              <MyStyledButton as={MyUpperCaseButton}>Button</MyStyledButton>
            </p>
            <p>
              <MyStyledA>Test</MyStyledA>
            </p>
          </div>
        </header>
    </div>
  );
}

export default App;
