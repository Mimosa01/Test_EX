import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  gap: 24px;
  padding: 10px;
  max-width: 1280px;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;