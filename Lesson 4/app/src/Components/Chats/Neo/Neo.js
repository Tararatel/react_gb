import { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import "../../../style.css";

const Neo = ({ messageNeo }) => {
  const [authorList, setAuthorList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [fullList, setFullList] = useState([]);

  const inputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    setFullList((prev) => [
      ...prev,
      { author: authorList, text: messageList, index: prev.length },
    ]);
  };

  return (
    <div>
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
          value={messageList}
          onChange={(e) => setMessageList(e.target.value)}
        />
        <Button variant="contained" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </form>
      <div className="wrapper">
        <ul>
          {messageNeo.map((obj) => (
            <li key={obj.index}>
              {obj.name} - {obj.text}
            </li>
          ))}
          {fullList.map((obj) => (
            <li key={obj.index}>
              {obj.author} - {obj.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Neo;
