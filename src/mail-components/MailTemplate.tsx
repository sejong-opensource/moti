import React from "react";
import styled from "styled-components";

const MailTemplateBlock = styled.div`
  flex: 1;
  //height: 50vh;
  width:100%;
  position: relative;
  background: rgb(32,28,53);
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function MailTemplate({ children }) {
  return <MailTemplateBlock>{children}</MailTemplateBlock>;
}

export default MailTemplate;
