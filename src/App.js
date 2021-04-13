import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

const App = () => {``
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const socketClient = useMemo(() => io("ws://localhost:3001"), []);

  useEffect(() => { //componentDidMount
    socketClient.on("connect", () => {
      console.log("connection server");
    });
    socketClient.on('chat message', ((msg) => {
      console.log("from server.js : " + msg);
      setData(data => data.concat(msg));
    }));
  }, []);
  
  const handleChange = e => {
    setText(e.target.value);
  }

  const handleClick = () => {
    if (text) {
      socketClient.emit('chat message', text);
      setText('');
    }
  }
  
  return (
    <div>
      {data.map((data,index) => {
        return(
          <div key={index}>
            {data}
          </div>
        )
      })}
      <input name="text" onChange={handleChange} value={text}/>
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default App;
