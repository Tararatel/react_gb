import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../style.css";
import Neo from "./Neo/Neo";
import Robot from "./Robot/Robot";

const Chats = () => {
  const [chatList] = useState([
    { id: 1, name: "Robot" },
    { id: 2, name: "Neo" },
  ]);
  const [messageNeo, setMessageNeo] = useState([
    { id: 1, name: "Олег", text: "Привет" },
    { id: 2, name: "Борис", text: "Ё" },
  ]);
  const [messageRobot, setMessageRobot] = useState([
    { id: 1, name: "Масяня", text: "Привет" },
    { id: 2, name: "Кот", text: "Ё" },
  ]);
  return (
    <div>
      <Router>
        <div className="wrapper">
          <div className="chats">
            <Route exact path="/chats/neo" component={Neo}>
              <Neo messageNeo={messageNeo} setMessageNeo={setMessageNeo} />
            </Route>
            <Route exact path="/chats/robot" component={Robot}>
              <Robot
                messageRobot={messageRobot}
                setMessageNeo={setMessageRobot}
              />
            </Route>
            <List>
              {chatList.map((object, index) => (
                <ListItem key={index}>
                  <ListItemButton>
                    <Link to={`/chats/${object.name}`}>
                      <ListItemText primary={object.name} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Chats;
