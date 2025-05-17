import type { AppProps } from "next/app";

import { useLayoutEffect, StrictMode } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import clsx from "clsx";

import { fontUnbounded, fontInter, fontFiraCode } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useLayoutEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const currentTheme =
            document.documentElement.getAttribute("data-theme");

          if (currentTheme !== "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
          }
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    // Устанавливаем data-theme при первой загрузке
    document.documentElement.setAttribute("data-theme", "dark");

    return () => observer.disconnect();
  }, []);

  return (
    <StrictMode>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider>
          <Component
            className={clsx(
              fontUnbounded.className,
              fontInter.className,
              fontFiraCode.className
            )}
            {...pageProps}
          />
        </NextThemesProvider>
      </NextUIProvider>
    </StrictMode>
  );
}
