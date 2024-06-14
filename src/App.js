import "./App.css";
import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <p>
          <Search />
        </p>
      </header>
      <footer>
        Coded by{" "}
        <a href="https://www.linkedin.com/in/bruna-righesso-23175622/">
          Bruna Righesso
        </a>
        , Open-sourced on
        <a href="https://github.com/brunarighesso/my-app"> GitHub</a> and hosted
        on <a href="https://wetter-app-mit-react.netlify.app/">Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
