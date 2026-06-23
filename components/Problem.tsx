"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock } from "lucide-react";

// Inline Platform Icons
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MessengerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.383 0 0 4.972 0 11.111c0 3.497 1.745 6.616 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.617 0 12-4.972 12-11.111C24 4.972 18.617 0 12 0zm1.293 14.196l-3.076-3.277-6.005 3.277 6.605-7.006 3.147 3.277 5.933-3.277-6.604 7.006z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface FloatingMessage {
  sender: string;
  text: string;
  time: string;
  platform: "whatsapp" | "messenger" | "instagram";
  className: string;
  delay: number;
  duration: string;
}

export default function Problem() {
  const messages: FloatingMessage[] = [
    { 
      sender: "محمد علي", 
      text: "الكشف بكام؟ وعايز أحجز موعد بكرة.", 
      time: "منذ دقيقة", 
      platform: "whatsapp",
      className: "top-[8%] right-[5%] md:right-[12%] animate-float-slow",
      delay: 0,
      duration: "9s"
    },
    { 
      sender: "سارة أحمد", 
      text: "في ميعاد كشف متاح النهاردة؟", 
      time: "الآن", 
      platform: "messenger",
      className: "top-[14%] left-[4%] md:left-[10%] animate-float-medium",
      delay: 0.2,
      duration: "7.5s"
    },
    { 
      sender: "دعاء محمود", 
      text: "ممكن أعرف العنوان فين بالظبط؟", 
      time: "منذ دقيقتين", 
      platform: "instagram",
      className: "bottom-[16%] right-[5%] md:right-[10%] animate-float-fast",
      delay: 0.4,
      duration: "6s"
    },
    { 
      sender: "كريم يوسف", 
      text: "عندكم تقسيط كراون وزراعة؟", 
      time: "الآن", 
      platform: "whatsapp",
      className: "bottom-[22%] left-[4%] md:left-[12%] animate-float-slow",
      delay: 0.1,
      duration: "10s"
    },
    { 
      sender: "منى فاروق", 
      text: "الدكتور موجود في العيادة دلوقتي؟", 
      time: "منذ 4 دقائق", 
      platform: "messenger",
      className: "top-[48%] right-[2%] md:right-[6%] animate-float-medium",
      delay: 0.3,
      duration: "8s"
    },
    { 
      sender: "عمر خالد", 
      text: "ممكن أحجز كشف النهاردة الساعة 7؟", 
      time: "الآن", 
      platform: "instagram",
      className: "bottom-[52%] left-[2%] md:left-[6%] animate-float-fast",
      delay: 0.5,
      duration: "7s"
    },
  ];

  return (
    <section className="relative min-h-[600px] py-24 flex items-center justify-center overflow-hidden px-6 md:px-12 z-10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[#050505] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-revy-purple/5 blur-[150px] -z-10 animate-pulse-slow" />

      {/* Floating Inbox Messages Layer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {messages.map((msg, idx) => {
          // Dynamic platform styling
          let platformBadge = "";
          let icon = null;
          if (msg.platform === "whatsapp") {
            platformBadge = "bg-[#075E54]/10 border-[#128C7E]/30 text-[#25D366]";
            icon = <WhatsAppIcon className="w-3.5 h-3.5" />;
          } else if (msg.platform === "messenger") {
            platformBadge = "bg-[#006AFF]/10 border-[#00B2FF]/30 text-[#0084FF]";
            icon = <MessengerIcon className="w-3.5 h-3.5" />;
          } else {
            platformBadge = "bg-gradient-to-r from-[#833AB4]/10 to-[#F56040]/10 border-[#E1306C]/30 text-[#E1306C]";
            icon = <InstagramIcon className="w-3.5 h-3.5" />;
          }

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.65, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: msg.delay }}
              style={{ animationDuration: msg.duration }}
              className={`absolute p-4 rounded-2xl bg-revy-card/80 border border-revy-border/60 shadow-[0_10px_25px_rgba(0,0,0,0.6)] max-w-[280px] w-full text-right flex flex-col gap-2 ${msg.className}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-revy-border/40 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className={`p-1 rounded-md border ${platformBadge}`}>
                    {icon}
                  </span>
                  <span className="text-[10px] text-revy-text-muted">{msg.time}</span>
                </div>
                <span className="text-xs font-bold text-white">{msg.sender}</span>
              </div>
              {/* Text */}
              <p className="text-xs text-revy-text-secondary leading-relaxed">
                "{msg.text}"
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full text-center relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-revy-purple text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-revy-purple/10 border border-revy-purple/20">
            أزمة التواصل المفقود
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4">
            ده بيحصل كل يوم
          </h2>
        </motion.div>

        {/* Center Warning Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="gradient-border max-w-2xl mx-auto cursor-default group"
          suppressHydrationWarning
        >
          <div className="p-8 md:p-12 rounded-[23px] bg-gradient-to-br from-revy-card/95 via-[#0e0707]/95 to-[#1a0c0c]/90 backdrop-blur-md border border-[#ef4444]/30 hover:border-[#ef4444]/60 shadow-[0_20px_45px_rgba(239,68,68,0.05)] hover:shadow-glow-red flex flex-col items-center transition-all duration-300">
            
            <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/25 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
              <AlertTriangle className="w-7 h-7 text-red-500 animate-pulse" />
            </div>
            
            <h3 className="text-xl md:text-3xl font-black text-white leading-snug mb-4 text-glow-red text-center">
              ⚠️ كل رسالة بتتأخر في الرد عليها ممكن تكلفك مريض
            </h3>
            
            <p className="text-revy-text-secondary text-base md:text-lg leading-relaxed max-w-lg mb-4 text-center">
              تشير الإحصائيات إلى أن <strong className="text-revy-green font-bold text-glow-green">78%</strong> من المرضى يقومون بالحجز مع أول عيادة تجيب على استفسارهم.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-revy-text-muted justify-center border-t border-revy-border/40 pt-4 w-full">
              <Clock className="w-3.5 h-3.5" />
              <span>لو اتأخرت 5 دقائق بس، فرصة رد المريض بتقل بنسبة 80%</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
