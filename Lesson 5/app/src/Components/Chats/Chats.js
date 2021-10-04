import { Link, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@material-ui/core";
import "../../style.css";
import FirstChat from "./FirstChat/FirstChat";
import SecondChat from "./SecondChat/SecondChat";

const Chats = () => {
  const [chatList] = useState([
    { id: 1, chat: "firstchat", name: "Чат #1" },
    { id: 2, chat: "secondchat", name: "Чат #2" },
  ]);
  const [firstChatList, setFirstChatList] = useState([
    { id: 1, name: "Олег", text: "Привет" },
    { id: 2, name: "Борис", text: "Ё" },
  ]);
  const [secondChatList, setSecondChatList] = useState([
    { id: 1, name: "Масяня", text: "Привет" },
    { id: 2, name: "Кот", text: "Ё" },
  ]);

  return (
    <div>
      <div className="wrapper">
        <div className="chats">
          <Route exact path="/chats/firstchat">
            <FirstChat
              firstChatList={firstChatList}
              setFirstChatList={setFirstChatList}
            />
          </Route>
          <Route exact path="/chats/secondchat">
            <SecondChat
              secondChatList={secondChatList}
              setSecondChatList={setSecondChatList}
            />
          </Route>
          <Redirect to={"/chats"} />

          <List>
            {chatList.map((object, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <Link to={`/chats/${object.chat}`}>
                    <ListItemText primary={object.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Chats;
