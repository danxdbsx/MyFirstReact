import logo from '../w_2313.png';
import '../App.css';
//import Button from './js/Button';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
//test


const Home = () => {
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
        <Greet name = {Hello()} heroName = "Spiderman">
          <Message></Message>
        </Greet>
        <Greet name = "Stephen" heroName = "Doctor Strange"></Greet>
        <Greet name = "Wanda" heroName = "Scarlet Witch"/>
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

export default Home;
