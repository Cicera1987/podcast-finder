import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Template from "@/components/tampletes/tamplete";
import Footer from "@/components/organisms/footer/footer";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Header from "@/components/organisms/header/header";

import I18nProvider from "@/i18n/i18nProvider";
import { FavoritesProvider } from "@/context/favoritesContext";

export const metadata: Metadata = {
  title: "Podcast Finder - Descubra e Ouça Seus Podcasts Favoritos",
  description: "Descubra novos podcasts, escute episódios e favorite conteúdos com o Podcast Finder, sua plataforma de streaming integrada ao Spotify.",
  icons: {
    icon: "/favicon.png"
  }
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <FavoritesProvider>
          <I18nProvider>
            <Template
              header={<Header />}
              sidebar={<Sidebar />}
              body={children}
              footer={<Footer />}
            />
          </I18nProvider>

        </FavoritesProvider>

      </body>
    </html>
  );
}
