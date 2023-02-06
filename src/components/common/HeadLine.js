// import "./HeadLine.scss";
// import React from "react";

// const HeadLine = (props) => {
//     return (
//         <>
//             <h1>{props.name}</h1>
//         </>
//     );
// };

// export default HeadLine;
import styled from "styled-components";

const HeadLine = styled.h1`
    /* font-family: $volkhov; */
    z-index: 2;
    font-family: "Volkhov";
    text-transform: capitalize;
    text-align: center;
    position: relative;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    font-size: 32px;
    color: ${(props) =>
        props.color === "white"
            ? props.theme.$secondary
            : props.theme.$primary};
    &::before {
        content: "";
        height: 2.5px;
        width: calc(100% - 3px);
        background-color: ${(props) =>
            props.color === "white"
                ? props.theme.$secondary
                : props.theme.$primary};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -44%;
    }
`;
export default HeadLine;
