import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { clientConfig } from "@/lib/client.config";

function hexToRgb(hex: string): string {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)} ${parseInt(r[2], 16)} ${parseInt(r[3], 16)}`
    : "0 0 0";
}

function buildThemeCss(): string {
  const c = clientConfig.colors;
  return `
    :root {
      --color-primary:          ${c.primary};
      --color-primary-rgb:      ${hexToRgb(c.primary)};
      --color-primary-text:     ${c.primaryText};
      --color-primary-text-rgb: ${hexToRgb(c.primaryText)};
      --color-secondary:        ${c.secondary};
      --color-secondary-rgb:    ${hexToRgb(c.secondary)};
      --color-accent:           ${c.accent};
      --color-accent-rgb:       ${hexToRgb(c.accent)};
      --color-accent-dark:      ${c.accentDark};
      --color-accent-dark-rgb:  ${hexToRgb(c.accentDark)};
      --color-accent-light:     ${c.accentLight};
      --color-accent-light-rgb: ${hexToRgb(c.accentLight)};
      --color-accent-text:      ${c.accentText};
      --color-accent-text-rgb:  ${hexToRgb(c.accentText)};
      --color-bg:               ${c.bg};
      --color-bg-rgb:           ${hexToRgb(c.bg)};
      --color-bg-text:          ${c.bgText};
      --color-bg-text-rgb:      ${hexToRgb(c.bgText)};
      --color-text-muted:       ${c.textMuted};
    }
  `;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-dmsans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: `${clientConfig.business.fullName} | ${clientConfig.business.city} TX`,
  description: clientConfig.business.heroSubtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: buildThemeCss() }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
