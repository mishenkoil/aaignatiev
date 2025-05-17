import * as React from "react";
import styled from "styled-components";
import { FC } from "react";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

import { SocialLinks } from "./components/SocialLinks";
import useProgressiveImg from "./hook";

import { Button } from "@/components/Button";
import {
  ABSTRACT_COLORED_ANIMATED,
  ABSTRACT_COLORED_MASK,
  ABSTRACT_COLORED_STATIC,
  ARROW_UP_RIGHT_ICON,
} from "@/config/assets";
import { SvgMaskGif } from "@/components/SvgMaskGif";

const Container = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 744px) {
    width: calc(100% - 84px);
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 1428px;
  }
`;

const StyledImage = styled(SvgMaskGif)`
  position: absolute;
  top: -22px;
  right: 0;
  width: 244px;
  height: 244px;

  z-index: 1;
  object-fit: cover;
  pointer-events: none;

  @media (min-width: 450px) {
    top: -42px;
    left: 43.5%;
    right: unset;
    transform: translate(-50%, 0); /* Сдвиг на половину ширины и высоты */

    width: 350px;
    height: 350px;
  }

  @media (min-width: 744px) {
    top: -80px;

    width: 600px;
    height: 600px;
  }

  @media (min-width: 1440px) {
    top: -53px;
  }
`;

const HeadingWrapper = styled.h1`
  position: relative;
  margin-top: 116px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  align-self: stretch;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);

  font:
    900 24px var(--font-unbounded),
    sans-serif;

  @media (min-width: 450px) {
    font:
      900 32px var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 744px) {
    margin-top: 196px;
    font:
      900 48px var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 1024px) {
    margin-top: 107px;
    font:
      900 64px var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 1440px) {
    margin-top: 128px;
    font:
      900 96px var(--font-unbounded),
      sans-serif;
  }
`;

const MainHeading = styled.div``;

const SubHeading = styled.div`
  z-index: 2;
  flex: 1;
  white-space: nowrap;
  text-align: right;
`;

const SecondaryHeading = styled.div`
  z-index: 2;
  white-space: nowrap;
`;

const ContentWrapper = styled.div`
  z-index: 2;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 744px) {
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const DescriptionSection = styled.section`
  width: fit-content;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  color: rgba(255, 255, 255, 1);
  justify-content: start;
  flex: 1;
  flex-basis: 0%;
  font:
    16px var(--font-inter),
    sans-serif;

  @media (min-width: 744px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    width: fit-content;
    flex-direction: column;
  }
`;

const Description = styled.p`
  font:
    300 12px var(--font-inter),
    sans-serif;

  @media (min-width: 744px) {
    font:
      300 16px var(--font-inter),
      sans-serif;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 42px;
  width: fit-content;

  @media (min-width: 744px) {
    margin-top: inherit;
  }

  @media (min-width: 1024px) {
    margin-top: 42px;
  }
`;

const StyledDivider = styled(Divider)`
  display: initial;
  margin: 24px 0;

  @media (min-width: 744px) {
    margin: 21px 0;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const IntroBlock: FC = () => {
  const [animatedImgSrc] = useProgressiveImg(
    ABSTRACT_COLORED_STATIC,
    ABSTRACT_COLORED_ANIMATED
  );

  return (
    <Container>
      <HeadingWrapper>
        <StyledImage gifSrc={animatedImgSrc} maskSrc={ABSTRACT_COLORED_MASK} />
        <MainHeading>Открытое</MainHeading>
        <SubHeading>Computer Science</SubHeading>
        <SecondaryHeading>Объединение</SecondaryHeading>
      </HeadingWrapper>
      <ContentWrapper>
        <DescriptionSection>
          <Description>
            Мы запускаем новую научно-
            <br />
            образовательную инициативу
          </Description>
          <ButtonWrapper>
            <Button
              as={Link}
              href="/events"
              icon={ARROW_UP_RIGHT_ICON}
              variant="secondary"
            >
              Все мероприятия
            </Button>
          </ButtonWrapper>
        </DescriptionSection>
        <StyledDivider />
        <SocialLinks />
      </ContentWrapper>
    </Container>
  );
};
