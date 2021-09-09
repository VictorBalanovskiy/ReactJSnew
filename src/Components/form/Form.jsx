import { useState, useRef } from "react";
import React from "react";
import "./Form.css";
import { TextField, Button } from "@material-ui/core";

export const Form = ({handleChangeMessageList}) => {
  const [author, setAuthor] = useState();
  const [text, setText] = useState();

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChange = () => {
    handleChangeMessageList({ author, text });

    setAuthor('');
    setText('');

  };

  const inputRef = useRef();

  return (
    <div className="myForm">
      <TextField
        className="myInput"
        margin="normal"
        type="text"
        onChange={handleChangeAuthor}
        label="AUTHOR"
        id="myTextField"
      />
      <TextField
        autoFocus
        ref={inputRef}
        color="secondary"
        margin="normal"
        className="myTextarea"
        onChange={handleChangeText}
        id="standard-basic"
        label="MESSAGE"
      />
      <Button
        size="small"
        color="primary"
        variant="contained"
        className="myButton"
        onClick={handleChange}
      >
        Send
      </Button>
    </div>
  );
};
