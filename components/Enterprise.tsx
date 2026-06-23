"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Landmark, ArrowLeft, Network, TrendingUp, Building, Activity } from "lucide-react";

export default function Enterprise() {
  const handleContact = () => {
    // Open direct WhatsApp chat
    window.open("https://wa.me/201012345678?text=أهلاً Revy AI، أود الاستفسار عن إعدادات الحساب للمؤسسات وسلاسل العيادات.", "_blank");
  };

  // State to simulate active conversations ticking up
  const [activeConvs, setActiveConvs] = useState({ cairo: 14, alex: 8, giza: 11, mansoura: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveConvs((prev) => ({
        cairo: Math.max(10, Math.min(25, prev.cairo + (Math.random() > 0.65 ? 1 : Math.random() > 0.85 ? -1 : 0))),
        alex: Math.max(5, Math.min(18, prev.alex + (Math.random() > 0.7 ? 1 : Math.random() > 0.9 ? -1 : 0))),
        giza: Math.max(8, Math.min(20, prev.giza + (Math.random() > 0.65 ? 1 : Math.random() > 0.85 ? -1 : 0))),
        mansoura: Math.max(3, Math.min(12, prev.mansoura + (Math.random() > 0.75 ? 1 : Math.random() > 0.9 ? -1 : 0))),
      }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="enterprise" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background radial fade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-revy-purple/5 via-revy-cyan/5 to-transparent blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 cursor-default">
        
        {/* Right Card: Connected Branch Network Map (span-7) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 bg-revy-card/30 border border-revy-border/40 rounded-[24px] p-6 relative overflow-hidden flex flex-col justify-between h-[360px] shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          {/* Ambient lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-revy-cyan/5 blur-[60px] pointer-events-none" />
          
          <div className="flex items-center justify-between mb-4 border-b border-revy-border/30 pb-3 text-right w-full">
            <div className="flex items-center gap-1.5 text-[10px] text-revy-green bg-revy-green/10 px-2.5 py-0.5 rounded-full border border-revy-green/20">
              <span className="w-1.5 h-1.5 rounded-full bg-revy-green animate-pulse" />
              <span>مركز العمليات المركزي نشط</span>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm text-white">شبكة الفروع المترابطة</h3>
              <Network className="w-4 h-4 text-revy-cyan" />
            </div>
          </div>

          {/* Simulated map graphic */}
          <div className="flex-grow relative flex items-center justify-center bg-[#050505]/40 rounded-xl border border-revy-border/20 overflow-hidden min-h-[180px]">
            
            {/* Connection lines using SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Central Hub in center: (200, 90) */}
              <path id="core-cairo" d="M 90 45 L 200 90" stroke="rgba(102, 224, 255, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
              <path id="core-alex" d="M 310 50 L 200 90" stroke="rgba(34, 229, 154, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
              <path id="core-giza" d="M 80 135 L 200 90" stroke="rgba(122, 92, 255, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
              <path id="core-mansoura" d="M 320 130 L 200 90" stroke="rgba(102, 224, 255, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Animating flow particles */}
              <circle r="3.5" fill="#66E0FF">
                <animateMotion dur="2.2s" repeatCount="indefinite">
                  <mpath href="#core-cairo" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#22E59A">
                <animateMotion dur="2.6s" repeatCount="indefinite">
                  <mpath href="#core-alex" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#7A5CFF">
                <animateMotion dur="2.4s" repeatCount="indefinite">
                  <mpath href="#core-giza" />
                </animateMotion>
              </circle>
              <circle r="3.5" fill="#66E0FF">
                <animateMotion dur="2.8s" repeatCount="indefinite">
                  <mpath href="#core-mansoura" />
                </animateMotion>
              </circle>
            </svg>

            {/* Central Core Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-revy-green to-revy-cyan flex items-center justify-center shadow-[0_0_20px_rgba(34,229,154,0.4)] border border-white/10">
                <Building className="w-4 h-4 text-revy-bg-primary" />
              </div>
              <span className="text-[8px] font-black text-white bg-[#0F0F0F] border border-revy-border/60 px-1.5 py-0.5 rounded mt-1.5 tracking-wider">REVY CORE</span>
            </div>

            {/* Branch Cairo Node */}
            <div className="absolute top-[18px] left-[25px] flex flex-col items-center z-10">
              <div className="flex items-center gap-1.5 bg-[#0F0F0F]/90 border border-revy-border/60 p-1.5 rounded-lg text-right">
                <div className="text-right">
                  <p className="text-[8px] text-white font-extrabold leading-none">فرع القاهرة</p>
                  <p className="text-[6px] text-revy-cyan mt-1 font-mono font-bold">{activeConvs.cairo} محادثة نشطة</p>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-revy-cyan animate-pulse shrink-0" />
              </div>
            </div>

            {/* Branch Alex Node */}
            <div className="absolute top-[25px] right-[20px] flex flex-col items-center z-10">
              <div className="flex items-center gap-1.5 bg-[#0F0F0F]/90 border border-revy-border/60 p-1.5 rounded-lg text-right">
                <div className="text-right">
                  <p className="text-[8px] text-white font-extrabold leading-none">فرع الإسكندرية</p>
                  <p className="text-[6px] text-revy-green mt-1 font-mono font-bold">{activeConvs.alex} محادثة نشطة</p>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-revy-green animate-pulse shrink-0" />
              </div>
            </div>

            {/* Branch Giza Node */}
            <div className="absolute bottom-[22px] left-[20px] flex flex-col items-center z-10">
              <div className="flex items-center gap-1.5 bg-[#0F0F0F]/90 border border-revy-border/60 p-1.5 rounded-lg text-right">
                <div className="text-right">
                  <p className="text-[8px] text-white font-extrabold leading-none">فرع الجيزة</p>
                  <p className="text-[6px] text-revy-purple mt-1 font-mono font-bold">{activeConvs.giza} محادثة نشطة</p>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-revy-purple animate-pulse shrink-0" />
              </div>
            </div>

            {/* Branch Mansoura Node */}
            <div className="absolute bottom-[18px] right-[25px] flex flex-col items-center z-10">
              <div className="flex items-center gap-1.5 bg-[#0F0F0F]/90 border border-revy-border/60 p-1.5 rounded-lg text-right">
                <div className="text-right">
                  <p className="text-[8px] text-white font-extrabold leading-none">فرع المنصورة</p>
                  <p className="text-[6px] text-revy-cyan mt-1 font-mono font-bold">{activeConvs.mansoura} محادثة نشطة</p>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-revy-cyan animate-pulse shrink-0" />
              </div>
            </div>

          </div>

          <p className="text-[10px] text-revy-text-secondary leading-relaxed mt-3 text-right">
            ربط متكامل وسلس لجميع الفروع تحت لوحة تحكم واحدة لمراقبة أداء المساعدين والتحويلات محلياً ومركزياً.
          </p>
        </motion.div>

        {/* Left Card: Comparative Analytics (span-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 bg-revy-card/30 border border-revy-border/40 rounded-[24px] p-6 relative overflow-hidden flex flex-col justify-between h-[360px] shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-revy-purple/5 blur-[50px] pointer-events-none" />
          
          <div className="flex items-center justify-between mb-4 border-b border-revy-border/30 pb-3 text-right w-full">
            <span className="text-[9px] text-revy-text-secondary font-mono">Revy Enterprise vs Manual</span>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm text-white">التحليلات المقارنة للمؤسسات</h3>
              <TrendingUp className="w-4 h-4 text-revy-purple" />
            </div>
          </div>

          <div className="flex-grow space-y-5 flex flex-col justify-center text-right">
            {/* Comparison 1: Response Time */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] w-full">
                <span className="text-revy-green font-bold">بأقل من 3 ثوانٍ (تلقائي)</span>
                <span className="text-white font-extrabold">سرعة الاستجابة للرسائل</span>
              </div>
              
              {/* Bars */}
              <div className="space-y-1.5 w-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-grow h-2.5 bg-[#111111] rounded-full overflow-hidden border border-revy-border/30 flex items-center justify-end">
                    <div className="h-full bg-gradient-to-l from-revy-green to-revy-cyan rounded-full" style={{ width: "98%" }} />
                  </div>
                  <span className="text-[9px] text-revy-green font-bold shrink-0 w-16 text-left">Revy AI: 99.8%</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-grow h-2.5 bg-[#111111] rounded-full overflow-hidden border border-revy-border/30 flex items-center justify-end">
                    <div className="h-full bg-revy-text-muted/20 rounded-full" style={{ width: "24%" }} />
                  </div>
                  <span className="text-[9px] text-revy-text-muted shrink-0 w-16 text-left font-bold">يدوي: 24.0%</span>
                </div>
              </div>
            </div>

            {/* Comparison 2: Booking Confirmation */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] w-full">
                <span className="text-revy-green font-bold">+240% نمو في الحجوزات</span>
                <span className="text-white font-extrabold">معدل تحويل وتأكيد الحجوزات</span>
              </div>
              
              {/* Bars */}
              <div className="space-y-1.5 w-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-grow h-2.5 bg-[#111111] rounded-full overflow-hidden border border-revy-border/30 flex items-center justify-end">
                    <div className="h-full bg-gradient-to-l from-revy-purple to-revy-cyan rounded-full" style={{ width: "92%" }} />
                  </div>
                  <span className="text-[9px] text-revy-purple font-bold shrink-0 w-16 text-left">Revy AI: 92.4%</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-grow h-2.5 bg-[#111111] rounded-full overflow-hidden border border-revy-border/30 flex items-center justify-end">
                    <div className="h-full bg-revy-text-muted/20 rounded-full" style={{ width: "35%" }} />
                  </div>
                  <span className="text-[9px] text-revy-text-muted shrink-0 w-16 text-left font-bold">يدوي: 35.2%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[8px] text-revy-text-muted text-right mt-3 border-t border-revy-border/20 pt-2 flex items-center justify-end gap-1.5">
            <span>البيانات مستندة على إحصائيات سلاسل العيادات الشريكة لعام 2026</span>
            <Activity className="w-3 h-3 text-revy-text-muted" />
          </div>
        </motion.div>

        {/* Bottom Card: Description & CTA (span-12) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-12 bg-gradient-to-br from-revy-card to-[#0d091e] border border-revy-border/60 rounded-[24px] p-8 sm:p-10 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] rounded-full bg-revy-purple/10 blur-[90px] pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-revy-cyan/5 blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-revy-purple/10 flex items-center justify-center mx-auto text-revy-purple border border-revy-purple/20 shadow-[0_0_15px_rgba(122,92,255,0.2)]">
              <Landmark className="w-5 h-5" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              حلول مركّزة للمؤسسات وسلاسل العيادات
            </h2>

            <p className="text-revy-text-secondary text-sm sm:text-base leading-relaxed">
              نوفر لك لوحة إدارة عليا موحدة تمكنك من متابعة أداء الذكاء الاصطناعي في فروعك، تحليلات التحويل، ومستويات رضا المرضى، مع إمكانية تخصيص ردود وجدول كل عيادة لتناسب خصوصية فرعها.
            </p>

            <div className="pt-2">
              <button
                suppressHydrationWarning
                onClick={handleContact}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#050505] border border-revy-border text-white font-bold text-sm hover:border-revy-purple hover:text-revy-purple hover:bg-revy-purple/5 transition-all duration-300 cursor-pointer group shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
              >
                <span>تواصل معنا لتجهيز حساب المؤسسات</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
