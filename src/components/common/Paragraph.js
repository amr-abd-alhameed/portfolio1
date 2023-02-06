import styled from "styled-components";

const P = styled.p`
    z-index: 2;
    font-family: "poppins";
    text-transform: capitalize;
    text-align: center;
    position: inherit;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.8;
    color: ${(props) =>
        props.color === "white"
            ? props.theme.$secondary
            : props.theme.$primary};
`;

export default P;
