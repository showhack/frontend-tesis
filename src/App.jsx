import { login } from "./api/auth"

async function generar() {
  const a = await login("hellshift", "1234")
  console.log(a)

}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={generar}>
          click
        </button>
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
