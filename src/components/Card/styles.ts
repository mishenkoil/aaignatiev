import styled from "styled-components";

export const FooterTitle = styled.div<{
  $isCapslock?: boolean;
}>`
  width: 100%;

  ${(props) =>
    props.$isCapslock
      ? `
      font: 400 24px var(--font-unbounded), sans-serif;
      
      @media (min-width: 744px) {
        font: 400 48px var(--font-unbounded), sans-serif;
      }
      `
      : ""}
  font-family: var(--font-unbounded), sans-serif;
  font-weight: 900;
  color: white;
`;

export const FooterDescription = styled.div`
  color: white;

  font:
    300 12px var(--font-inter),
    sans-serif;

  @media (min-width: 744px) {
    font:
      300 16px var(--font-inter),
      sans-serif;
  }
`;
