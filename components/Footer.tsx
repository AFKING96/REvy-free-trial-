"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-revy-border/80 pt-16 pb-8 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-revy-border/40 items-start">
          
          {/* Column 1: Logo & Tagline (span-5) */}
          <div className="md:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-2 justify-start cursor-pointer" onClick={scrollToTop}>
              <div className="relative h-[36px] w-[150px]">
                <Image
                  src="/revy-logo.png"
                  alt="Revy AI Logo"
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-revy-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
              شريكك الذكي لأتمتة حجوزات العيادة والرد على استفسارات المرضى فورا وبدون تدخل بشري على مدار الساعة.
            </p>
          </div>

          {/* Column 2: Quick Links (span-3) */}
          <div className="md:col-span-3 space-y-4 text-right">
            <h3 className="text-white text-sm font-bold">روابط سريعة</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-revy-text-secondary">
              <li>
                <a href="#features" className="hover:text-revy-green transition-colors">المميزات</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-revy-green transition-colors">حاسبة الأرباح</a>
              </li>
              <li>
                <a href="#free-trial" className="hover:text-revy-green transition-colors">ابدأ التجربة المجانية</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support (span-4) */}
          <div className="md:col-span-4 space-y-4 text-right">
            <h3 className="text-white text-sm font-bold">تواصل معنا</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-revy-text-secondary">
              <li className="flex items-center gap-2 justify-start md:justify-start">
                <MessageCircle className="w-4 h-4 text-revy-green shrink-0" />
                <a href="https://wa.me/201012345678" target="_blank" className="hover:text-white transition-colors">
                  واتساب: +20 10 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 justify-start md:justify-start">
                <Mail className="w-4 h-4 text-revy-cyan shrink-0" />
                <a href="mailto:support@revy.ai" className="hover:text-white transition-colors">
                  support@revy.ai
                </a>
              </li>
              <li className="flex items-center gap-2 justify-start md:justify-start">
                <Globe className="w-4 h-4 text-revy-purple shrink-0" />
                <span className="text-revy-text-muted">الموقع الرسمي: revy.ai</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-revy-text-muted">
          
          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} Revy AI. جميع الحقوق محفوظة.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            
            <button
              suppressHydrationWarning
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-revy-card border border-revy-border flex items-center justify-center text-revy-text-secondary hover:text-white hover:border-revy-green transition-all cursor-pointer"
              title="الرجوع للأعلى"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
