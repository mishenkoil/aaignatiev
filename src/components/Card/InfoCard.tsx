import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { styled } from "styled-components";
import { FC } from "react";
import Link from "next/link";

import { Button } from "../Button";

import { FooterTitle, FooterDescription } from "./styles";

import { ARROW_UP_RIGHT_ICON } from "@/config/assets";

type Props = {
  title?: string;
  footerTitle?: string;
  description?: string;
  url?: string;
  isShortFact?: boolean;
  isMarginLikeMember?: boolean;
};

const StyledCard = styled(Card)<{ isMarginLikeMember?: boolean }>`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;

  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;

  ${(props) =>
    props.isMarginLikeMember ? "gap: 96px;" : "justify-content: space-between;"}

  @media (min-width: 450px) {
    ${(props) =>
      props.isMarginLikeMember
        ? "gap: 200px;"
        : "justify-content: space-between;"}
  }

  @media (min-width: 744px) {
    padding: 22px;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  padding: 0;
  border-radius: 0;
`;

const StyledCardFooter = styled(CardFooter)`
  padding: 0;
  border-radius: 0;
`;

const CardTitle = styled.div`
  color: white;
  font:
    300 16px/48px var(--font-inter),
    sans-serif;
`;

const InfoText = styled.div`
  color: white;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export const InfoCard: FC<Props> = ({
  title,
  url,
  footerTitle,
  description,
  isShortFact,
  isMarginLikeMember,
}) => {
  return (
    <StyledCard isMarginLikeMember={isMarginLikeMember}>
      <StyledCardHeader>
        <CardTitle>{title}</CardTitle>
        {url && (
          <ButtonWrapper>
            <Button
              isIconOnly
              aria-label="More info"
              as={Link}
              href={url}
              size="lg"
              target="_blank"
            >
              <img alt="Arrow up-right icon" src={ARROW_UP_RIGHT_ICON} />
            </Button>
          </ButtonWrapper>
        )}
      </StyledCardHeader>
      <StyledCardFooter>
        <InfoText>
          <FooterTitle $isCapslock={isShortFact}>{footerTitle}</FooterTitle>
          <FooterDescription>{description}</FooterDescription>
        </InfoText>
      </StyledCardFooter>
    </StyledCard>
  );
};
