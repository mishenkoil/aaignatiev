import { FC } from "react";
import styled from "styled-components";

import { SocialLinks as SocialLinksList } from "@/components/SocialLinks";
import { siteConfig } from "@/config/site";
import { CHEVRON_RIGHT_ICON } from "@/config/assets";

const SocialLinksContainer = styled.div`
  display: none;
  min-width: 240px;
  align-items: center;
  gap: 12px;
  justify-content: start;
  flex-wrap: wrap;

  font:
    300 14px var(--font-inter),
    sans-serif;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const SocialLinksContainerWithPopup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  font:
    300 14px var(--font-inter),
    sans-serif;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const SocialLink = styled.a`
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

export const SocialLinks: FC = () => {
  return (
    <>
      <SocialLinksContainerWithPopup>
        <SocialLinksList />
        <span>Наши соцсети</span>
      </SocialLinksContainerWithPopup>

      <SocialLinksContainer>
        {siteConfig.socialLinks.map((social, index) => (
          <SocialLink key={index} href={social.url}>
            <LinkContent>
              <IconWrapper>
                <Icon
                  alt={`${social.title} icon`}
                  loading="lazy"
                  src={social.icon}
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
    </>
  );
};
