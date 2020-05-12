import React from "react";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import Users from "./hooks/users";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Movie id="1" />
      <Counter />
      <Users />
    </React.Fragment>
  );
}

export default App;
