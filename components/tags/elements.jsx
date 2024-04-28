import React from "react";
import styled, { css } from "styled-components";


export const H1tag = styled(({...props}) => <h1 {...props} />)`
  font-size: 40px;
  margin-bottom: 0px;
  font-weight: bold;  
  font-family: sans-serif;
`;

export const Ptag = styled(({...props}) => <p {...props} />)`
  margin: 0px;
  font-size: 14px;
  font-family: sans-serif;
`;

export const PtagBold = styled(({...props}) => <p {...props} />)`
  font-weight: bold;
`;

export const H3tag = styled(({...props}) => <h3 {...props} />)`
  margin: 5px;
  margin-left: 0px;
  font-family: sans-serif;
`;

export const Itag = styled(({...props}) => <i {...props} />)`
    margin: 0;
`;