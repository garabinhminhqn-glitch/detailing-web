"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Trang chủ" },
    { href: "/bang-gia", label: "Bảng giá" },
    { href: "/blog", label: "Blog" },
    { href: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <div className="md:hidden">
      {/* Nút hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="text-2xl text-neutral-200 w-10 h-10 flex items-center justify-center"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menu xổ xuống */}
      {open && (
        <div className="absolute left-0 right-0 top-full bg-neutral-950 border-b border-neutral-800 flex flex-col px-4 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-neutral-200 hover:text-amber-400 transition border-b border-neutral-900 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/lien-he"
            onClick={() => setOpen(false)}
            className="mt-2 mb-2 text-center bg-amber-500 text-neutral-950 py-3 rounded-lg font-semibold"
          >
            Đặt lịch ngay
          </a>
        </div>
      )}
    </div>
  );
}
