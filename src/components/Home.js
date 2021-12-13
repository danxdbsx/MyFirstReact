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
          Exempted daw sa exam pag napublish lezgo!!!
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
      </header>
    </div>
  );
}

export default Home;
