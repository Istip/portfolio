import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { I18nProviderClient } from "@/locales/client";
import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Istvan Pasztor",
  description: "Creative developer and designer",
};

export default function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <I18nProviderClient locale={locale}>
          <Navbar />
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
