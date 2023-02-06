import styled from "styled-components";
const Card = styled.div`
    padding: 20px;
    position: relative;
    width: 43%;
    height: 134px;
    border-radius: 5px;
    color: ${(props) =>
        props.color === "white"
            ? props.theme.$primary
            : props.theme.$secondary};
    background-color: ${(props) =>
        props.color === "white"
            ? props.theme.$secondary
            : props.theme.$primary};
    @media (max-width: 575.98px) {
        width: 100%;
    }
`;

const CardII = styled(Card)`
    background-color: ${(props) =>
        props.color === "white"
            ? props.theme.$secondary
            : props.theme.$secondaryAlt};
`;
export { Card, CardII };
