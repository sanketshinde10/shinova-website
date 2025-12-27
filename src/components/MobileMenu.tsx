"use client";

import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={() => setOpen(false)} className="mb-6">
        ✕
      </button>

      <nav className="flex flex-col gap-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg text-navy"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
