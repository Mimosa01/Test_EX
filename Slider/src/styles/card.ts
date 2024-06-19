import styled from "styled-components";

interface PropsStyledCard {
  $isHide?: boolean;
}

export const StyledCard = styled.div<PropsStyledCard>`
  display: ${props => props.$isHide ? 'none' : 'flex'};
  flex-direction: column;
  flex-shrink: 0;
  padding: 10px;
  min-width: 315px;
  max-width: 450px;
  width: 100%;
  min-height: 280px;
  border-radius: 8px;
  background-color: #bfbfbf;

  & h1 {
    margin: 0;
    margin-bottom: 24px;
    color: green;
    text-align: center;
  }

  @media (max-width: 1200px) {
    flex-shrink: 1;
  }

  @media (max-width: 577px) {
    width: auto;
  }
`;

export const Hide = styled(StyledCard)`
  display: none;
`;

interface PropsWrapper {
  $down?: boolean; 
}

export const CardWrapper = styled.div<PropsWrapper>`
  display: flex;
  column-gap: 12px;
  ${props => props.$down && `margin-top: auto`} 
`;

export const CardHeader = styled.h3`
  margin: 0;
  margin-bottom: 12px;
  font-size: 32px;
`;
