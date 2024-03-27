import type { Metadata } from "next";
import { I18nProviderClient } from "@/locales/client";
import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import Showcase from "@/components/Showcase/Showcase";

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
      <body className="antialiased scroll-smooth bg-light text-dark">
        <I18nProviderClient locale={locale}>
          <Navbar />
          <div className="grid grid-cols-2">
            <div className="pt-20">{children}</div>
            <Showcase />
          </div>
        </I18nProviderClient>
      </body>
    </html>
  );
}
