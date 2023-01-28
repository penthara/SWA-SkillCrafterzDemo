import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section id="home">
      <h1>Welcome to My Website</h1>
      <p>This is a sample website.</p>
    </section>
    <section id="about">
      <h1>About Us</h1>
      <p>Learn more about our company and team.</p>
    </section>
    <section id="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </section>
    </div>
  );
}

export default App;
