import styled from "styled-components";
import rolling from '../assets/image/loader.svg'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 30px;
  gap: 20px;
  position: absolute;
  bottom: 150px;
  right: 0;
  width: 440px;

  background: #FFFFFF;
  border-radius: 8px;

  @media screen and (max-width: 1468px){
    position: relative;
    bottom: 0;
    
  }
  @media screen and (max-width: 1024px){
    position: relative;
    bottom: 0;
    
  }
  
  flex: none;
  order: 1;
  flex-grow: 0;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  margin: 10px 0 0 0;

  width: 380px;
  height: 55px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`


export const ShowDop = styled.div`
  width: 221px;
  height: 21px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  position: relative;
  color: #353238;

  flex: none;
  order: 0;
  flex-grow: 0;
`


export const Button = styled.button<{ width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  gap: 10px;

  width: ${props => props.width ? props.width : '156px'};
  height: 50px;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  background: url('${rolling}') no-repeat center;
  color: #FFFFFF;

  background: #0086A8;
  border-radius: 8px;
  border: none;

  &:hover {
    background: #007693;
  }

  &:active {
    background: #00657E;
  }

  &:disabled {
    background: #E3E3E3;
  }

  flex: none;
  order: 0;
  flex-grow: 0;

`

export const Rolling = styled.div`
  position: absolute;
  top: 10px;
  z-index: 3;
  right: 180px;
  width: 30px;
  height: 30px;
  background: url('${rolling}') no-repeat center aliceblue;
`