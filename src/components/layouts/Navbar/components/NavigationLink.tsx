import styled from "styled-components";
import { FC } from "react";
import Link from "next/link";

import { NavigationLinkProps } from "../types";

const LinkContainer = styled(Link)<{ $isActive: boolean }>`
  color: ${(props) =>
    props.$isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  font:
    ${(props) => (props.$isActive ? "900 32px" : "300 16px")}
      var(--font-unbounded),
    sans-serif;

  @media (min-width: 450px) {
    font:
      ${(props) => (props.$isActive ? "900 48px" : "300 20px")}
        var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 744px) {
    font:
      ${(props) => (props.$isActive ? "900 64px" : "300 24px")}
        var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 1024px) {
    font:
      400 16px var(--font-inter),
      sans-serif;
  }
`;

export const NavigationLink: FC<NavigationLinkProps> = ({
  item,
  isActive = false,
  onClick,
}) => {
  return (
    <LinkContainer
      $isActive={isActive}
      aria-pressed={isActive}
      href={item.href}
      role="button"
      tabIndex={0}
      onClick={() => onClick(item.href)}
    >
      {item.title}
    </LinkContainer>
  );
};
