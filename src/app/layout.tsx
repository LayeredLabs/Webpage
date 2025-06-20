import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Layeredlabs",
  description: "Layering Reality. Building the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '48px',
          marginBottom: '48px',
        }}>
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            color: '#18405A',
            fontFamily: 'inherit',
          }}>
            LAYEREDLABS
          </div>
          <div style={{
            fontSize: '0.95rem',
            color: '#18405A',
            letterSpacing: '0.12em',
            marginTop: '0.5rem',
            fontFamily: 'inherit',
          }}>
            LAYERING REALITY. BUILDING THE FUTURE
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
