import styled from "styled-components";

export const VideoListItemLink = styled.a`
    text-decoration: none;
`;

export const VideoListItemImg = styled.img`
    border-radius: 10px;
    border: 2px solid var(--header-text-color);
    transition: border .5s ease-out;
    &:hover {
        border-color: var(--strongest-color);
        transition: border .5s ease-in;
    }
`;

