import ChatSend from "../Component/ChatSend";
import { connect } from 'react-redux';

const mapReduxDispatchToReactProps = (dispatch) => {
    return {
        //채팅 리스트의 전송버튼 클릭 이벤트
        onChatSend: function (chatData) {
            dispatch({ type: 'sendChat', chatData: chatData });
        },
        //전송버튼 옆의 청소버튼 클릭 이벤트
        onClickChatClear: function () {
            dispatch({ type: 'chatListDelete' });
        }
    }
}

//react-redux의 connect 함수를 사용하여 래핑 컴포넌트를 만듦.
export default connect(null, mapReduxDispatchToReactProps)(ChatSend);