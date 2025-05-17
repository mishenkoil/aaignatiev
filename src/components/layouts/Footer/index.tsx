import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Divider } from "@nextui-org/react";

import { Copyright } from "../../styled";
import { ContactInfo } from "../ContactInfo";

import { ContactForm } from "./components/ContactForm";
import { MainContainer, ContentWrapper } from "./components/StyledComponents";

import { Navbar } from "@/components/layouts/Navbar";
import { SocialLinks } from "@/components/SocialLinks";

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media (min-width: 744px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 24px 0;

  @media (min-width: 744px) {
    margin: 42px 0;
  }
`;

const NegativeMarginWrapper = styled.div`
  margin-top: -10px;

  @media (min-width: 744px) {
    margin-top: -21px;
  }
`;

export const Footer: FC = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Navbar inFooter />
        <NegativeMarginWrapper>
          <StyledDivider />
        </NegativeMarginWrapper>
        <ContactSection>
          <ContactInfo />
          <SocialLinks />
        </ContactSection>
        <StyledDivider />
        <Copyright>Все права защищены © 2025</Copyright>
      </ContentWrapper>
      <ContactForm />
    </MainContainer>
  );
};
