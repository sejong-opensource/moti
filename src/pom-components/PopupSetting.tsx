import Popup from "reactjs-popup";
// https://react-popup.elazizi.com/controlled-popup
import "reactjs-popup/dist/index.css";
import React from "react";
import SettingPomo from "./SettingPomo";
// Todo set Min*60 -> sec

type Prop = {
  callback: () => void;
};

const PopupSetting = (prop: Prop) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => {
          setOpen((current) => !current);
          prop.callback();
        }}
      >
        설정
      </button>
      <Popup open={open} contentStyle={{borderRadius:"1rem", minWidth:"690px"}} closeOnDocumentClick onClose={() => setOpen(false)}>
      <div className="modal-setting">
          {/* 세팅 컴포넌트 해당 부분에 넣으면 됨 */}
          <SettingPomo />
          <button
            className="close-button"
            onClick={() => {
              setOpen(false);
              prop.callback();
            }}
          >
            닫기
          </button>
        </div>
      </Popup>
      
    </div>
  );
};

export default PopupSetting;
