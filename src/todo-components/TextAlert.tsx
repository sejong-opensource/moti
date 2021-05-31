import React from "react";
const textList = [
  "잘하고 있어요!",
  "조금만 더 힘을 내요!",
  "더 잘할거에요!",
  "멋져요!",
  "응원합니다 :)",
  "좋은 결과가 나올거에요!"
];

const TextAlert = (done) => {
    if(done==true){
        return({any:textList[Math.floor(Math.random() * textList.length)]});
    }
};
export default TextAlert;
