import { Button } from "@material-ui/core";
import { useState } from "react";

const ChatSend = (props) => {
    const [chat, setChat] = useState(""); //채팅 상태 초기화
    const [enterTime, setEnterTime] = useState("");
    const [autoEnterCount, setAutoEnterCount] = useState(0);
    
    const handleChange = e => {
        setChat(e.target.value);
    }

    const handleClick = () => { //서버에 chat message 메시지 전송 및 도배금지 등 전송시 발생 이벤트
        var TNF = true;

        if (chat.replace(/ /g, "").length !== 0) {
            if (enterTime !== "") {
                if ((new Date().getTime() - enterTime.getTime()) / 1000 <= 2) {
                    if (autoEnterCount === 10) {
                        setAutoEnterCount(0);
                        TNF = false;
                        alert("도배로 인하여 10초간 채팅이 금지됩니다.");
                        document.querySelector(".chat").disabled = true;
                        document.querySelector(".submit").disabled = true;
                        setTimeout(function () { // 5초후에 채팅가능
                            document.querySelector(".chat").disabled = false;
                            document.querySelector(".submit").disabled = false;
                        }, 1000 * 10);
                    } else {
                        setAutoEnterCount(autoEnterCount + 1);
                    }
                }
            }
            if (chat && TNF === true) {
                props.socketClient.emit('chat message', props.userName, chat);
                setEnterTime(new Date());
            }
        } else alert("빈값은 입력하실수 없습니다.");

        setChat('');
    }

    const clearClick = () => {
        props.socketClient.emit('clear');
    }

    return (
        <div className="chatSend">
            <input name="chat" className="chat"
                onKeyPress={(ev) => { //엔터 입력시 작동하는 이벤트
                    if (ev.key === 'Enter') {
                        handleClick();
                        ev.preventDefault();
                    }
                }}
                onChange={handleChange} value={chat} />

            <Button className="submit" variant="contained" color="primary" onClick={handleClick}>전송</Button>
            <Button className="clear" variant="contained" color="secondary" onClick={clearClick}>청소</Button>
        </div>
    )
}

export default ChatSend;