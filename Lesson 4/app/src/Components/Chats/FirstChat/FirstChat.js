import "../../../style.css";
import Form from "../../Form/Form";

const FirstChat = ({ firstChatList }) => {
  return (
    <div>
      <Form />
      <div className="wrapper">
        <ul>
          {firstChatList.map((obj) => (
            <li key={obj.id}>
              {obj.name} - {obj.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirstChat;
