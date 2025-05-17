import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  border-radius: 32px;
  padding: 16px;
  background-color: #1e1d21;
  width: 100%;

  @media (min-width: 744px) {
    padding: 42px;
    border-radius: 42px;
  }

  @media (min-width: 1024px) {
    width: 420px;
  }
`;

const FormTitle = styled.div`
  font:
    400 24px var(--font-unbounded),
    sans-serif;
  font-family: var(--font-unbounded), sans-serif;
  font-weight: 900;
  color: white;
`;

const FormDescription = styled.div`
  font-size: 16px;
  font-family: var(--font-inter), sans-serif;
  font-weight: 300;
  color: white;
`;

const StyledIframe = styled.iframe`
  border-radius: 42px;
  color-scheme: auto;
  width: 100%;
  height: 410px !important;
  margin: 0 -32px 0 -32px;
`;

export const ContactForm: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Этот код выполняется только на клиенте
  }, []);

  return (
    <FormWrapper>
      <FormTitle>Связаться</FormTitle>
      <FormDescription>
        Введите данные и наши представители
        <br />
        ответят Вам в ближайшее время
      </FormDescription>
      {isClient && (
        <StyledIframe
          frameBorder="0"
          name="ya-form-677ccb49eb614619693b36a4"
          src="https://forms.yandex.ru/u/677ccb49eb614619693b36a4/?iframe=1"
          title="Форма обратной связи"
          width="650"
          // eslint-disable-next-line react/jsx-sort-props
          scrolling="no"
        />
      )}
    </FormWrapper>
  );
};
