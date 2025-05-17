import styled from "styled-components";
import { FC, useEffect, useState } from "react";

import { TNavHref } from "../types";

import { NavigationLink } from "./NavigationLink";
import { NavLinksMobile } from "./NavLinksMobile";

import { siteConfig } from "@/config/site";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NavLinksWrapper = styled.nav`
  z-index: 2;
`;

const NavLinksDesktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: fit-content;
    align-items: center;
    gap: 26px;
    justify-content: start;
    margin: auto 0;
  }
`;

export const NavLinks: FC<Props> = ({ isOpen, onClose }) => {
  const [activeNavItem, setActiveNavItem] = useState<TNavHref>("");

  useEffect(() => {
    // Получаем текущий путь из браузера
    const currentPath = window.location.pathname as TNavHref;

    setActiveNavItem(currentPath);
  }, []);

  return (
    <NavLinksWrapper>
      <NavLinksDesktop>
        {siteConfig.navItems.map((item) => (
          <NavigationLink
            key={item.href}
            isActive={item.href === activeNavItem}
            item={item}
            onClick={setActiveNavItem}
          />
        ))}
      </NavLinksDesktop>

      <NavLinksMobile
        activeNavItem={activeNavItem}
        isOpen={isOpen}
        setActiveNavItem={setActiveNavItem}
        onClose={onClose}
      />
    </NavLinksWrapper>
  );
};
