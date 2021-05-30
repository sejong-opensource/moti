import Popup from "reactjs-popup";
// https://react-popup.elazizi.com/controlled-popup
import "reactjs-popup/dist/index.css";
import React from "react";
import SettingPomo from "./SettingPomo";
import styled from 'styled-components';
// Todo set Min*60 -> sec

type Prop = {
  callback: () => void;
};
const PopupStyle= styled.div `
display: flex;
`
const PopupSetting = (prop: Prop) => {
  const [open, setOpen] = React.useState(false);
  const callback = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
      style={{width:"80px"}}
        type="button"
        className="button"
        onClick={() => {
          setOpen(current => !current);
        }}
      >
        설정
      </button>
      <Popup open={open} contentStyle={{borderRadius:"1rem", width:"680px"}} closeOnDocumentClick onClose={() => setOpen(false)}>
      <div className="modal-setting">
          {/* 세팅 컴포넌트 해당 부분에 넣으면 됨 */}
          <SettingPomo callback={callback} />
        </div>
      </Popup>
      
    </div>
  );
};

export default PopupSetting;
