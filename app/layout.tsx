import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import MobileNav from "./components/MobileNav";

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
      <body className="min-h-full flex flex-col bg-neutral-950">
        {/* TOP BAR — chỉ hiện trên desktop */}
        <div className="hidden md:flex items-center justify-between bg-black text-neutral-400 text-xs px-6 py-2 border-b border-neutral-900">
          <span>Chăm sóc xe chuyên nghiệp · Ceramic · PPF · Đánh bóng</span>
          <div className="flex items-center gap-5">
            <span>8:00 – 18:00 (T2–CN)</span>
            <a
              href="tel:0909123456"
              className="text-amber-400 font-semibold hover:text-amber-300 transition"
            >
              ☎ 0909 123 456
            </a>
          </div>
        </div>

        {/* MENU CHÍNH — sticky */}
        <nav className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur border-b border-neutral-800 text-neutral-200 px-4 md:px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-lg md:text-xl text-white shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            Detailing<span className="text-amber-400">Center</span>
          </a>

          {/* Menu desktop — ẩn trên mobile */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="/" className="hover:text-amber-400 transition">
              Trang chủ
            </a>
            <a href="/bang-gia" className="hover:text-amber-400 transition">
              Bảng giá
            </a>
            <a href="/blog" className="hover:text-amber-400 transition">
              Blog
            </a>
            <a href="/lien-he" className="hover:text-amber-400 transition">
              Liên hệ
            </a>
            <a
              href="/lien-he"
              className="bg-amber-500 hover:bg-amber-400 text-neutral-950 px-5 py-2.5 rounded-lg font-semibold transition shadow-lg shadow-amber-500/20"
            >
              Đặt lịch ngay
            </a>
          </div>

          {/* Menu mobile — nút hamburger */}
          <MobileNav />
        </nav>

        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
