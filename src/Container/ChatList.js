import ChatList from "../Component/ChatList";
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state) => {
    return {
        //ChatList props로 store의 ChatList 값을 넣어줌.
        ChatList: state.ChatList,
    }
}

//react-redux의 connect 함수를 사용하여 래핑 컴포넌트를 만듦.
export default connect(mapReduxStateToReactProps, null)(ChatList);