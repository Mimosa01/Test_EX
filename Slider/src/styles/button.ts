import styled, { css } from "styled-components";

interface PropsButton {
  $delete?: boolean;
  $unfull?: boolean;
}

const ButtonMain = styled.button`
  border: none;
  cursor: pointer;
`
// В кнопке не хватает свойства cursor: pointer
export const Button = styled(ButtonMain)<PropsButton>`
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

/* 
  Лучше сделать отдельный минимальный компонент Button и от него унаследоваться,
  так как при наличии в Button свойства cursor: pointer, оно не передаётся в Arrow
 */
export const Arrow = styled(ButtonMain)<PropsArrowButton>`
  position: absolute;
  top: 50%;
  /* 
    Такая же история с условной стилизацией, незачем делать такие конструкции
  */
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