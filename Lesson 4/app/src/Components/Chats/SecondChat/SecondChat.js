import "../../../style.css";
import Form from "../../Form/Form";

const SecondChat = ({ secondChatList }) => {
  return (
    <div>
      <Form />
      <div className="wrapper">
        <ul>
          {secondChatList.map((obj) => (
            <li key={obj.id}>
              {obj.name} - {obj.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondChat;
