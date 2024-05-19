import type { Metadata } from "next";
import { I18nProviderClient } from "@/locales/client";
import { mona } from "@/utils/fonts";
import { enKeywords, huKeywords } from "@/utils/keywords";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar/Navbar";
import Noise from "@/utils/noise";
import NextTopLoader from "nextjs-toploader";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

export const sziasztok: Metadata = {
  title: "Nimród Keresztelője",
  description: "Szeretettel meghívunk Nimród kisfiunk keresztelőjére.",
  referrer: "origin-when-cross-origin",
  keywords: ["keresztelő", "meghívó", "Nimród"],
  metadataBase: new URL("https://nimrod-kereszteloje.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://nimrod-kereszteloje.vercel.app/",
    title: "Nimród Keresztelője",
    description: "Szeretettel meghívunk Nimród kisfiunk keresztelőjére.",
    siteName: "Nimród Keresztelője",
    images: [{ url: "/nimiarc.jpg" }],
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const metadata: Metadata =
    locale === "en"
      ? {
          referrer: "origin-when-cross-origin",
          title: "Istvan Pasztor",
          description: "Creative developer and designer",
          keywords: enKeywords,
          metadataBase: new URL("https://pasztoristvan.vercel.app"),
          openGraph: {
            type: "website",
            url: "https://pasztoristvan.vercel.app",
            title: "Istvan Portfolio",
            description: "Creative developer and designer",
            siteName: "Istvan Portfolio",
            images: [{ url: "/og.jpg" }],
          },
        }
      : {
          referrer: "origin-when-cross-origin",
          title: "Pásztor István",
          description: "Kreatív fejlesztő és tervező",
          keywords: huKeywords,
          metadataBase: new URL("https://pasztoristvan.vercel.app"),
          openGraph: {
            type: "website",
            url: "https://pasztoristvan.vercel.app",
            title: "István Portfolió",
            description: "Kreatív fejlesztő és tervező",
            siteName: "István Portfolió",
            images: [{ url: "/og.jpg" }],
          },
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
        <NextTopLoader zIndex={999999} color="#9381ff" showSpinner={false} />
        <I18nProviderClient locale={locale}>
          <Navbar />
          {children}
          <Noise />
          <ToastContainer
            position="bottom-center"
            theme="colored"
            hideProgressBar
            closeOnClick
          />
        </I18nProviderClient>
      </body>
    </html>
  );
}
