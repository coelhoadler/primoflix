import styled from "styled-components";

const ButtonLink = styled.button`
    border: 2px solid var(--header-text-color);
    color: var(--header-text-color);
    padding: 10px 42px;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 700;
    transition: all .5s ease-out;
    text-decoration: none;
    &:hover,
    &:focus {
        background-color: var(--strongest-color);
        transition: all .5s ease-in;
    }
`;

export default ButtonLink;
