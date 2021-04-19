import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

const ChatSend = (props) => {
    //useMemo = 리렌더링이 일어났을때 해당 값이 렌더링 전과 같을시 해당 데이터는 초기화 안함.
    //useState = 상태지정
    //useEffect = 클래스형 컴포넌트의 라이프사이클API 역할을 함.
    
    const userName = useMemo(() => prompt("이름을 설정해주십시오."), []); //초기화면 이름설정
    const [chat, setChat] = useState(""); //채팅 상태 초기화
    const socketClient = useMemo(() => io("http://localhost:3001"), []); //socket.io-client를 3001번 포트로 접속.

    useEffect(() => {
        socketClient.on('chat message', ((name, msg) => { //서버로부터 chat message라는 메시지를 전송받을때 실행
            console.log("from server.js -> name : " + name, "message : " + msg);
            props.onChatSend(name + ":" + msg);
        }));
    }, []);

    const handleChange = e => {
        setChat(e.target.value);
    }

    const handleClick = () => { //전송버튼 클릭시 서버에 chat message 메시지 전송
        if (chat) {
            socketClient.emit('chat message', userName, chat);
            setChat('');
        }
    }

    return (
        <div>
            <input name="chat" onChange={handleChange} value={chat} />
            <button onClick={handleClick}>전송</button>
            <button onClick={props.onClickChatClear}>청소</button>
        </div>
    )
}

export default ChatSend;