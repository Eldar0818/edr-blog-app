import styled from "styled-components";
import { midScreen, midSmallScreen } from "./Responsive";

export const Container = styled.section`
width: ${props=> props.width};
height:${props=> props.height};
`

export const Navigation = styled.nav`
    width: 100%;
    box-shadow: 0px 0px 7.5px 5px rgba(0, 0, 0, 0.25);
`

export const BlogCard = styled.article`
    width: 75%;
    display: flex;
    flex-direction: ${props=> props.direction};
    ${midScreen({ width: "95%" })};
    ${midSmallScreen({ flexDirection: "column" })}
`

export const FooterBox = styled.footer`
width: 100%;
  padding: 25px;
  background-color: #242424;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`