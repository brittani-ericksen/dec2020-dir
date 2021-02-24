import './App.css';

function Hello(props) {
  return (
    <>
      <h1 className="title">Hello {props.name}!</h1>
      <h2>no div soup here :3</h2>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Brittani" />
      </header>
    </div>
  );
}

export default App;
