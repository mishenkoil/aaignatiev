import { GetStaticProps } from "next";

import { MainPage as MainPageBase } from "@/components/screens/MainPage";

export default function MainPage() {
  return <MainPageBase />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
