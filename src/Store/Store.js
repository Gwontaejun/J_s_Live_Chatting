import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const initState = {
    userName: "", ChatList: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "sendChat": //action.type이 sendChat일때 ChatList 데이터 추가
            return { ...state, ChatList: state.ChatList.concat(action.chatData) }
        case "chatListDelete": //action.type이 chatListDelete일때 ChatList 초기화
            return { ...state, ChatList: [] }
        default:
            return state;
    }
}

export default persistReducer(persistConfig, reducer);