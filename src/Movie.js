import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  text-align: center;
`;

const InputStyle = styled.input`
  width: 60%;
  height: 25px;
  margin-top: 10px;
`;

const BtnSumbit = styled.button`
  color: white;
  border: 1px solid black;
  width: 80px;
  height: 30px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  background-color: skyblue;
`;

const BtnReset = styled.button`
  color: white;
  border: 1px solid black;
  width: 80px;
  height: 30px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  background-color: skyblue;
  margin: 10px;
`;

const Movie = (props) => {
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
          props.history.push("/");
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
    <FormStyle>
      <h1>영화 등록페이지</h1>
      제목{" "}
      <InputStyle
        type="text"
        onChange={inputHandle}
        value={movie.title}
        name="title"
        placeholder="제목입력"
      />
      <br />
      평점{" "}
      <InputStyle
        type="text"
        onChange={inputHandle}
        value={movie.rating}
        name="rating"
        placeholder="평점입력"
      />
      <br />
      내용{" "}
      <InputStyle
        type="text"
        onChange={inputHandle}
        value={movie.summary}
        name="summary"
        placeholder="줄거리입력"
      />
      <br />
      사진{" "}
      <InputStyle
        type="text"
        onChange={inputHandle}
        value={movie.medium_cover_image}
        name="medium_cover_image"
        placeholder="이미지주소 입력"
      />
      <br />
      <br />
      <BtnSumbit onClick={submit}>등록</BtnSumbit>
      <BtnReset onClick={reset}>리셋</BtnReset>
    </FormStyle>
  );
};

export default Movie;
