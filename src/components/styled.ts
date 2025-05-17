import { Chip } from "@nextui-org/react";
import styled from "styled-components";

export const StyledChip = styled(Chip)`
  font:
    300 12px var(--font-inter),
    sans-serif;

  @media (min-width: 744px) {
    font:
      300 14px var(--font-inter),
      sans-serif;
  }
`;

export const WhiteChip = styled(StyledChip)`
  background-color: rgba(255, 255, 255, 1);
  color: rgba(4, 1, 11, 1);
`;

export const AttentionChip = styled(StyledChip)`
  background-color: rgba(255, 164, 7, 0.1);
  color: rgba(255, 164, 7, 1);
`;

export const ConditionalBr = styled.br`
  display: none;

  @media (min-width: 744px) {
    display: block;
  }
`;

export const Copyright = styled.p`
  color: white;
  font:
    300 16px var(--font-inter),
    sans-serif;
`;
