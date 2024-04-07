import type { Metadata } from "next";
import { I18nProviderClient } from "@/locales/client";
import Navbar from "@/components/Navbar/Navbar";
import Showcase from "@/components/Showcase/Showcase";
import Lenis from "@/utils/lenis";
import Noise from "@/utils/noise";
import { mona } from "@/utils/fonts";
import "../globals.css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const title = locale === "en" ? "Istvan Pasztor" : "Pásztor István";
  const description =
    locale === "en"
      ? "Creative developer and designer"
      : "Kreatív fejlesztő és tervező";

  const metadata: Metadata =
    locale === "en"
      ? {
          title: "Istvan Pasztor",
          description: "Creative developer and designer",
        }
      : {
          title: "Pásztor István",
          description: "Kreatív fejlesztő és tervező",
        };

  return metadata;
}

export default function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`${mona.className} antialiased scroll-smooth bg-light text-dark`}
      >
        <Lenis />
        <I18nProviderClient locale={locale}>
          <Navbar />
          <div className="grid grid-cols-2">
            <div className="pt-20">{children}</div>
            <Showcase />
          </div>
          <Noise />
        </I18nProviderClient>
      </body>
    </html>
  );
}
