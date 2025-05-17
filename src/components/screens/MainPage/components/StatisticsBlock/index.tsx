import * as React from "react";
import styled from "styled-components";

import { InfoCard } from "@/components/Card";
import { ABSTRACT_HOME_2 } from "@/config/assets";
import { ConditionalBr } from "@/components/styled";

const PageWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 126px auto 60px auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 744px) {
    width: calc(100% - 84px);
    margin: 260px auto 130px auto;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 1428px;
    margin: 242px auto 120px auto;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  gap: 20px;
`;

const StyledImage = styled.img`
  position: absolute;
  left: -195px;
  top: 198px;
  width: 390px;
  display: none;

  pointer-events: none;

  @media (min-width: 744px) {
    display: block;
  }
`;

const MainColumn = styled.div`
  max-width: 1067px;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: auto;
`;

const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  align-items: start;
  gap: 16px;
  flex-wrap: wrap;

  @media (min-width: 744px) {
    flex-direction: row;
  }
`;

const CardWrapper = styled.div<{ $index?: number; $customHeight?: number }>`
  width: 100%;
  flex: 1;
  height: ${(props) => props.$customHeight || 345}px;
  margin-top: 0;

  @media (max-width: 744px) {
    & > div {
      height: unset;
    }
  }

  @media (min-width: 744px) {
    margin-top: ${(props) => (props.$index || 0) * 42}px;
  }
`;

const MultipleCardsWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 488px;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 1);
  justify-content: start;

  font:
    900 32px var(--font-unbounded),
    sans-serif;

  @media (min-width: 450px) {
    font:
      900 48px var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 744px) {
    font:
      900 64px var(--font-unbounded),
      sans-serif;
  }

  @media (min-width: 1024px) {
    font:
      900 96px var(--font-unbounded),
      sans-serif;
  }
`;

const MainText = styled.div`
  width: 100%;
  white-space: nowrap;
`;

const BrandName = styled.div`
  width: 100%;
  margin-top: 6px;

  white-space: nowrap;
  text-align: right;
`;

const SubText = styled.div`
  color: rgba(255, 255, 255, 1);
  margin-top: 42px;

  font:
    300 12px var(--font-inter),
    sans-serif;

  @media (min-width: 744px) {
    font:
      300 16px var(--font-inter),
      sans-serif;
  }
`;

export const StatisticsBlock: React.FC = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <StyledImage
          alt="Abstract image"
          loading="lazy"
          src={ABSTRACT_HOME_2}
        />
        <MainColumn>
          <TextWrapper>
            <MainTextWrapper>
              <MainText>Что такое</MainText>
              <BrandName>CS Space?</BrandName>
            </MainTextWrapper>
            <SubText>
              В 2025 году мы планируем проводить курсы, лекции, митапы и
              соревнования для <ConditionalBr />
              профессионалов из индустрии, исследователей и студентов.
              Мероприятия будут проходить <ConditionalBr />
              по выходным и вечерам будних дней в ПОМИ РАН и на площадках
              партнёров, а также онлайн.
            </SubText>
          </TextWrapper>

          <StatisticsWrapper>
            <CardWrapper $index={0}>
              <InfoCard
                isShortFact
                description="Преподавателей — профессионалов Computer Science"
                footerTitle="20+"
                title="01."
                url="/team#teachers"
              />
            </CardWrapper>
            <MultipleCardsWrapper>
              <CardWrapper $customHeight={187} $index={1}>
                <InfoCard
                  isShortFact
                  description="Открытых лекций"
                  footerTitle="15+"
                  title="02."
                  url="/events#open-lectures"
                />
              </CardWrapper>
              <CardWrapper $customHeight={243}>
                <InfoCard
                  isShortFact
                  description="Соревнований по математике и программированию"
                  footerTitle="3+"
                  title="03."
                  url="/events#schools"
                />
              </CardWrapper>
            </MultipleCardsWrapper>
            <CardWrapper $index={2}>
              <InfoCard
                isShortFact
                description="Специализированных курсов"
                footerTitle="6+"
                title="04."
                url="/events#courses"
              />
            </CardWrapper>
          </StatisticsWrapper>
        </MainColumn>
      </ContentContainer>
    </PageWrapper>
  );
};
