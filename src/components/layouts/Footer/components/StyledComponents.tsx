import styled from "styled-components";

export const MainContainer = styled.footer`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 40px 42px;
  justify-content: start;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    flex-direction: unset;
    padding-bottom: 42px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
