import styled from "styled-components";
import logo from './../assets/image/logo.svg'

export const AppBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 60px;


  position: relative;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1468px) {
    height: 100%;
    width: 100%;
  }

  background: #FFFFFF;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 60px 0;
  gap: 60px;
  position: relative;
  width: 1440px;
  height: 586px;

  @media screen and (max-width: 1468px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100vh;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100vh;
  }

  @media screen and (max-width: 993px) {
    height: 100%;
    width: 100%;
  }

  border-radius: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;

  width: 940px;
  height: 375px;

  @media screen and  (max-width: 1024px) {
    width: 100%;
    height: 100%;
    align-items: center;
  }



  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Logo = styled.div`
  width: 474.46px;
  height: 70px;
  background-image: url(${logo});
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const TitleH2 = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  gap: 10px;

  width: 582px;
  height: 36px;

  @media screen and  (max-width: 1024px) {
    align-items: center;
    width: 100%;
    word-break: break-word;
    margin-left: 70px;
  }
  
  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Text = styled.div`
  width: 940px;
  height: 189px;

  font-family: "Open Sans", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  overflow-wrap: break-word;

  @media screen and  (max-width: 1024px) {
    align-items: center;
    width: 100%;
    word-break: break-word;
    margin-left: 60px;
    margin-bottom: 40px;
  }
  
  >p{
    display: flex;
    @media screen and  (max-width: 1024px) {
      align-items: center;
      width: 80%;
    }
  }
  
  color: #353238;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`



