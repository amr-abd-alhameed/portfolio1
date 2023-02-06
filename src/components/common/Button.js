// import styled from "styled-components";
// const Button = styled.button`
//     background: ${(props) => props.color};
//     border-radius: 3px;
//     border: 2px solid palevioletred;
//     color: ${(props) => (props.cute ? "black" : "#0cc")};
//     /* color: ${(props) => (props.color === "white" ? "black" : "green")}; */
//     margin: 0 1em;
//     padding: 0.25em 1em;
// `;
// const P = styled.p`
//     text-align: center;
//     border: 2px solid purple;
//     background: ${(props) => (props.color ? "red" : "blue")};
// `;
// export const II = styled.button`
//     color: ${(props) => props.theme.$primary};
//     background: ${(props) => props.theme.$secondary};
// `;

// // export default Button;
// export { P, Button };
import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) =>
        props.dark ? props.theme.$secondary : props.theme.$primary};
    color: ${(props) =>
        props.dark ? props.theme.$primary : props.theme.$secondary};
    font-family: "poppins";
    font-size: 20px;
    padding: 10px 40px;
    border-radius: 40px;
    border: solid 2px
        ${(props) =>
            props.dark ? props.theme.$primary : props.theme.$secondary};
`;

const BigBtn = styled(Button)`
    font-weight: 500;
`;
export { Button, BigBtn };
