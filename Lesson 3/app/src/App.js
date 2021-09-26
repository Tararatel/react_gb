import { useState, useEffect, useRef } from 'react';
import { Button, TextField, List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';
import './style.css'

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([{id: 1, name: 'Robot'}, {id: 2, name: 'Neo'}]);
  const inputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const author = document.querySelector('.author');
    const text = document.querySelector('.text');

    setMessageList(prev => [...prev, {'author': author.value, 'text': text.value, 'index': prev.length}])
  }
  useEffect(() => {
    inputRef.current?.focus();     
    
    if (messageList.length > 0) {
      setTimeout(() => {
        alert(`Привет, я робот, а ты кожаный мешок. Последний автор: ${messageList[messageList.length - 1].author}`)
      }, 5000);
    }
  }, [messageList]);

  return (
    <div className="App">
      
        <form>
          <input ref={inputRef} variant="standard" id="standard-basic" className="author" type="text" placeholder="Author" />
          <input variant="standard" id="standard-basic" className="text" type="text" placeholder="Text" />
          <Button variant="contained" type="submit" onClick={submitHandler}>Submit</Button>
        </form>
      <div className="wrapper">
        <div className="chats">
          <List>
          {chatList.map((object, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText primary={object.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </div>

        <ul>{messageList.map((obj, index) => (
          <li key={index}>
            {obj.author} - {obj.text}
          </li>
        ) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
