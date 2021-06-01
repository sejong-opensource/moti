import React from "react";
import styled from "styled-components";
const phraseList = [
  "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다 -월트 디즈니",
  "열정을 잃지 않고 실패에서 실패로 걸어가는 것은 성공이다 -윈스턴 처칠",
  "위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다. 마음이 좁은 사람들은 사람들을 논한다 -엘리너 루즈벨트",
  "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다 -엘리너 루즈벨트",
  "성공적인 삶의 비밀은 무엇을 하는 게 자신의 운명인지 찾아낸 다음 그걸 하는 것이다 -헨리 포드",
  "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다 -오스카 와일드",
  "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다 -토마스 제퍼슨",
  "모든 성취의 시작점은 갈망이다 -나폴레온 힐",
  "사람들은 동기 부여는 오대가지 않는다고 말한다. 목욕도 마찬가지다. 그래서 매일 하라고 하는 것이다 -지그 지글러",
  "우리는 우리가 늘 생각하는 것이 된다. 그것이 가장 묘한 비밀이다 -얼 나이팅게일",
  "성공이란 당신 자신, 당신이 하는 일, 그일을 하는 방식을 좋아하는 것이다 -마야 앤젤루",
  "실패에서부터 성공을 만들어 내라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다 -데일 카네기",
  "당신이 정말로 뭔가를 원한다면 기다리지 마라. 견기지 못하는 법을 스스로에게 가르쳐라 -구르박쉬 차할",
];
const Style = styled.div `
display: flex;
height: 100%;
flex-direction: column;
.text {
  color:rgb(230, 231, 232);
  padding: 1rem;
  font-size: 20px;
  word-break:keep-all;
}
`
const ButtonStyle = styled.div`
  display: flex;
  padding: 0.3rem;
  justify-content: flex-end;
  margin-bottom: 1rem;
  button {
    margin-right: 1rem;
    height: 2rem;
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
`;
const Phrase = () => {
  const [phrase, setPhrase] = React.useState("");
  React.useEffect(() => {
    setPhrase(phraseList[Math.floor(Math.random() * phraseList.length)]);
  }, [phrase]);

  return (
    <div>
      <Style>
        <div className="text">
        {phrase}
        </div>

        <div>
        <ButtonStyle>
          <button
            onClick={() => {
              setPhrase(phraseList[Math.floor(Math.random() * phraseList.length)]);
            }}
          >
           변경
          </button>
        </ButtonStyle>
        </div>
        
      </Style>
    </div>
  );
};
export default Phrase;
