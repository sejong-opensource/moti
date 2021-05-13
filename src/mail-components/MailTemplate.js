import React from 'react';
import styled from 'styled-components';

const EmailTemplateBlock = styled.div`
  width: 750px;
  height: 230px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; 

  margin-top: 26px;
  margin-left: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function EmailTemplate({ children }) {
  return <EmailTemplateBlock>{children}</EmailTemplateBlock>;
}

export default EmailTemplate;