import React from "react";
import styled, { css } from "styled-components";



export const BlocksLayout = styled(({...props }) => <div {...props} />)`
    display:flex;
    width: 300px;
    height: 400px;
    flex-direction: column;
    justify-content: space-around;
`;