import {
  Fira_Code as FontFiraCode,
  // Inter as FontInter,
  Unbounded as FontUnbounded,
  Montserrat as FontMontserrat,
} from "next/font/google";

export const fontUnbounded = FontUnbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

export const fontInter = FontMontserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const fontFiraCode = FontFiraCode({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});
