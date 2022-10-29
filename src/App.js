import logo from './logo.svg';
import './App.css';
// * The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders
// * A store that holds the state of your application.
// * An action that describes the changes in the state of the application.
// * A reducer which actually carries out the state transition depending on the action.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
