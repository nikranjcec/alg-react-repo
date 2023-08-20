import "./App.css";
import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import Input from "./components/Input";
import AppHeader from "./components/AppHeader";
import Members from "./components/Members";
import LogIn from "./components/LogIn";
function App() {
  function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }

  let state = {
    messages: [],
    members: [],
    member: {
      username: "",
      color: randomColor(),
    },
  };

  const [stateData, setStateData] = useState(state);
  const [drone, setDrone] = useState(null);

  const onSendMessage = ({ msgText }) => {
    if (msgText !== "") {
      drone.publish({
        room: "observable-algebra2-room",
        message: msgText,
      });
    }
  };

  const onSetUserName = ({ userName }) => {
    stateData.member.username = userName;
    stateData.member.color = stateData.member.color;
    setStateData({ ...stateData }, stateData.member);

    const drone = new window.Scaledrone("ORrZ5bWBx7n0pp4E", {
      data: stateData.member,
    });
    setDrone(drone);
  };

  useEffect(() => {
    if (stateData.member.username !== "") {
      var msgList = document.getElementsByClassName("msg-container");
      msgList[0].scrollTop = 999999999;
    }
  });

  useEffect(() => {
    const droneEvents = () => {
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        stateData.member.id = drone.clientId;
        stateData.member.username = stateData.member.username;
        stateData.member.color = stateData.member.color;

        setStateData({ ...stateData }, stateData.member);
        roomEvents();
      });

      drone.on("error", (error) => console.error(error));
      drone.on("disconnect", () => {
        console.log(
          "User has disconnected, Scaledrone will try to reconnect soon"
        );
      });
      drone.on("reconnect", () => {
        console.log("User has been reconnected");
      });
    };

    const roomEvents = () => {
      const room = drone.subscribe(`observable-algebra2-room`);
      room.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Connected to room");
        }
      });

      room.on("members", (m) => {
        stateData.members = m;
        setStateData({ ...stateData }, stateData.members);
      });

      room.on("member_join", (member) => {
        stateData.members.push(member);
        setStateData({ ...stateData }, stateData.members);
      });

      room.on("message", (message) => {
        receiveMsg(message);
      });
    };

    const receiveMsg = (message) => {
      stateData.messages.push(message);
      setStateData({ ...stateData }, stateData.messages);
    };

    if (drone && !stateData.member.id) {
      droneEvents();
    }
  }, [stateData, drone]);

  return (
    <div className="App">
      {stateData.member.username === "" ? (
        <LogIn onSetUserName={onSetUserName} />
      ) : (
        <div className="App-content">
          <AppHeader currentUser={stateData.member} />
          <div className="main-container">
            <div className="member-container">
              <Members members={stateData.members} />
            </div>

            <div className="chat">
              <div className="msg-container">
                <Messages
                  messages={stateData.messages}
                  currentUser={stateData.member}
                />
              </div>
              <div className="input-container">
                <Input onMsgSubmit={onSendMessage} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
