import ChatList from "./Component/ChatList";
import ChatSend from "./Component/ChatSend";
import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import "./css/mainCss.css";

const App = () => {
  //useMemo = 리렌더링이 일어났을때 해당 값이 렌더링 전과 같을시 해당 데이터는 초기화 안함.
  //useState = 상태지정
  //useEffect = 클래스형 컴포넌트의 라이프사이클API 역할을 함.

  const userName = useMemo(() => prompt("사용하실 이름을 입력해주십시오."), []); //초기화면 이름설정
  const socketClient = useMemo(() => io("http://localhost:3001"), []); //socket.io-client를 3001번 포트로 접속.
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    console.log("userName", userName);
    if (userName === null || userName.replace(/ /g, "").length < 2) {
      alert("사용하실 이름을 두 글자 이상 입력해주세요.");
      window.location.reload();
    }
    socketClient.on('chat message', ((msg) => { //서버로부터 chat message라는 메시지를 전송받을때 실행
      setChatList(msg);
    }));
  }, []);

  return (
    <div className="App">
      {/* 채팅 리스트 */}
      <ChatList
        chatList={chatList}
      />
      {/* 채팅 입력 및 청소 */}
      <ChatSend
        userName={userName}
        socketClient={socketClient}
      />
    </div>
  );
}

export default App;
