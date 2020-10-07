import React, { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function submit(e) {
    e.preventDefault();
    console.log(movie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("등록성공!");
        }
      });
  }

  function reset(e) {
    e.preventDefault();
    setMovie({
      title: "",
      rating: "",
      summary: "",
      medium_cover_image: "",
    });
    console.log(movie);
  }

  return (
    <div>
      <form>
        <h1>영화 등록페이지</h1>
        제목 :{" "}
        <input
          type="text"
          onChange={inputHandle}
          value={movie.title}
          name="title"
          placeholder="제목입력"
        />
        <br />
        평점 :{" "}
        <input
          type="text"
          onChange={inputHandle}
          value={movie.rating}
          name="rating"
          placeholder="평점입력"
        />
        <br />
        줄거리 :{" "}
        <input
          type="text"
          onChange={inputHandle}
          value={movie.summary}
          name="summary"
          placeholder="줄거리입력"
        />
        <br />
        사진 :{" "}
        <input
          type="text"
          onChange={inputHandle}
          value={movie.medium_cover_image}
          name="medium_cover_image"
          placeholder="이미지주소 입력"
        />
        <br />
        <br />
        <button onClick={submit}>등록</button>
        <button onClick={reset}>리셋</button>
      </form>
    </div>
  );
};

export default Movie;
