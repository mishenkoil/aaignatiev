import styled from "styled-components";
import { FC } from "react";

import { Head } from "./head";

import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { siteConfig } from "@/config/site";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const NavWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 0 10px;

  @media (min-width: 744px) {
    width: calc(100% - 84px);
    margin: 0 42px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 1428px;
    margin: 0 auto;
  }
`;

const FooterWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 0 10px;

  @media (min-width: 744px) {
    width: calc(100% - 84px);
    margin: 0 42px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 1428px;
    margin: 0 auto;
  }
`;

export const DefaultLayout: FC<Props> = ({
  children,
  title = siteConfig.name,
}) => {
  return (
    <LayoutWrapper>
      <Head title={title} />
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <main>{children}</main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutWrapper>
  );
};
