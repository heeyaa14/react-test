import React, { useEffect, useState } from "react";
import MovieUpdateForm from "./MovieUpdateForm";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  function movieFetch(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }

  useEffect(() => {
    movieFetch(props.match.params.id);
  }, []);

  const inputHandle = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const MovieUpdate = (e, history) => {
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie/" + movie.id, {
      method: "put",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("수정 완료!");
          props.history.push("/");
        }
      });
  };

  return (
    <div>
      <MovieUpdateForm
        inputHandle={inputHandle}
        movieUpdate={MovieUpdate}
        movie={movie}
        path="MovieDetail"
      />
    </div>
  );
};

export default MovieDetail;
