import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Route path="/" exact={true} component={MovieList} />
      <Route path="/movie" exact={true} component={Movie} />
      <Route path="/movie/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
