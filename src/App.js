import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-6">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col col-6">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
