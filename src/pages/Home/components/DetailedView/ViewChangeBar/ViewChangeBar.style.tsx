import styled from "styled-components";
import global_styles from "../../../../../assets/global-paramers.style";

export const ViewChangeBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 10rem;
    width: 100%;
    justify-content: space-around;
    border-style: solid;
    border-width: 1px;
    border-color: white;
`
export const ViewOptionsContainer = styled.div<{isActive:boolean}>`
    display: flex;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.isActive? global_styles.green : "transparent"};
    &:hover{
        background-color: ${global_styles.green};
    }
`