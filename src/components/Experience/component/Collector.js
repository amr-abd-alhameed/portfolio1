import styled from "styled-components";

const Collector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 90px;
    position: relative;
    /* @media (max-width: 575.98px) {
        display: flex;
        flex-direction: column;

        &::before,
        &::after {
            top: -12%;
        }
    } */
    /* counter-set: rank; */

    &::before {
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.$secondary};
    }
    &::after {
        counter-increment: rank;
        content: "0" counter(rank);
        border-radius: 50%;
        position: absolute;
        width: 47px;
        height: 47px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) =>
            props.black ? props.theme.$primary : props.theme.$secondary};
        color: ${(props) =>
            props.black ? props.theme.$secondary : props.theme.$primary};
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "volkhov";
        font-weight: bold;
        font-size: 28px;
    }
    @media (max-width: 575.98px) {
        display: flex;
        flex-direction: ${(props) =>
            props.revers ? "column-reverse" : "column"};
        gap: 20px;

        &::before,
        &::after {
            top: -18%;
        }
    }
`;
export default Collector;
