import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  text-align: center;
`;

const InputStyle = styled.input`
  width: 70%;
  height: 30px;
`;

const UpdateBtn = styled.button`
  color: white;
  border: 1px solid black;
  width: 80px;
  height: 30px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  background-color: skyblue;
`;

const MovieUpdateForm = (props) => {
  const { movie, inputHandle, movieUpdate, path } = props;
  return (
    <FormStyle>
      <h1>영화 상세정보</h1>
      제목{" "}
      <InputStyle
        type="text"
        name="title"
        value={movie.title}
        onChange={inputHandle}
        placeholder="제목입력"
      />
      <br />
      평점{" "}
      <InputStyle
        type="text"
        name="rating"
        value={movie.rating}
        onChange={inputHandle}
        placeholder="평점입력"
      />
      <br />
      내용{" "}
      <InputStyle
        type="text"
        name="summary"
        value={movie.summary}
        onChange={inputHandle}
        placeholder="줄거리입력"
      />
      <br />
      사진{" "}
      <InputStyle
        type="text"
        name="medium_cover_image"
        value={movie.medium_cover_image}
        onChange={inputHandle}
        placeholder="이미지주소 입력"
      />
      <br />
      <br />
      <img
        src={movie.medium_cover_image}
        style={{ width: "40%", height: 300 }}
      />
      <br />
      <br />
      <UpdateBtn onClick={movieUpdate}>
        {path === "movie" ? "등록하기" : "수정하기"}
      </UpdateBtn>
    </FormStyle>
  );
};

export default MovieUpdateForm;
