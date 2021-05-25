/*global chrome*/
import React from 'react';
import {useState} from 'react';

//import activeWindow, { sync } from 'active-win';


//const activeWindow = require("active-win");

//async function test_output(){
  //console.log(new Date());
  //const useWeb = window.location.href;
  //console.log(useWeb);
  //const text = await activeWindow();
  //console.log(text);
  //console.log(typeof text);
  //console.log(text.title);            // 변수.원하는 값( 필요한건 url);
  //console.log(text.owner.name);       
  //console.log(text.owner.path);       //-> active-win 담을 변수.owner.path -> 경로,
  
//}


const UserUrl =()=>{
    const [list, setList] = useState([]);
    const [userUrl, setUrl] = useState('');
    
    const [timelist, settimeList] = useState([]);
    const [time, setTime] = useState('');
    // const CC = chrome as any
    // CC.runtime.getBackgroundPage((back : any)=>{
    //   back.setItem('gggggg');
    // });

    let page = chrome.extension.getBackgroundPage();
    function onGot(page) {
      page.foo();
    }
    
    onGot("11");
  
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        //localStorage.setItem("url",JSON.stringify(list));
        setUrl(e.target.value);
    };
    const onChangeTime = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTime(e.target.value);
    }   
  
  const onInsert = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const nextList = [...list,userUrl];
    const nextTime = [...timelist,time];
    setList(nextList);
    settimeList(nextTime);
    localStorage.setItem("url",JSON.stringify(nextList));
    localStorage.setItem("time",JSON.stringify(nextTime));
    setUrl('')
    setTime('');
    out();
  }

  const out = () =>{
    console.log("url:",localStorage.getItem("url"));
    console.log("time:",localStorage.getItem(("time")));
  }
      return (
        <div>
          <input placeholder="ex) *://*.facebook.com/*" value={userUrl} onChange={onChange}  />
          <input placeholder="ex) 1" value={time} onChange={onChangeTime}  />
        <button onClick={onInsert}> add</button>
        <ul>
          <ol>
            {list.map((value, index) => (
              <li key={index}>url : {value}</li>
            ))}
            {timelist.map((value,index)=>(
              <li key = {index}>time : {value}</li>
            ))}
            </ol>
        </ul>
        </div>
      );
};
export default UserUrl;


/*const onRemove = e => {
  const nextState = {};
  nextState[e.target.name] = e.target.value;
  this.setDomain(nextState);
 };*/
 /*
 const moveFunction =() =>{
   for(let i=0;i<list.length;i++){
      if(currentWeb == list[i]){
        window.location.href = "https://www.naver.com/"
      }
      //else i+=1;
    }
  }
  {
    setInterval(() => {
      moveFunction();
    }, 1500)
    }
 
 */ 
//<input value={domain} onRemove={onRemove} />