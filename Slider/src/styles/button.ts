import styled, { css } from "styled-components";

interface PropsButton {
  $delete?: boolean;
  $unfull?: boolean;
}

export const Button = styled.button<PropsButton>`
  padding: 16px 32px;
  width: ${props => props.$unfull ? '100px' : '100%'};
  color: white;
  font-size: 18px;
  background-color: ${props => props.$delete ? '#ff4500' : '#4682b4'};
  border: none;
  border-radius: 8px;
`;

interface PropsArrowButton {
  $isRight?: boolean;
}

export const Arrow = styled.button<PropsArrowButton>`
  position: absolute;
  top: 50%;
  ${props => {
    if (props.$isRight) {
      return css`right: -20px;`
    } else {
      return css`left: -20px;`
    }
  }}
  display: flex;
  align-self: center;
  padding: 16px;
  border: none;
  background-color: #4682b4;
  border-radius: 30px;
  z-index: 100;
  transform: translateY(-50%) ${props => props.$isRight && 'rotate(180deg)'};

  & svg path {
    fill: white;
  }
`;