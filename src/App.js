import logo from './logo.svg';
import './components/Message.css';
import Message from './components/Message';
import './App.css';

const myText = 'Привет, мир!';
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        My First React App
        <h3>Hello, {props.name}</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Message text={myText} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
