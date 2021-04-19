import ChatList from "./Container/ChatList"
import ChatSend from "./Container/ChatSend"

const App = () => {
  return (
    <div>
      {/* 채팅 리스트 */}
      <ChatList/> 
      {/* 채팅 입력 및 청소 */}
      <ChatSend/>
    </div>
  );
}

export default App;
