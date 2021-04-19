const ChatList = (props) => {
    return (
        <div>
            {props.ChatList.map((data, index) => {
                return (
                    <div key={index}>
                        {data}
                    </div>
                )
            })}
        </div>
    )
}

export default ChatList;