import styled from "styled-components";
import { FC } from "react";
import Link from "next/link";
import { Button as NextUIButton, useDisclosure } from "@nextui-org/react";

import { Button } from "../../Button";

import { NavLinks } from "./components";

import {
  CSSPACE_CLEAN_LOGO_ICON,
  CSSPACE_LOGO,
  MENU_ICON,
} from "@/config/assets";

type Props = {
  inFooter?: boolean;
};

const NavContainer = styled.div`
  position: relative;
  z-index: 99;
  padding: 10px 0;

  display: flex;
  align-items: center;
  gap: 40px 100px;
  white-space: nowrap;
  justify-content: space-between;

  font:
    400 16px var(--font-inter),
    sans-serif;

  @media (min-width: 744px) {
    padding: 42px 0 21px 0;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  width: fit-content;
`;

const BrandLogo = styled.img`
  height: 32px;

  @media (min-width: 744px) {
    height: 37px;
  }
`;

const LoginButton = styled(Button)`
  display: none;
  margin: auto 0;
`;

const MenuButton = styled(NextUIButton)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  height: 24px;
`;

export const Navbar: FC<Props> = ({ inFooter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavContainer>
      <LogoLink href="/">
        <picture>
          {inFooter ? (
            <>
              <source
                media="(min-width: 0px) and (max-width: 744px)"
                srcSet={CSSPACE_CLEAN_LOGO_ICON}
              />
              <source
                media="(min-width: 745px) and (max-width: 1023px)"
                srcSet={CSSPACE_LOGO}
              />
              <source
                media="(min-width: 1024px) and (max-width: 1219px)"
                srcSet={CSSPACE_CLEAN_LOGO_ICON}
              />
              <source media="(min-width: 1220px)" srcSet={CSSPACE_LOGO} />
            </>
          ) : (
            <>
              <source
                media="(max-width: 744px)"
                srcSet={CSSPACE_CLEAN_LOGO_ICON}
              />
              <source media="(min-width: 745px)" srcSet={CSSPACE_LOGO} />
            </>
          )}
          <BrandLogo alt="Company Logo" src={CSSPACE_LOGO} />
        </picture>
      </LogoLink>
      <NavLinks isOpen={isOpen} onClose={onClose} />
      <LoginButton isDisabled variant="primary">
        Войти
      </LoginButton>
      <MenuButton isIconOnly variant="light" onPress={onOpen}>
        <MenuIcon alt="Menu" src={MENU_ICON} />
      </MenuButton>
    </NavContainer>
  );
};
