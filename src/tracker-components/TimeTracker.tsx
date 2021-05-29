/*globla chrome*/
import React from 'react';
import {useState,useEffect,useRef} from 'react';
//import activeWindow from 'active-win';



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
          <input placeholder="ex) *://*.facebook.com/*" value={userUrl} onChange={onChange}  />
        <button onClick={onInsert}>add</button>
        <ul>
            {/* {localArr&&localArr.map((value, nextId) => (
              <li key={nextId} >url : {value}</li>
            ))} */}
             {list && list.map((value, nextId) => (
              <li key={nextId} >url : {value}</li>
            ))}
        </ul>
        <button onClick={clear}>clear</button>
        </div>
      );
};
export default UserUrl;
