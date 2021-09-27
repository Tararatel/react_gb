import { useState, useEffect, useRef } from 'react';
import { Button, TextField, List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';
import './style.css'

function App() {
  const [authorList, setAuthorList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [fullList, setFullList] = useState([]);

  const [chatList, setChatList] = useState([{id: 1, name: 'Robot'}, {id: 2, name: 'Neo'}]);
  const inputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    setFullList(prev => [...prev, {'author': authorList, 'text': messageList, 'index': prev.length}])
  }
  useEffect(() => {
    inputRef.current?.focus();     
    
    if (messageList.length > 0) {
      setTimeout(() => {
        alert(`Привет, я робот, а ты кожаный мешок. Последний автор: ${authorList[authorList.length - 1].author}`)
      }, 5000);
    }
  }, [authorList]);

  return (
    <div className="App">      
        <form>
          <input ref={inputRef} className="author" type="text" placeholder="Author" value={authorList} onChange={e => setAuthorList(e.target.value)} />
          <input className="text" type="text" placeholder="Text" value={messageList} onChange={e => setMessageList(e.target.value)}/>
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

        <ul>{fullList.map(obj => (
          <li key={obj.index}>
            {obj.author} - {obj.text}
          </li>
        ) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
