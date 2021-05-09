import Popup from "reactjs-popup";
// https://react-popup.elazizi.com/controlled-popup
import "reactjs-popup/dist/index.css";
import React from "react";
const PopupSetting = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(current => !current)}>
        Setting
      </button>
      <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)}>
        <div className="modal-setting">
          {/* 세팅 컴포넌트 해당 부분에 넣으면 됨 */}
          <button className="close-button" onClick={() => setOpen(false)}>
            close
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default PopupSetting;
