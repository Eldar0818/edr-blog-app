import { css } from "styled-components";

export const smallScreen = (children)=> {
    return css`
    @media screen and (max-width: 580px) {
        ${children}
    }
    `
}
export const midSmallScreen = (children)=> {
    return css`
    @media screen and (max-width: 808px) {
        ${children}
    }
    `
}
export const midScreen = (children)=> {
    return css`
    @media screen and (max-width: 1024px) {
        ${children}
    }
    `
}