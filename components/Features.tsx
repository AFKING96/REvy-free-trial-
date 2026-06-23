"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, Share2, Calendar, Bell, Shield, Brain, 
  TrendingUp, Users, DollarSign, CheckCircle, Smartphone, 
  Globe, Sparkles 
} from "lucide-react";

// Local SVG custom platform components
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Mascot removed as per brand specifications

// Hook/Helper for Mouse-chasing Glow Card
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function BentoCard({ children, className = "", ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden rounded-[24px] border border-revy-border bg-revy-card/40 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-revy-divider group ${className}`}
      {...props}
    >
      {/* Radial Gradient Glow Spot */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[24px] transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(34, 229, 154, 0.1), transparent 40%)`,
        }}
      />
      {/* Light border glow edge */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[24px] transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          border: "1px solid rgba(102, 224, 255, 0.15)",
          background: `radial-gradient(80px circle at ${coords.x}px ${coords.y}px, rgba(102, 224, 255, 0.3), transparent 60%)`,
        }}
      />
      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        {children}
      </div>
    </div>
  );
}

export default function Features() {
  // Demo 1: Typing Chat State
  const [chatLines, setChatLines] = useState<{ sender: "user" | "revy"; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let active = true;
    const runChatLoop = async () => {
      while (active) {
        setChatLines([]);
        await new Promise((r) => setTimeout(r, 1000));
        if (!active) break;
        
        // Patient asks
        setChatLines([{ sender: "user", text: "الكشف بكام ومتاح حجز النهاردة؟" }]);
        await new Promise((r) => setTimeout(r, 1200));
        if (!active) break;
        
        // Revy typing
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsTyping(false);
        if (!active) break;

        // Revy answers
        setChatLines((prev) => [
          ...prev,
          { sender: "revy", text: "أهلاً بك! الكشف 300 جنيه ومتاح النهاردة 6:00 مساءً أو 8:30 مساءً. تحب تأكد الحجز؟" }
        ]);
        await new Promise((r) => setTimeout(r, 4000));
      }
    };
    runChatLoop();
    return () => { active = false; };
  }, []);

  // Demo 3: Interactive Booking System
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookSlot = (slot: string) => {
    if (bookingSuccess) return;
    setBookedSlot(slot);
    setBookingSuccess(false);
    setTimeout(() => {
      setBookingSuccess(true);
      setTimeout(() => {
        setBookedSlot(null);
        setBookingSuccess(false);
      }, 3000);
    }, 1000);
  };

  // Demo 4: Notifications stack
  const [notifIndex, setNotifIndex] = useState(0);
  const notifs = [
    { title: "تم تأكيد الحجز", desc: "موعدك غداً الساعة 5:30 مساءً", icon: "✅", color: "border-revy-green/30" },
    { title: "تذكير تلقائي", desc: "موعدك اليوم خلال ساعتين", icon: "🔔", color: "border-revy-cyan/30" },
    { title: "متابعة طبية", desc: "شكراً لزيارتك، نتمنى لك الشفاء العاجل", icon: "❤️", color: "border-revy-purple/30" }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setNotifIndex((prev) => (prev + 1) % notifs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Demo 5: 24/7 Day/Night orbit state
  const [isDay, setIsDay] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsDay((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Demo 6: Intent Classification Loop
  const intents = [
    { text: "عايز أحجز كشف بكرة", label: "حجز موعد (Booking)", color: "text-revy-green bg-revy-green/10 border-revy-green/20" },
    { text: "هو الكشف بكام؟", label: "استفسار أسعار (Pricing)", color: "text-revy-cyan bg-revy-cyan/10 border-revy-cyan/20" },
    { text: "مكانكم فين بالظبط؟", label: "استفسار موقع (Location)", color: "text-revy-purple bg-revy-purple/10 border-revy-purple/20" }
  ];
  const [intentIndex, setIntentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIntentIndex((prev) => (prev + 1) % intents.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Demo 7: Dashboard Ticking Counters & Activity Feed
  const [dashStats, setDashStats] = useState({ messages: 1240, bookings: 340, revenue: 170000 });
  const [liveFeed, setLiveFeed] = useState([
    { id: 1, text: "حجز جديد: أ. محمد (واتساب)", tag: "حجز موعد", color: "text-revy-green border-revy-green/20 bg-revy-green/5", time: "الآن" },
    { id: 2, text: "استفسار كشف: د. أحمد (Messenger)", tag: "استفسار أسعار", color: "text-revy-cyan border-revy-cyan/20 bg-revy-cyan/5", time: "منذ 1د" },
    { id: 3, text: "تأكيد تلقائي: أ. سارة (Instagram)", tag: "تذكير موعد", color: "text-revy-purple border-revy-purple/20 bg-revy-purple/5", time: "منذ 2د" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDashStats((prev) => ({
        messages: prev.messages + (Math.random() > 0.3 ? 1 : 0),
        bookings: prev.bookings + (Math.random() > 0.7 ? 1 : 0),
        revenue: prev.revenue + (Math.random() > 0.7 ? 350 : 0),
      }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const feedItems = [
      { text: "حجز جديد: أ. محمد (واتساب)", tag: "حجز موعد", color: "text-revy-green border-revy-green/20 bg-revy-green/5" },
      { text: "استفسار كشف: د. أحمد (Messenger)", tag: "استفسار أسعار", color: "text-revy-cyan border-revy-cyan/20 bg-revy-cyan/5" },
      { text: "تأكيد تلقائي: أ. سارة (Instagram)", tag: "تذكير موعد", color: "text-revy-purple border-revy-purple/20 bg-revy-purple/5" },
      { text: "طلب موقع: أ. خالد (الموقع)", tag: "استفسار موقع", color: "text-white border-revy-border/20 bg-revy-card/5" },
      { text: "حجز جديد: أ. نورهان (واتساب)", tag: "حجز موعد", color: "text-revy-green border-revy-green/20 bg-revy-green/5" },
      { text: "استفسار أسعار: أ. يحيى (Messenger)", tag: "استفسار أسعار", color: "text-revy-cyan border-revy-cyan/20 bg-revy-cyan/5" }
    ];

    const interval = setInterval(() => {
      const randomItem = feedItems[Math.floor(Math.random() * feedItems.length)];
      setLiveFeed((prev) => {
        const nextId = prev.length > 0 ? Math.max(...prev.map(i => i.id)) + 1 : 1;
        const newItem = {
          id: nextId,
          text: randomItem.text,
          tag: randomItem.tag,
          color: randomItem.color,
          time: "الآن"
        };
        const updatedPrev = prev.map(item => ({
          ...item,
          time: item.time === "الآن" ? "منذ 1د" : item.time === "منذ 1د" ? "منذ 2د" : "منذ 3د"
        }));
        return [newItem, ...updatedPrev.slice(0, 2)];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative py-24 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-revy-green text-xs font-bold px-3 py-1 rounded-full bg-revy-green/10 border border-revy-green/20">
              قوة النظام
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
              خلال <span className="text-transparent bg-clip-text bg-gradient-to-r from-revy-green to-revy-cyan text-glow-green">5 أيام بس</span> هتشوف الفرق
            </h2>
            <p className="text-revy-text-secondary text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              شاهد كيف يعمل مساعد الذكاء الاصطناعي على أتمتة تواصل عيادتك وزيادة حجوزاتك بشكل فوري.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Chat interaction (Auto Reply) */}
          <BentoCard className="flex flex-col justify-between">
            <div className="h-[180px] bg-revy-bg-primary/80 border border-revy-border/40 rounded-2xl p-4 flex flex-col justify-end space-y-3 overflow-hidden relative">
              <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[10px] text-revy-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-revy-green animate-pulse" />
                <span>واتساب العيادة (مباشر)</span>
              </div>
              <AnimatePresence mode="popLayout">
                {chatLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`p-2.5 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                      line.sender === "user"
                        ? "self-end bg-[#1E1E1E] text-white rounded-tr-none text-right border border-revy-border"
                        : "self-start bg-revy-green/10 border border-revy-green/20 text-white rounded-tl-none text-right"
                    }`}
                  >
                    {line.text}
                    {line.sender === "revy" && (
                      <div className="text-[9px] text-revy-green mt-1 flex items-center gap-0.5 justify-end">
                        <span>تم الإرسال تلقائياً</span>
                        <span>✓✓</span>
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="self-start bg-revy-green/10 border border-revy-green/20 p-2.5 rounded-xl rounded-tl-none flex gap-1"
                  >
                    <span className="w-1.5 h-1.5 bg-revy-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-revy-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-revy-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-revy-green">
                <MessageSquare className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">يرد على الرسائل تلقائي</h3>
              </div>
              <p className="text-revy-text-secondary text-sm leading-relaxed">
                رد فوري وذكي على كافة الاستفسارات الطبية ومواعيد الكشف والأسعار بدون أي تأخير.
              </p>
            </div>
          </BentoCard>

          {/* Card 2: Omnichannel node (Multi Platform) */}
          <BentoCard className="flex flex-col justify-between">
            <div className="h-[180px] bg-revy-bg-primary/80 border border-revy-border/40 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
              
              {/* Central REVY node */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-revy-green to-revy-cyan flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,229,154,0.4)]">
                <Sparkles className="w-5 h-5 text-revy-bg-primary" />
              </div>

              {/* Surrounding platforms */}
              <div className="absolute top-4 left-6 flex items-center gap-1 bg-[#101010]/80 p-2 rounded-lg border border-revy-border text-revy-cyan text-xs">
                <Smartphone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </div>
              <div className="absolute top-6 right-6 flex items-center gap-1 bg-[#101010]/80 p-2 rounded-lg border border-revy-border text-revy-green text-xs">
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-1 bg-[#101010]/80 p-2 rounded-lg border border-revy-border text-revy-purple text-xs">
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </div>
              <div className="absolute bottom-4 right-6 flex items-center gap-1 bg-[#101010]/80 p-2 rounded-lg border border-revy-border text-white text-xs">
                <Globe className="w-3.5 h-3.5" />
                <span>موقعك</span>
              </div>

              {/* Connecting lines animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Paths */}
                <path id="path-wa" d="M 65 30 L 150 90" stroke="rgba(102, 224, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path id="path-ig" d="M 235 32 L 150 90" stroke="rgba(34, 229, 154, 0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path id="path-fb" d="M 60 148 L 150 90" stroke="rgba(122, 92, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path id="path-web" d="M 240 142 L 150 90" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Animating flow particles */}
                <circle r="3" fill="#66E0FF">
                  <animateMotion dur="2.5s" repeatCount="indefinite">
                    <mpath href="#path-wa" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#22E59A">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#path-ig" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#7A5CFF">
                  <animateMotion dur="2.8s" repeatCount="indefinite">
                    <mpath href="#path-fb" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#FFFFFF">
                  <animateMotion dur="3.2s" repeatCount="indefinite">
                    <mpath href="#path-web" />
                  </animateMotion>
                </circle>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-revy-cyan">
                <Share2 className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">كل المنصات في مكان واحد</h3>
              </div>
              <p className="text-revy-text-secondary text-sm leading-relaxed">
                ربط كامل ومرن يجمع محادثات فيسبوك، واتساب، إنستجرام، والموقع تحت ذكاء ومراقبة لوحة تحكم واحدة.
              </p>
            </div>
          </BentoCard>

          {/* Card 3: Automated Booking */}
          <BentoCard className="flex flex-col justify-between relative">
            <div className="h-[180px] bg-revy-bg-primary/80 border border-revy-border/40 rounded-2xl p-4 flex flex-col justify-center items-center space-y-3 overflow-hidden">
              {!bookedSlot ? (
                <div className="w-full text-right">
                  <p className="text-xs text-revy-text-secondary mb-2">اختر موعد الكشف المتاح:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["بكرة 6:00 م", "بكرة 8:00 م", "الأربعاء 4:30 م", "الأربعاء 7:00 م"].map((slot) => (
                      <button
                        suppressHydrationWarning
                        key={slot}
                        onClick={() => handleBookSlot(slot)}
                        className="py-1.5 px-2 bg-revy-card border border-revy-border rounded-lg text-[11px] text-white hover:border-revy-cyan hover:text-revy-cyan hover:bg-revy-cyan/5 transition-all cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-2"
                >
                  {bookingSuccess ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-revy-green/10 flex items-center justify-center text-revy-green">
                        <CheckCircle className="w-6 h-6 animate-pulse" />
                      </div>
                      <p className="text-xs font-bold text-white">تم تأكيد الموعد بنجاح!</p>
                      <p className="text-[10px] text-revy-green">{bookedSlot}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 border-2 border-revy-cyan border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs text-revy-text-secondary">جاري تأكيد حجزك...</p>
                    </>
                  )}
                </motion.div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-revy-purple">
                <Calendar className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">يحجز المواعيد تلقائي</h3>
              </div>
              <p className="text-revy-text-secondary text-sm leading-relaxed">
                يتصل بجدول مواعيدك الفعلي، يعرض الأوقات المتاحة للمرضى ويحجز الموعد ويثبته فوراً.
              </p>
            </div>
          </BentoCard>

          {/* Card 4: Notification Stack (Follow Ups) */}
          <BentoCard className="flex flex-col justify-between">
            <div className="h-[180px] bg-revy-bg-primary/80 border border-revy-border/40 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
              <div className="w-full space-y-2">
                {notifs.map((n, idx) => {
                  let position = "scale-90 opacity-40 translate-y-4";
                  if (idx === notifIndex) {
                    position = "scale-100 opacity-100 translate-y-0 z-10 shadow-[0_4px_15px_rgba(0,0,0,0.4)]";
                  } else if (idx === (notifIndex + 1) % notifs.length) {
                    position = "scale-95 opacity-60 translate-y-2";
                  }
                  
                  return (
                    <motion.div
                      key={idx}
                      className={`p-2.5 rounded-xl bg-revy-card border ${n.color} flex items-center gap-2 text-right transition-all duration-500 absolute w-[90%] left-[5%] right-[5%] ${position}`}
                      style={{ top: `${idx === notifIndex ? 45 : idx === (notifIndex + 1) % notifs.length ? 85 : 120}px` }}
                    >
                      <span className="text-lg">{n.icon}</span>
                      <div>
                        <h4 className="text-[11px] font-bold text-white">{n.title}</h4>
                        <p className="text-[10px] text-revy-text-secondary">{n.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-revy-green">
                <Bell className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">يبعت تأكيدات ومتابعات تلقائي</h3>
              </div>
              <p className="text-revy-text-secondary text-sm leading-relaxed">
                إرسال رسائل تأكيد فورية، وتذكيرات للمرضى قبل موعدهم لتقليل نسبة الغياب وحجز موعد المتابعة.
              </p>
            </div>
          </BentoCard>

          {/* Card 5: 24/7 Availability */}
          <BentoCard className="flex flex-col justify-between">
            <div className={`h-[180px] rounded-2xl p-4 flex items-center justify-center relative overflow-hidden transition-colors duration-1000 ${
              isDay ? "bg-gradient-to-br from-revy-bg-primary to-[#052020]" : "bg-gradient-to-br from-revy-bg-primary to-[#0c0520]"
            }`}>
              <div className="relative w-24 h-24 rounded-full border border-revy-border flex items-center justify-center">
                
                {/* 24/7 Center Badge */}
                <div className="text-center">
                  <span className="text-2xl font-black text-white tracking-widest text-glow-cyan">24/7</span>
                  <p className="text-[8px] text-revy-text-secondary tracking-widest uppercase mt-0.5">Active</p>
                </div>

                {/* Orbiting light */}
                <div 
                  className="absolute w-4 h-4 rounded-full flex items-center justify-center transition-all duration-1000"
                  style={{
                    transform: `rotate(${isDay ? "45deg" : "225deg"}) translateX(48px)`,
                  }}
                >
                  <span className="text-xs">{isDay ? "☀️" : "🌙"}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-revy-cyan">
                <Shield className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">شغال 24/7 بدون توقف</h3>
              </div>
              <p className="text-revy-text-secondary text-sm leading-relaxed">
                في الإجازات، بعد منتصف الليل، وأثناء انشغال سكرتارية العيادة، النظام لا ينام ومستمر في استقبال وحجز المرضى.
              </p>
            </div>
          </BentoCard>

          {/* Card 6: AI Intent Classifier (Intent Detection) */}
          <BentoCard className="flex flex-col justify-between">
            <div className="h-[180px] bg-revy-bg-primary/80 border border-revy-border/40 rounded-2xl p-4 flex flex-col justify-center items-center relative overflow-hidden text-right">
              <div className="w-full space-y-3">
                <div className="text-[10px] text-revy-text-muted">المدخلات الحية للمريض:</div>
                <div className="p-2 bg-revy-card border border-revy-border rounded-lg text-xs text-white">
                  "{intents[intentIndex].text}"
                </div>
                <div className="flex items-center justify-between border-t border-revy-border/40 pt-2">
                  <span className="text-[10px] text-revy-text-muted">تصنيف الذكاء الاصطناعي:</span>
                  <motion.div
                    key={intentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`px-2 py-1 rounded text-[10px] font-bold border ${intents[intentIndex].color}`}
                  >
                    {intents[intentIndex].label}
                  </motion.div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-revy-purple">
                <Brain className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">بيفهم المريض وعايز إيه</h3>
              </div>
              <p className="text-revy-text-secondary text-sm leading-relaxed">
                نظام معالجة لغة طبيعية متقدم يفهم اللهجة العامية المصرية والطلبات المعقدة ويحلل رغبة المريض بذكاء.
              </p>
            </div>
          </BentoCard>

          {/* Card 7: Featured Clinical Operations SaaS Dashboard */}
          <BentoCard className="md:col-span-2 lg:col-span-3 flex flex-col justify-between">
            
            {/* Real SaaS Clinic Management Interface */}
            <div className="w-full bg-[#0A0A0A] border border-revy-border/80 rounded-2xl h-[420px] flex flex-row overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              
              {/* Sidebar Navigation Panel (Right side in RTL context) */}
              <div className="w-[140px] bg-[#0F0F0F] border-l border-revy-border/60 p-3 flex flex-col justify-between text-right shrink-0">
                <div className="space-y-4">
                  {/* Brand name */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-revy-border/60 justify-end">
                    <span className="w-2 h-2 rounded-full bg-revy-green animate-pulse" />
                    <span className="text-[11px] font-black text-white">REVY PLATFORM</span>
                  </div>
                  {/* Navigation Links */}
                  <div className="space-y-1">
                    {[
                      { label: "لوحة التحكم", active: true, icon: "📊" },
                      { label: "المواعيد اليوم", active: false, icon: "📅", count: 12 },
                      { label: "محادثات حية", active: false, icon: "💬", count: 2, countColor: "bg-revy-green/10 text-revy-green border border-revy-green/20" },
                      { label: "التقارير", active: false, icon: "📈" },
                      { label: "الأطباء", active: false, icon: "🩺" },
                      { label: "الإعدادات", active: false, icon: "⚙️" }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center justify-between p-1.5 rounded-lg text-[9px] font-bold cursor-pointer transition-colors ${
                          item.active 
                            ? "bg-[#1E1E1E] text-white border border-revy-border" 
                            : "text-revy-text-secondary hover:bg-revy-card hover:text-white"
                        }`}
                      >
                        {item.count && (
                          <span className={`px-1 text-[8px] rounded font-black shrink-0 ${item.countColor || "bg-revy-divider text-revy-text-secondary"}`}>
                            {item.count}
                          </span>
                        )}
                        <span className="flex items-center gap-1 justify-end flex-grow">
                          <span>{item.label}</span>
                          <span>{item.icon}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Account profile footer */}
                <div className="pt-2 border-t border-revy-border/40 flex items-center gap-1.5 justify-end">
                  <div className="text-right">
                    <div className="text-[8px] font-bold text-white leading-none">عيادة الأسنان</div>
                    <span className="text-[6px] text-revy-green">مدير العيادة</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-revy-divider flex items-center justify-center text-[10px]">👤</div>
                </div>
              </div>

              {/* Main Content Area (Left side) */}
              <div className="flex-1 flex flex-col bg-[#050505] overflow-hidden text-right">
                
                {/* Dashboard Header */}
                <div className="h-[44px] border-b border-revy-border/60 px-4 flex items-center justify-between bg-[#080808]/90">
                  <div className="flex items-center gap-3">
                    <div className="text-[10px] text-revy-text-secondary">معدل التحويل: <span className="text-revy-green font-bold">92.4%</span></div>
                    <div className="w-px h-3 bg-revy-border" />
                    <div className="text-[10px] text-revy-text-secondary">الاستجابة الفورية: <span className="text-revy-cyan font-bold">99.8%</span></div>
                  </div>
                  <h4 className="text-[11px] font-black text-white">لوحة العمليات اليومية</h4>
                </div>

                {/* Main panel scroll container */}
                <div className="flex-1 p-3 overflow-y-auto space-y-3 scrollbar-none">
                  
                  {/* Clinic Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { title: "حجوزات الذكاء الاصطناعي", val: dashStats.bookings, change: "+24%", color: "text-revy-green" },
                      { title: "عوائد إضافية (ج.م)", val: dashStats.revenue.toLocaleString(), change: "+15%", color: "text-revy-cyan" },
                      { title: "مواعيد اليوم الكلية", val: "18 موعد", change: "مكتمل", color: "text-white" },
                      { title: "الرسائل المعلقة", val: "0 رسالة", change: "مستقر", color: "text-revy-text-muted" }
                    ].map((m, idx) => (
                      <div key={idx} className="p-2 bg-[#0F0F0F] border border-revy-border/60 rounded-lg">
                        <span className="text-[8px] text-revy-text-muted block leading-none">{m.title}</span>
                        <div className="flex items-baseline justify-between mt-1">
                          <span className="text-[7px] text-revy-green font-bold">{m.change}</span>
                          <span className={`text-xs font-black ${m.color}`}>{m.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Operational Layout: Schedule Table & Live Activity */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                    
                    {/* Table of Appointments (span-7) */}
                    <div className="md:col-span-7 p-3 bg-[#0F0F0F] border border-revy-border/60 rounded-xl flex flex-col justify-between min-h-[140px]">
                      <div className="text-[9px] font-bold text-white border-b border-revy-border/40 pb-1 mb-2">
                        جدول مواعيد اليوم
                      </div>
                      <div className="space-y-1.5 flex-1 justify-center flex flex-col">
                        {[
                          { name: "أحمد سليمان كمال", time: "05:00 م", status: "تم التأكيد تلقائياً", statusColor: "text-revy-green bg-revy-green/5 border-revy-green/10" },
                          { name: "سارة خالد عبد العزيز", time: "06:30 م", status: "تم التأكيد تلقائياً", statusColor: "text-revy-green bg-revy-green/5 border-revy-green/10" },
                          { name: "محمد علي عبد القادر", time: "08:00 م", status: "بانتظار التأكيد", statusColor: "text-revy-purple bg-revy-purple/5 border-revy-purple/10" }
                        ].map((p, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[9px] p-1.5 bg-[#050505] rounded border border-revy-border/40">
                            <span className={`px-1.5 py-0.5 rounded-md border text-[7px] font-bold shrink-0 ${p.statusColor}`}>
                              {p.status}
                            </span>
                            <div className="flex items-center gap-2 justify-end">
                              <span className="text-white font-medium">{p.name}</span>
                              <span className="text-revy-text-secondary font-mono">{p.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent activity live list (span-5) */}
                    <div className="md:col-span-5 p-3 bg-[#0F0F0F] border border-revy-border/60 rounded-xl flex flex-col justify-between min-h-[140px] relative overflow-hidden">
                      <div className="text-[9px] font-bold text-white border-b border-revy-border/40 pb-1 mb-2">
                        سجل العمليات الفورية
                      </div>
                      <div className="flex-1 overflow-hidden space-y-1.5 flex flex-col justify-start">
                        <AnimatePresence mode="popLayout">
                          {liveFeed.map((item) => (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -15 }}
                              className="text-[8px] flex items-center justify-between p-1 bg-[#050505] rounded border border-revy-border/30 shrink-0"
                            >
                              <span className="text-revy-text-muted">{item.time}</span>
                              <span className="text-white flex items-center gap-1 truncate max-w-[80%] justify-end">
                                <span className={`px-1 rounded border text-[7px] font-bold shrink-0 ${item.color}`}>
                                  {item.tag}
                                </span>
                                <span className="truncate">{item.text}</span>
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>

                  </div>

                  {/* SVG Conversions Curve Chart */}
                  <div className="p-3 bg-[#0F0F0F] border border-revy-border/60 rounded-xl flex flex-col h-[75px] relative overflow-hidden">
                    <div className="flex justify-between items-center z-10 mb-1">
                      <span className="text-[8px] text-revy-text-secondary">معدل تحويل الزيارات للحجوزات التلقائية</span>
                      <span className="text-[9px] text-revy-green bg-revy-green/10 px-1 rounded font-bold">96.8% دقة</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[45px]">
                      <svg className="w-full h-full" viewBox="0 0 200 45" preserveAspectRatio="none">
                        <path d="M 0 45 Q 25 25 50 32 T 100 12 T 150 20 T 200 5 L 200 45 Z" fill="url(#chart-glow-ops)" />
                        <path d="M 0 45 Q 25 25 50 32 T 100 12 T 150 20 T 200 5" fill="none" stroke="#22E59A" strokeWidth="1.5" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="chart-glow-ops" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22E59A" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#22E59A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                </div>
                {/* Dashboard status bar */}
                <div className="h-[28px] border-t border-revy-border/40 px-4 flex items-center justify-between bg-[#080808]/90 shrink-0">
                  <span className="text-[8px] text-revy-text-muted">نظام العمليات الذكي نشط ومستقر</span>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-[8px] text-revy-text-muted">مساعدك REVY AI يراقب ويحلل ويوثق كل حركة بدقة</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-revy-green animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 mt-6 text-revy-green">
                <TrendingUp className="w-5 h-5" />
                <h3 className="font-bold text-xl text-white">Dashboard واحدة تتابع منها كل تفاصيل أداء العيادة</h3>
              </div>
              <p className="text-revy-text-secondary text-sm md:text-base leading-relaxed">
                لوحة تحكم حية متطورة تعرض إحصائيات الرسائل الواردة، ومعدلات الاستجابة الفورية، والحجوزات التلقائية، والعائد المالي الإضافي الذي يحققه الذكاء الاصطناعي لعيادتك على مدار الساعة.
              </p>
            </div>
          </BentoCard>

        </div>

      </div>
    </section>
  );
}
