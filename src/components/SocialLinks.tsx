import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";

const SocialContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const SocialLinks: FC = () => {
  return (
    <SocialContainer>
      {siteConfig.socialLinks.map((social, index) => (
        <Button
          key={index}
          as={Link}
          href={social.url}
          isIconOnly={true}
          size="lg"
          target="blank"
        >
          <img alt={social.title} loading="lazy" src={social.icon} />
        </Button>
      ))}
    </SocialContainer>
  );
};
