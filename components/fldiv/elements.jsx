import React from "react";
import styled, { css } from "styled-components";



export const FlDiv = styled(({...props}) => <div {...props} />)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    height: 400px;
    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 30px;
        height: 100%;
        flex-direction: column;
    }
`;

  