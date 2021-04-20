const ChatList = (props) => {
    console.log("props.",props.chatList);
    return (
        <div className="chatList">
            {props.chatList.reverse().map((data, index) => {
                console.log("datadatadata",data);
                return (
                    <div key={index} className="chatListItem">
                        <span>{data}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatList;