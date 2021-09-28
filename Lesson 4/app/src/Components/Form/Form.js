import "../../style.css";
import { Button } from "@material-ui/core";
import { useState, useRef } from "react";

const Form = () => {
  const [authorList, setAuthorList] = useState([]);
  const [textList, setTextList] = useState([]);
  const [message, setMessage] = useState([]);
  const inputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    setMessage((prev) => [
      ...prev,
      { author: authorList, text: textList, index: prev.length },
    ]);
  };
  return (
    <div className="form">
      <form>
        <input
          ref={inputRef}
          className="author"
          type="text"
          placeholder="Author"
          value={authorList}
          onChange={(e) => setAuthorList(e.target.value)}
        />
        <input
          className="text"
          type="text"
          placeholder="Text"
          value={textList}
          onChange={(e) => setTextList(e.target.value)}
        />
        <Button variant="contained" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </form>

      <ul>
        {message.map((obj) => (
          <li key={obj.index}>
            {obj.author} - {obj.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
