"use client";

import { useEffect } from "react";

export default function PageClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(
              entry.target.parentElement?.querySelectorAll(".fade-up") ?? []
            );
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, Math.min(idx * 80, 320));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    fadeEls.forEach((el) => observer.observe(el));

    const faqBtns = document.querySelectorAll(".faq-q");
    faqBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        if (!item) return;
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });

    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (nav) {
        nav.style.background =
          window.scrollY > 60 ? "rgba(11,15,20,0.98)" : "rgba(11,15,20,0.92)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{children}</>;
}
