import { FC } from "react";
import styled from "styled-components";

import { ListBlock, SocialLinks } from "./components";

import { DefaultLayout } from "@/components/layouts/default";
import { pluralize } from "@/utils/pluralize";
import { InfoCard } from "@/components/Card";

const ContainerWrapper = styled.div`
  // background-color: #aaa;

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

const Container = styled.div`
  // background-color: #666;

  // width: calc(100% - 20px);
  // margin: 0 auto;

  // display: flex;
  // flex-direction: column;

  // @media (min-width: 744px) {
  //   width: calc(100% - 84px);
  //   margin: 0 auto;
  // }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 947px;
    margin: 148px 120px 120px auto;
  }
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
    margin-left: -241px;
    max-width: 862px;
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

const SectionInner = styled.div<{ direction?: "column" | "row" }>`
  margin-top: 21px;
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  color: rgba(255, 255, 255, 1);
  font:
    900 24px var(--font-unbounded),
    sans-serif;
`;

const InfoText = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font:
    400 14px var(--font-inter),
    sans-serif;
`;

const Section = styled.div`
  margin-top: 42px;
`;

const PositionSection = styled.div`
  margin-top: 81px;
`;

const POSITION_PLURALIZE_MAP = {
  many: "учреждений",
  one: "учреждение",
  few: "учреждения",
  zero: "",
  two: "",
  other: "",
};

const CardWrapper = styled.div`
  height: 154px;
  flex: 1;
`;

const POSITIONS = [
  {
    title: "Лаборатория TCS, Университет ИТМО",
    hint: "Исследователь, соучредитель",
    url: "https://game.hse.ru/",
    imgUrl:
      "https://news.store.rambler.ru/img/c1f9e1de16c381686c5249abfd5cf77d?img-format=auto&img-1-resize=height:350,fit:max&img-2-filter=sharpen",
  },
  {
    title: "Лаборатория теории игр, НИУ ВШЭ",
    hint: "Младший научный сотрудник (2022-2025)",
    url: "https://game.hse.ru/",
    imgUrl:
      "https://news.store.rambler.ru/img/c1f9e1de16c381686c5249abfd5cf77d?img-format=auto&img-1-resize=height:350,fit:max&img-2-filter=sharpen",
  },
];

const SCIENTIFIC_INTERESTS = [
  {
    title: "01.",
    description: "Алгоритмы",
    url: "https://shad.yandex.ru/courses",
  },
  {
    title: "02.",
    description: "Параметризованные алгоритмы",
    url: "https://shad.yandex.ru/courses",
  },
  {
    title: "03.",
    description: "Алгоритмическая теория игр",
    url: "https://shad.yandex.ru/courses",
  },
];

const EDUCATION = [
  {
    title: "Доктор наук",
    hint: "TBA",
    description:
      "Санкт-Петербургское отделение Математического института имени Стеклова",
    imgUrl: "https://storage.yandexcloud.net/csspace-bucket/logos/hse-logo.svg",
  },
  {
    title: "M.Sc.",
    hint: "2024",
    description: "Санкт-Петербургский государственный университет",
    imgUrl: "https://storage.yandexcloud.net/csspace-bucket/logos/hse-logo.svg",
  },
  {
    title: "B.Sc.",
    hint: "2022",
    description: "Санкт-Петербургский государственный университет",
    imgUrl: "https://storage.yandexcloud.net/csspace-bucket/logos/hse-logo.svg",
  },
];

const SOCIAL_LINKS = [
  {
    title: "Telegram",
    url: "https://t.me/aaignatiev",
    imgUrl: "https://storage.yandexcloud.net/csspace-bucket/icons/telegram.svg",
  },
];

export const MainPage: FC = () => {
  return (
    <DefaultLayout>
      <ContainerWrapper>
        <Container>
          <MainTextWrapper>
            <MainText>АРТУР</MainText>
            <BrandName>ИГНАТЬЕВ</BrandName>
          </MainTextWrapper>

          {/* ДОЛЖНОСТИ */}
          {POSITIONS && POSITIONS.length > 0 && (
            <PositionSection>
              <SectionHeader>
                <SectionTitle>Должности</SectionTitle>
                <InfoText>
                  {POSITIONS.length}{" "}
                  {pluralize(POSITIONS.length, POSITION_PLURALIZE_MAP)}
                </InfoText>
              </SectionHeader>

              <SectionInner>
                <ListBlock items={POSITIONS} />
              </SectionInner>
            </PositionSection>
          )}

          {/* НАУЧНЫЕ ИНТЕРЕСЫ */}
          {SCIENTIFIC_INTERESTS && SCIENTIFIC_INTERESTS.length > 0 && (
            <Section>
              <SectionHeader>
                <SectionTitle>Научные интересы</SectionTitle>
              </SectionHeader>

              <SectionInner direction="row">
                {SCIENTIFIC_INTERESTS.map((cardData, idx) => (
                  <CardWrapper key={idx}>
                    <InfoCard {...cardData} />
                  </CardWrapper>
                ))}
              </SectionInner>
            </Section>
          )}

          {/* ОБРАЗОВАНИЕ */}
          {EDUCATION && EDUCATION.length > 0 && (
            <Section>
              <SectionHeader>
                <SectionTitle>Образование</SectionTitle>
              </SectionHeader>

              <SectionInner>
                <ListBlock items={EDUCATION} />
              </SectionInner>
            </Section>
          )}

          {/* КОНТАКТЫ */}
          {SOCIAL_LINKS && SOCIAL_LINKS.length > 0 && (
            <Section>
              <SectionHeader>
                <SectionTitle>Контакты</SectionTitle>
              </SectionHeader>

              <SectionInner>
                <SocialLinks socialLinks={SOCIAL_LINKS} />
              </SectionInner>
            </Section>
          )}
        </Container>
      </ContainerWrapper>
    </DefaultLayout>
  );
};
