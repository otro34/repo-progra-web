import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS IS THE HOME COMPONENT.
        </p>
        <a
          className="App-link"
          href="/contactus"
          rel="noopener noreferrer"
        >
          CONTACTANOS 
        </a>
      </header>
    </div>
  );
}

export default Home;
