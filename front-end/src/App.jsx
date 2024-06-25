import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { marked } from "marked";
import axios from "axios";

export default function App() {
  const api = "http://localhost:11434/api/chat";

  const [ms, setMs] = useState("hi");

  function sendData() {
    const input = document.getElementById("message");
    const inputValue = input.value;
    setMs(inputValue);
    
  }


  const [userdiv,setUserdiv]=useState([])

async  function GEtDATA(){
  const rr=  await axios.get('http://127.0.0.1:8000/api/user');
  setUserdiv(rr)
  }




 useEffect(()=>{


    axios.post('http://127.0.0.1:8000/api/user',{
    message:ms
  },{
    headers:{
      'Content-Type': 'application/json'
    }
  })

 },[ms])

  useEffect(() => {

    GEtDATA()

    // fetch("http://127.0.0.1:8000/api/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     message: ms ,
    //   }),
    // })
  }, []);




  const [info, setInfo] = useState("");

  useEffect(() => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "phi",
        messages: [{ role: "user", content: "hi" }],
        stream: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => setInfo(marked(data.message.content)));
  }, []);









  return (
    <div className="te">
      <div className="list">
        <div className="message">
          <div className="side1">
            <div className="tex">
              <span dangerouslySetInnerHTML={{ __html: info }}></span>
            </div>
          </div>

          {/*  */}


          {userdiv.map((text)=>{
          return(
            <div className="side2"key={text.id}>
            <div className="tex" >
              <span>
                {text.message}
              </span>
            </div>
          </div>
          )
        })}
        </div>
      </div>
      <div className="inp">
        <div className="send-btn">
          <div className="in">
            <input
              type="text"
              placeholder="write somthing her ?"
              id="message"
            />
          </div>
          <div className="btn">
            <button onClick={sendData}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
