import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";

export const metadata: Metadata = {
  title: "Kundenmagnetapp",
  description:
    "Kundenbewertungen sammeln, moderieren und seriös auf Ihrer Website einbinden – DSGVO-konform.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        {/* TTDSG Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
