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
  const currentWeb = window.location;
  const [list, setList] = useState([]);
  const [userUrl, setUrl] = useState('');
  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onInsert = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const nextList = list.concat(userUrl);
    setList(nextList);
    setUrl('');
    console.log(new Date());
  };
  
  
  
  return (
    <div>
      <input value={userUrl} onChange={onChange} />
    <button onClick={onInsert}>add</button>
    <ul>
        {list.map((value, index) => (
          <li key={index}>url : {value}</li>
        ))}
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