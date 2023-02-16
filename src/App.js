import './App.css';
import Box from './components/Box/Box';
import Quiz from './components/Quiz/Quiz';
function App() {
  const data = ["hello", "world"]
  const data2 = data.map(el => el.charAt(0).toLocaleUpperCase() + el.slice(1) + " ")

  const num1 = 5
  const num2 = 6
  const string = "I love React!"


  return (
    <div className="App">
      <header className="App-header">
        <p>
          AppleSeeds React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          click me
        </a>
      </header>
      <hr />
      <p>{data2[0]} {data2[1]}</p>
      <p>{num1 + num2}</p>
      <p>The string's length is {string.length}</p>
      <hr />

      <Box color="green" height="500px" width="500px">
        <Box color="blue" height="400px" width="400px">
          <Box color="pink" height="300px" width="300px">
            <Box color="purple" height="70px" width="150px" />
            <Box color="purple" height="70px" width="150px" />
          </Box>
        </Box>
      </Box>
      <hr />

      <Quiz title="How do you like front end" />
    </div>
  );
}

export default App;
