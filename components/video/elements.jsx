import React from "react";
import styled, { css } from "styled-components";



export const Vidd = styled(({...props }) => <div {...props} />)`
@media (max-width: 1024px) {
    width: 300px;
    height: 400px;
}
`;