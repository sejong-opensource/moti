/*globla chrome*/
import React from 'react';
import {useState,useEffect,useRef} from 'react';
//import activeWindow from 'active-win';
import styled from "styled-components";

const Container = styled.div `
display: flex;
flex-direction: column;
  .input-box{
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    height: 3rem;
    input{
      width: 12rem;
      background: none;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.95);
      text-align: center;
      color:rgb(230, 231, 232);
      outline: none;
      font-size: 15px;
    }
  }
  .list::-webkit-scrollbar{
    display: none;
  }
`
const ButtonStyle = styled.div`
  display: flex;
  padding: 0.3rem;
  button {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    width: 3xrem;
    height: 3rem;
    border-radius: 0.3rem;
    border: none;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.95);
    color: rgba(255, 255, 255, 0.95);
    cursor: pointer;
    transition-property: background, color;
    transition-duration: 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.95);
      color: black;
    }
  }
`
const ListStyle = styled.div `
  ul{
    list-style-type: square;
  }
  color: rgb(230, 231, 232);
  font-size: 20px;
  height: 15vh;
  overflow-y:scroll;
  -ms-overflow-style: none; 
`

const UserUrl =()=>{
    const [list, setList] = useState([]);
    const [userUrl, setUrl] = useState('');
    
    useEffect(() => {
      try {
        const local = JSON.parse(localStorage.getItem('front'));

        if(Array.isArray(local))
          setList(local);
      }catch(e) {

      }
     
    }, []);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        
    };
    const clear = (e) => {
      setList([]);

      localStorage.clear();
      let port = chrome.runtime.connect({
        //name: "clear"
        name: "Sample Communication"
      });
      port.postMessage("clear");
      port.onMessage.addListener(function(msg) {
        console.log(msg);
      });
    }
    //https://www.facebook.com/

    
  const onInsert = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const nextList = [...list,userUrl];
    setList(nextList);

    localStorage.setItem("front",JSON.stringify(nextList));

    setUrl('');

    let port = chrome.runtime.connect({
      name: "Sample Communication"
    });
    port.postMessage(nextList);
    port.onMessage.addListener(function(msg) {
      console.log(msg);
    });
  }
      return (
        <div>
          <Container>
            <div className="input-box">
              <input placeholder="ex) *://*.facebook.com/*" value={userUrl} onChange={onChange}  />
              <ButtonStyle>
              <button onClick={onInsert}>add</button>
              <button onClick={clear}>clearAll</button>
              </ButtonStyle>
            </div>
            <ListStyle className="list">
            <ul>
                {/* {localArr&&localArr.map((value, nextId) => (
                  <li key={nextId} >url : {value}</li>
                ))} */}
                {list && list.map((value, nextId) => (
                  <li key={nextId} >url : {value}</li>
                ))}
            </ul>
            </ListStyle>
          </Container>
          
        </div>
      );
};
export default UserUrl;
