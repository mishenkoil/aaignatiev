import { Dispatch, SetStateAction } from "react";

import { SiteConfig } from "@/config/site";

export type NavigationItem = SiteConfig["navItems"][number];

export type NavigationLinkProps = {
  item: NavigationItem;
  onClick: Dispatch<SetStateAction<TNavHref>>;
  isActive?: boolean;
};

export type TNavHref = string;
