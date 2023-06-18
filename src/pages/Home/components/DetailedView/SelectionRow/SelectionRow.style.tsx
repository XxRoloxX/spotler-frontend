import styled from "styled-components";
import global_styles from "../../../../../assets/global-paramers.style";

export const SelectionRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 10rem;
    width: 100%;
    justify-content: space-around;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    flex-grow: 1;
`
export const SelectionOptionsContainer = styled.div`
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
    &:hover{
        background-color: ${global_styles.green};
    }
`