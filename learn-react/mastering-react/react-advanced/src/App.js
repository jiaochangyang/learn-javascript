import React, { Component } from "react";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import Users from "./hooks/users";
import MoviePage from "./context/moviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/login";
import "./App.css";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user:", username);
    const user = { name: "CYJ" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: { name: null } };

  render() {
    return (
      <React.Fragment>
        <Movie id="1" />
        <Counter />
        <Users />
        <CartContext.Provider value={{ cart: [] }}>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            <MoviePage />
            <Login />
          </UserContext.Provider>
        </CartContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
