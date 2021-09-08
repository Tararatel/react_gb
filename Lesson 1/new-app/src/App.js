
import Message from "./components/Message/Message";

const messageText = "Передаём текст пропсом";

function App() {
  return (
    <div className="App">
      <Message messageProps={messageText}/>
    </div>
  );
}

export default App;
