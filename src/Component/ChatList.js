import { Paper } from "@material-ui/core";

const ChatList = (props) => {
    return (
        <div className="chatList">
            {props.chatList.reverse().map((data, index) => {
                console.log("datadatadata",data);
                return (
                    <Paper elevation={3} key={index} className="chatListItem">
                        <span style={{marginLeft:"1%"}}>{data}</span>
                    </Paper>
                )
            })}
        </div>
    )
}

export default ChatList;