import { styled } from "styled-components";

const FooterContainer = styled.footer`
  width: 1280px;
  height: 58px;
  background-color: white;
  border-top: 1px solid #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 11px 0;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    color: #888888;
    height: 18px;
  }
`;
// FIXME : "Inter" 폰트 한국어 지원하지 않음, 특수문자 사용시 깨짐
function Footer() {
  return (
    <FooterContainer>
      <div>
        <span>개인정보 처리방침 | 이용 약관</span>
        <span>All rights reserved @ Codestates</span>
      </div>
    </FooterContainer>
  );
}
export default Footer;
