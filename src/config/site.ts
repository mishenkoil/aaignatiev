import { YOUTUBE_ICON, TELEGRAM_ICON } from "./assets";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CS Space",
  description:
    "Открытое Computer Science Объединение. Мы запускаем новую научно-образовательную инициативу. Мероприятия будут проходить на площадках ПОМИ РАН, а также онлайн.",
  navItems: [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Мероприятия",
      href: "/events",
    },
    {
      title: "О нас",
      href: "/team",
    },
  ],
  socialLinks: [
    {
      title: "YouTube",
      url: "https://youtube.com/@ComputerScienceSpace",
      icon: YOUTUBE_ICON,
    },
    {
      title: "Telegram",
      url: "https://t.me/csspace_io",
      icon: TELEGRAM_ICON,
    },
  ],
};
