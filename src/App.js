import logo from './w_2313.png';
import './App.css';
//import Button from './js/Button';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';

function App() {
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. gusto ko na mag-genshin.
        </p>
        <p>{Hello()}</p>
        <div>
            <Button />
        </div>
        <Greet name = {"Peter"} heroName = "Spiderman">
          <Message></Message>
        </Greet>
        <Greet name = "Tony" heroName = "Iron Man">
            <Button/>
        </Greet>
        <Greet name = "Thor" heroName = "Thor"/>
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