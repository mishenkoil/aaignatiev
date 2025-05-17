import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;

  @media (min-width: 744px) {
    flex-direction: row;
    gap: 100px;
  }
`;

const InfoSection = styled.div<{ fixedWidth?: boolean }>`
  ${(props) => (props.fixedWidth ? "width: 160px" : "")}
`;

const InfoTitle = styled.h3`
  font-family: var(--font-unbounded), sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: white;
`;

const InfoText = styled.p`
  font-family: var(--font-unbounded), sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  color: white;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledLink = styled(Link)`
  &:hover {
    font-weight: 600;
  }
`;

export const ContactInfo: FC = () => {
  return (
    <InfoContainer>
      <InfoSection fixedWidth>
        <InfoTitle>Контакты</InfoTitle>
        <InfoText>
          tg:{" "}
          <StyledLink href="https://t.me/aaignatiev" target="_blank">
            @aaignatiev
          </StyledLink>
        </InfoText>
      </InfoSection>
      <InfoSection>
        <InfoTitle>Адрес</InfoTitle>
        <InfoText>г. Санкт-Петербург, наб. реки Фонтанки, 27.</InfoText>
      </InfoSection>
    </InfoContainer>
  );
};
