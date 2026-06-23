"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, ShieldCheck, Check, Sparkles } from "lucide-react";

export default function Hero() {
  const [chatStep, setChatStep] = useState(0);
  const [isRevyActive, setIsRevyActive] = useState(false);

  // Chat sequence logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runSequence = () => {
      // Step 0: Patient asks price (Pain)
      setChatStep(0);
      setIsRevyActive(false);

      // Step 1: Wait... no response
      timer = setTimeout(() => {
        setChatStep(1);

        // Step 2: Patient leaves
        timer = setTimeout(() => {
          setChatStep(2);

          // Step 3: Transition to REVY AI solution
          timer = setTimeout(() => {
            setIsRevyActive(true);
            setChatStep(3);

            // Step 4: Patient asks again (with Revy)
            timer = setTimeout(() => {
              setChatStep(4);

              // Step 5: Revy responds instantly
              timer = setTimeout(() => {
                setChatStep(5);

                // Step 6: Patient requests time
                timer = setTimeout(() => {
                  setChatStep(6);

                  // Step 7: Revy confirms and books
                  timer = setTimeout(() => {
                    setChatStep(7);

                    // Restart the loop after showing solution for 7 seconds
                    timer = setTimeout(() => {
                      runSequence();
                    }, 7000);
                  }, 2500);
                }, 2000);
              }, 2000);
            }, 1500);
          }, 3000);
        }, 2500);
      }, 2000);
    };

    runSequence();

    return () => clearTimeout(timer);
  }, []);

  const scrollToTrial = () => {
    const element = document.getElementById("free-trial");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden px-6 md:px-12 z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Right Side: Headline and copy (RTL logic) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-right z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-revy-green/10 border border-revy-green/20 text-revy-green text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>مستقبل إدارة العيادات بالذكاء الاصطناعي</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            كام مريض ضاع منك <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-revy-green via-revy-cyan to-revy-purple text-glow-green">
              النهارده؟
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-revy-text-secondary mb-8 leading-relaxed max-w-xl"
          >
            كل رسالة مبتتردش عليها = مريض راح لمنافسك.
            <br />
            <strong className="text-white font-semibold">Revy</strong> بيرد على المرضى ويحجز المواعيد تلقائي 24/7 عبر واتساب وفيسبوك لزيادة حجوزاتك بنسبة تصل إلى 45%.
          </motion.p>

          {/* Primary CTA and trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-start"
          >
            <button
              suppressHydrationWarning
              onClick={scrollToTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-revy-green via-revy-cyan to-revy-purple text-revy-bg-primary font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(34,229,154,0.3)] hover:shadow-[0_0_30px_rgba(34,229,154,0.5)] cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">جرّب Revy مجاناً 5 أيام</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 justify-start text-sm text-revy-text-muted border-t border-revy-border/40 pt-6"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-revy-green" />
              <span>بدون بطاقة ائتمان</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-revy-green" />
              <span>بدون عقد سنوي</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-revy-green" />
              <span>إلغاء في أي وقت</span>
            </div>
          </motion.div>

        </div>

        {/* Left Side: Interactive Chat Demo Device */}
        <div className="lg:col-span-6 flex justify-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-[400px] aspect-[9/18] bg-black rounded-[40px] p-3 border-4 border-[#1F1F1F] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(122,92,255,0.05)] relative overflow-hidden flex flex-col justify-between"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1F1F1F] rounded-b-2xl z-20 flex justify-center items-center">
              <div className="w-12 h-1 bg-black rounded-full mb-1" />
            </div>

            {/* Top Bar of Chat */}
            <div className="flex items-center justify-between pt-8 pb-3 px-4 border-b border-revy-border/80 bg-[#0A0A0A] relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-revy-border flex items-center justify-center overflow-hidden border border-revy-divider">
                  <span className="text-white text-xs font-bold">🩺</span>
                </div>
                <div className="text-right">
                  <h3 className="text-sm font-bold text-white">عيادة الأسنان التخصصية</h3>
                  <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${isRevyActive ? "bg-revy-green animate-pulse" : "bg-revy-text-muted"}`} />
                    <span className="text-[10px] text-revy-text-secondary">
                      {isRevyActive ? "REVY AI نشط الآن" : "نشط منذ 3 ساعات"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-revy-text-muted">10:15 AM</div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col justify-end min-h-[300px] scrollbar-none">
              
              {/* Message: Patient asks price */}
              <AnimatePresence>
                {!isRevyActive && chatStep >= 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="self-end max-w-[75%] bg-[#1E1E1E] text-white p-3 rounded-2xl rounded-tr-none text-sm text-right leading-relaxed shadow-sm border border-revy-border"
                  >
                    <p>الكشف بكام لو سمحت؟ وعايز أحجز موعد بكرة.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PAIN SCENARIO */}
              <AnimatePresence>
                {!isRevyActive && chatStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-6 text-center text-xs text-revy-text-muted gap-2"
                  >
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-revy-text-muted rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-revy-text-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-revy-text-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span>انتظار الرد... (3 ساعات تمر)</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {!isRevyActive && chatStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="self-end max-w-[75%] bg-[#1E1E1E] text-white p-3 rounded-2xl rounded-tr-none text-sm text-right leading-relaxed border border-revy-border"
                  >
                    <p>شكراً، حجزت عند عيادة تانية عشان اتأخرتوا في الرد. 👋</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* TRANSITION OVERLAY */}
              <AnimatePresence>
                {isRevyActive && chatStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inset-0 bg-revy-green/10 border border-revy-green/20 rounded-2xl p-4 text-center my-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-revy-green/20 flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-4 h-4 text-revy-green animate-pulse" />
                    </div>
                    <h4 className="text-xs font-bold text-revy-green">تم تفعيل المساعد الذكي REVY AI</h4>
                    <p className="text-[10px] text-revy-text-secondary mt-1">الرد الفوري قيد العمل الآن</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* REVY SOLUTION SCENARIO */}
              <AnimatePresence>
                {isRevyActive && chatStep >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-end max-w-[75%] bg-[#1E1E1E] text-white p-3 rounded-2xl rounded-tr-none text-sm text-right border border-revy-border"
                  >
                    <p>الكشف بكام لو سمحت؟ وعايز أحجز موعد بكرة.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isRevyActive && chatStep >= 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-start max-w-[75%] bg-gradient-to-br from-revy-green/20 to-revy-cyan/10 border border-revy-green/30 text-white p-3 rounded-2xl rounded-tl-none text-sm text-right leading-relaxed"
                  >
                    <p className="font-semibold text-[10px] text-revy-green mb-1 flex items-center gap-1 justify-end">
                      <span>رد ذكي فوري بواسطة Revy</span>
                      <Sparkles className="w-3 h-3" />
                    </p>
                    <div className="space-y-2 text-right">
                      <p>أهلاً بيك 👋</p>
                      <p>كشف الأسنان 350 جنيه.</p>
                      <p className="text-xs text-revy-text-secondary mt-1">متاح بكرة:</p>
                      <div className="flex flex-col gap-1.5 mt-1">
                        <div className="px-2 py-1 rounded bg-[#050505] border border-revy-border/80 text-center text-xs text-revy-cyan font-semibold flex items-center justify-center gap-1">
                          <span>🕔</span> <span>5:00 مساءً</span>
                        </div>
                        <div className="px-2 py-1 rounded bg-[#050505] border border-revy-border/80 text-center text-xs text-revy-cyan font-semibold flex items-center justify-center gap-1">
                          <span>🕢</span> <span>7:30 مساءً</span>
                        </div>
                      </div>
                      <p className="mt-1">تحب أحجزلك؟</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isRevyActive && chatStep >= 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-end max-w-[75%] bg-[#1E1E1E] text-white p-3 rounded-2xl rounded-tr-none text-sm text-right"
                  >
                    <p>تمام احجزلي 7:30</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isRevyActive && chatStep >= 7 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-start max-w-[75%] bg-gradient-to-br from-revy-green/20 to-revy-cyan/10 border border-revy-green/30 text-white p-3 rounded-2xl rounded-tl-none text-sm text-right"
                  >
                    <p className="font-semibold text-[10px] text-revy-green mb-1 flex items-center gap-1 justify-end">
                      <span>تأكيد الحجز التلقائي</span>
                      <Sparkles className="w-3 h-3" />
                    </p>
                    <p className="font-bold text-revy-green flex items-center gap-1 justify-end text-xs">
                      <span>✅ تم الحجز بنجاح</span>
                    </p>
                    <div className="mt-2 p-2.5 rounded bg-revy-bg-primary/90 border border-revy-divider text-right text-[11px] space-y-1">
                      <p className="text-revy-text-secondary"><span className="text-white font-semibold">الموعد:</span> 🕢 7:30 مساءً</p>
                      <p className="text-revy-text-secondary"><span className="text-white font-semibold">الجهة:</span> 📍 عيادة الأسنان التخصصية</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Bottom Input Area of Chat */}
            <div className="pb-8 pt-3 px-4 border-t border-revy-border/80 bg-[#0A0A0A] relative z-10 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-revy-border flex items-center justify-center">
                <span className="text-revy-text-muted text-lg font-bold">+</span>
              </div>
              <div className="flex-1 h-8 rounded-full bg-revy-bg-primary border border-revy-border px-3 flex items-center justify-end text-xs text-revy-text-muted">
                {isRevyActive && chatStep === 4 ? "العميل يكتب..." : isRevyActive && chatStep === 6 ? "العميل يكتب..." : ""}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
