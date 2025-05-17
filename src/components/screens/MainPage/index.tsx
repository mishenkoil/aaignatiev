import { FC } from "react";

import { IntroBlock, StatisticsBlock } from "./components";

import { DefaultLayout } from "@/components/layouts/default";

export const MainPage: FC = () => {
  return (
    <DefaultLayout>
      <IntroBlock />
      <StatisticsBlock />
      {/* <PartnerLogosSection /> */}
      {/* <CoursesBlock eventsPreview={eventsPreview} />
      <TeamBlock teamMembers={teamMembers} roles={roles} /> */}
      {/* <ConclusionBlock /> */}
    </DefaultLayout>
  );
};
