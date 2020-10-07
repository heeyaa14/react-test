import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CardStyle = styled.div`
  height: 500px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  box-shadow: 1px 1px 0px 0px rgb(54, 53, 53);
  margin: 10px;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  function movieFetch() {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }

  useEffect(() => {
    movieFetch();
  }, []);

  const deleteById = (id) => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movie) => movie.id !== id));
          alert(id + "번 삭제성공!");
        }
      });
  };

  return (
    <div className="container">
      <GridStyle>
        {movies.map((movie) => (
          <CardStyle key={movie.id}>
            <img
              src={movie.medium_cover_image}
              style={{ width: "100%", height: 300 }}
            />
            <h3>{movie.title}</h3>
            <Link className="btnUpdate" movie={movie} to={"/movie/" + movie.id}>
              상세보기
            </Link>

            <button className="btnDelete" onClick={() => deleteById(movie.id)}>
              삭제
            </button>
          </CardStyle>
        ))}
      </GridStyle>
    </div>
  );
};
export default MovieList;
