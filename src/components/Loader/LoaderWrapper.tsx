import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bgColor);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoaderSVG = styled.svg`
    height: 20vmin;
    padding: 3vmin 20vmin;
    vertical-align: top;
`;
