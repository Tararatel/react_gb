import { useState, useEffect } from 'react'

function App() {
  const [messageList, setMessageList] = useState([])

  const submitHandler = (event) => {
    event.preventDefault();
    const author = document.querySelector('.author');
    const text = document.querySelector('.text');

    setMessageList(prev => [...prev, {'author': author.value, 'text': text.value, 'index': prev.length}])
  }
  useEffect(() => {
    
    if (messageList.length > 0) {
      setTimeout(() => {
        alert(`Привет, я робот, а ты кожаный мешок. Последний автор: ${messageList[messageList.length - 1].author}`)
      }, 5000)     
    }
  }, [messageList]);

  return (
    <div className="App">
      <form>
        <input className="author" type="text" placeholder="Author" />
        <input className="text" type="text" placeholder="Text" />
        <button type="submit" onClick={submitHandler}>Submit</button>
      </form>

      <ul>{messageList.map((obj, index) => (
        <li key={index}>
          {obj.author} - {obj.text}
        </li>
      ) )}
      </ul>
    </div>
  );
}

export default App;
