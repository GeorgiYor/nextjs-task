import React from "react";
import styled, { css } from "styled-components";



export const StyledBlock1 = styled(({...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 310px;
  height: 105px;
  background-color:rgba(249,249,249,234);
  border: 2px solid rgba(249,249,249,234);
  border-radius: 6px;

  &:hover {
    border: 2px solid rgba(0,110,253,119);
  }

  &:hover h3{
    text-decoration: underline rgba(0,110,253,119);
    color: rgba(0,110,253,119);
  }

  '@media (min-width: 768px)': {
      background-color: red;
  },
`;

export const StyledBlock2 = styled(({...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 330px;
  height: 105px;
  background-color:rgba(244,244,244,230);
  border: 2px solid rgba(244,244,244,230);
  border-radius: 6px;

  &:hover {
    border: 2px solid rgba(0,110,253,119);
  }

  &:hover h3{
    text-decoration: underline rgba(0,110,253,119);
    color: rgba(0,110,253,119);
  }
`;

export const StyledBlock3 = styled(({...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 350px;
  height: 105px;
  background-color:rgba(241,241,241,227);
  border: 2px solid rgba(241,241,241,227);
  border-radius: 6px;

  &:hover {
    border: 2px solid rgba(0,110,253,119);
  }

  &:hover h3{
    text-decoration: underline rgba(0,110,253,119);
    color: rgba(0,110,253,119);
  }
`;

export const StyledSmallBlock1 = styled(({...props }) => <div {...props} />)`
  width: 15%
  text-align: center;
`;

export const StyledSmallBlock2 = styled(({...props }) => <div {...props} />)`
  width: 70%
`;

const styles = {
  container: {
    width: '100%',
  },
  // Media query styles
  '@media (min-width: 768px)': {
    container: {
      width: '80%',
      margin: '0 auto',
    },
  },
};
