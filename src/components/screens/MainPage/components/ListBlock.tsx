import { FC } from "react";
import styled, { css } from "styled-components";
import { Avatar, Card, Divider } from "@nextui-org/react";
import Link from "next/link";

import { CHEVRON_RIGHT_ICON } from "@/config/assets";

type ItemProps = {
  title: string;
  hint?: string;
  description?: string;
  url?: string;
  imgUrl?: string;
};

type Props = {
  items: ItemProps[];
};

const CardContainer = styled(Card)`
  border-radius: 42px;
  width: 100%;
  max-height: 100%;
  padding: 21px;
`;

const ItemWrapperStyles = css`
  border-radius: 32px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ItemWrapperDiv = styled.div`
  ${ItemWrapperStyles}
`;

const ItemWrapperLink = styled(Link)`
  ${ItemWrapperStyles}
`;

const StyledDivider = styled(Divider)`
  margin: 12px 0;
`;

const ItemHeader = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: auto 0;
`;

const ItemInner = styled.div``;

const ImageIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const ItemHeaderText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 1);
  justify-content: start;
  margin: auto 0;
`;

const Title = styled.div`
  font:
    600 16px var(--font-unbounded),
    sans-serif;
`;

const Subtitle = styled.div`
  margin-top: 2px;
  font:
    300 14px var(--font-inter),
    sans-serif;
`;

const Description = styled.div`
  margin-top: 12px;
  font:
    900 16px var(--font-unbounded),
    sans-serif;
`;

const StlyedAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
`;

const ItemWrapper: FC<{
  url?: string;
  withDivider?: boolean;
  children: React.ReactNode;
}> = ({ url, withDivider, children }) => {
  return (
    <>
      {withDivider && <StyledDivider />}
      {url ? (
        <ItemWrapperLink href={url} target="_blank">
          {children}
          <ImageIcon
            alt="Маркер ссылки"
            loading="lazy"
            src={CHEVRON_RIGHT_ICON}
          />
        </ItemWrapperLink>
      ) : (
        <ItemWrapperDiv>{children}</ItemWrapperDiv>
      )}
    </>
  );
};

export const ListBlock: FC<Props> = ({ items }) => {
  return (
    <CardContainer>
      {(items || []).length > 0 &&
        items!.map((item, index) => (
          <ItemWrapper key={index} url={item.url} withDivider={index !== 0}>
            <ItemInner>
              <ItemHeader>
                {item.imgUrl && <StlyedAvatar src={item.imgUrl} />}
                <ItemHeaderText>
                  <Title>{item.title}</Title>
                  <Subtitle>{item.hint}</Subtitle>
                </ItemHeaderText>
              </ItemHeader>
              {item.description && (
                <Description>{item.description}</Description>
              )}
            </ItemInner>
          </ItemWrapper>
        ))}
    </CardContainer>
  );
};
