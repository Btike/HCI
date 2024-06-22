import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBScrollbar,
} from "mdb-react-ui-kit";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user", time: new Date().toLocaleTimeString() };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const responseMessage = { text: "respuesta", sender: "trainer", time: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="6">
          <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
              <MDBBtn color="primary" size="sm" rippleColor="dark">
                Let's Chat App
              </MDBBtn>
            </MDBCardHeader>
            <MDBScrollbar suppressScrollX style={{ position: "relative", height: "400px" }}>
              <MDBCardBody>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`d-flex flex-row justify-content-${message.sender === "user" ? "end" : "start"} mb-4`}
                  >
                    {message.sender === "trainer" && (
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    )}
                    <div>
                      <p
                        className={`small p-2 ${message.sender === "user" ? "me-3 text-white bg-primary" : "ms-3"} mb-1 rounded-3`}
                        style={{ backgroundColor: message.sender === "trainer" ? "#f5f6f7" : "" }}
                      >
                        {message.text}
                      </p>
                      <p
                        className={`small ${message.sender === "user" ? "me-3" : "ms-3"} mb-3 rounded-3 text-muted d-flex justify-content-end`}
                      >
                        {message.time}
                      </p>
                    </div>
                    {message.sender === "user" && (
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    )}
                  </div>
                ))}
              </MDBCardBody>
            </MDBScrollbar>
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "45px", height: "100%" }}
              />
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Type message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3 text-muted" href="#!">
                <MDBIcon fas icon="smile" />
              </a>
              <a className="ms-3" href="#!" onClick={sendMessage}>
                <MDBIcon fas icon="paper-plane" />
              </a>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
