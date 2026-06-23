import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const uncage = localFont({
  src: "../public/assets/fonts/UNCAGE-Medium.otf",
  variable: "--font-heading",
  display: "swap",
});

const uncageRegular = localFont({
  src: "../public/assets/fonts/UNCAGE-Regular.otf",
  variable: "--font-heading-regular",
  display: "swap",
});

const helveticaLight = localFont({
  src: "../public/assets/fonts/HelveticaNeue-Light.otf",
  variable: "--font-body-light",
  display: "swap",
  weight: "300",
});

const helveticaMedium = localFont({
  src: "../public/assets/fonts/HelveticaNeue-Medium.otf",
  variable: "--font-body-medium",
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: "SREDA",
  description: "Культурная платформа для выбора событий в Москве",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SREDA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${uncage.variable} ${uncageRegular.variable} ${helveticaLight.variable} ${helveticaMedium.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
