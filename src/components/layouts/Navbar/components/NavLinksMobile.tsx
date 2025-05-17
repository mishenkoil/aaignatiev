import styled from "styled-components";
import { Dispatch, FC, SetStateAction } from "react";
import { Divider, Button as NextUIButton } from "@nextui-org/react";

import { ContactInfo } from "../../ContactInfo";

import { NavigationLink } from "./NavigationLink";

import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/SocialLinks";
import { Copyright } from "@/components/styled";
import { CLOSE_ICON } from "@/config/assets";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
};

const NavModal = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  padding: 24px 10px;

  background-color: rgba(3, 2, 7, 1);

  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;

  @media (min-width: 744px) {
    background-color: rgba(3, 2, 7, 0.95);
    padding: 42px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavModalFooter = styled.div`
  margin-top: auto;
`;

const LinksWrapper = styled.div`
  margin-top: 106px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledDivider = styled(Divider)`
  margin: 24px 0;

  @media (min-width: 744px) {
    margin: 42px 0;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const HiddenOnMobile = styled.div`
  display: none;

  @media (min-width: 744px) {
    display: block;
  }
`;

const CloseIcon = styled.img`
  height: 24px;
`;

export const NavLinksMobile: FC<Props> = ({
  isOpen,
  onClose,
  activeNavItem,
  setActiveNavItem,
}) => {
  return (
    <NavModal data-active={isOpen} id="navbar-mobile" isOpen={isOpen}>
      <NavModalHeader>
        Меню
        <NextUIButton isIconOnly variant="light" onPress={onClose}>
          <CloseIcon alt="Close" src={CLOSE_ICON} />
        </NextUIButton>
      </NavModalHeader>
      <LinksWrapper>
        {siteConfig.navItems.map((item) => (
          <NavigationLink
            key={item.href}
            isActive={item.href === activeNavItem}
            item={item}
            onClick={setActiveNavItem}
          />
        ))}
      </LinksWrapper>

      <NavModalFooter>
        <ContactSection>
          <HiddenOnMobile>
            <StyledDivider />
            <ContactInfo />
          </HiddenOnMobile>
          <SocialLinks />
        </ContactSection>
        <StyledDivider />
        <Copyright>Все права защищены © 2025</Copyright>
      </NavModalFooter>
    </NavModal>
  );
};
