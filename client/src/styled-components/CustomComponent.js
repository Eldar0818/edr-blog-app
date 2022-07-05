import styled from "styled-components";
import { smallScreen } from "./Responsive";

export const ItemBox  = styled.div`
    width: ${props=> props.width};
    height: ${props=> props.height};
    display: flex;
    flex-direction: ${props=> props.direction};
    align-items: ${props=> props.align};
    justify-content: ${props=> props.justify};
    ${smallScreen({ width: "100%", height: "100%"})}
`

export const Typography = styled.h2`
font-weight: ${props=> props.weight};
  font-size: ${props=> props.size};
  color: ${props=> props.color};
  letter-spacing: 1.2px;
`

export const Button = styled.button`
    width: 125px;
    height: 30px;
    font-size: 15px;
    color: #fff;
    background-color: ${props=> props.btnBg};
    border-radius: 7px;
  cursor: pointer;
`

export const Image = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
` 

export const MainForm = styled.form`
padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
width: 100%;
 height: 40px;
padding-left: 10px;
font-size: 16px;
border: 1px solid #ddd;
border-radius: 6px;
`

export const ContentInput = styled.textarea`
width: 100%;
 height: 350px;
 font-size: 16px;
 padding: 10px;
 border:  1px solid #ddd;
 border-radius: 6px;
 resize: none;
`