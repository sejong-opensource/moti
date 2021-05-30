import React from 'react';
import {useState,useEffect,useRef} from 'react';
import activeWindow from 'active-win';
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
      outline: none;
      font-size: 15px;
    }
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
    
    //const nextList = [...list,domain.match(pattern)];
    const nextList = [...list,userUrl];
    setList(nextList);

    localStorage.setItem("front",JSON.stringify(nextList));
    let regex = 
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
              </ButtonStyle>
            </div>
          
          
            <ul>
                {/* {localArr&&localArr.map((value, nextId) => (
                  <li key={nextId} >url : {value}</li>
                ))} */}
                {list && list.map((value, nextId) => (
                  <li key={nextId} >url : {value}</li>
                ))}
            </ul>
            <ButtonStyle>
            <button onClick={clear}>clearAll</button>
            </ButtonStyle>
          </Container>
          
        </div>
      );
};
export default UserUrl;
