import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

import { CHEVRON_RIGHT_ICON } from "@/config/assets";

type Props = {
  socialLinks: {
    title: string;
    url: string;
    imgUrl: string;
  }[];
};

const SocialLinksContainer = styled.div`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 12px;
  justify-content: start;
  flex-wrap: wrap;

  font:
    300 14px var(--font-inter),
    sans-serif;
`;

const SocialLink = styled(Link)`
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: start;
  padding: 6px 12px 6px 6px;
  text-decoration: none;
`;

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled.div`
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 12px;
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 1);
`;

const Title = styled.span`
  font:
    500 16px var(--font-unbounded),
    sans-serif;
`;

const SubText = styled.span`
  font:
    300 14px var(--font-inter),
    sans-serif;
`;

const ArrowIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

export const SocialLinks: FC<Props> = ({ socialLinks }) => {
  return (
    <SocialLinksContainer>
      {socialLinks.map((social, index) => (
        <SocialLink key={index} href={social.url} target="_blank">
          <LinkContent>
            <IconWrapper>
              <Icon
                alt={`${social.title} icon`}
                loading="lazy"
                src={social.imgUrl}
              />
            </IconWrapper>
            <TextContent>
              <Title>{social.title}</Title>
              <SubText>Перейти</SubText>
            </TextContent>
          </LinkContent>
          <ArrowIcon alt="Arrow" loading="lazy" src={CHEVRON_RIGHT_ICON} />
        </SocialLink>
      ))}
    </SocialLinksContainer>
  );
};
