import React, { FC } from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";
import { OPEN_GRAPH_IMAGE } from "@/config/assets";

type Props = {
  title: string;
};

export const Head: FC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta key="title" content={title} property="og:title" />
      <meta content={siteConfig.description} name="description" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={OPEN_GRAPH_IMAGE} property="og:image" />
      <meta content="index, follow" name="robots" />
      <meta content="website" property="og:type" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
    </NextHead>
  );
};
