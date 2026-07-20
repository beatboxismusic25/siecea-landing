import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIECEA — Hospital San Diego de Alcalá",
  description:
    "Portal interno del Sistema de Gestión Hospitalaria del Hospital San Diego de Alcalá. Guías de acceso, módulos y documentación para el personal.",
  openGraph: {
    title: "SIECEA — Hospital San Diego de Alcalá",
    description:
      "Portal interno del personal. Accede a la documentación, conoce los módulos del sistema y encuentra todo lo que necesitas para usar SIECEA.",
    type: "website",
    locale: "es_MX",
  },
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    var dark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
