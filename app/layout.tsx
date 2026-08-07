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
  title: "Detailing Center",
  description: "Chăm sóc xe chuyên nghiệp - phủ ceramic, dán PPF, đánh bóng",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="bg-slate-950 text-white px-6 py-4 flex gap-6 justify-center">
          <a href="/" className="hover:text-blue-400">
            Trang chủ
          </a>
          <a href="/bang-gia" className="hover:text-blue-400">
            Bảng giá
          </a>
          <a href="/lien-he" className="hover:text-blue-400">
            Liên hệ
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
