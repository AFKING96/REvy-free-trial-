"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Calculator as CalcIcon, AlertTriangle, TrendingUp, DollarSign } from "lucide-react";

export default function Calculator() {
  const steps = [50, 100, 200, 300, 500];
  const [sliderIndex, setSliderIndex] = useState(2); // Default to 200 (index 2)
  const [bookingPrice, setBookingPrice] = useState(400); // Default booking price in EGP

  const missedMessages = steps[sliderIndex];
  
  // Formulas
  // Let's assume 35% of missed messages could have been actual bookings
  const lostBookingsVal = Math.round(missedMessages * 0.35);
  const revenueLossVal = lostBookingsVal * bookingPrice;
  // Opportunities missed represents patients + their potential lifetime value (e.g. 3x booking price)
  const opportunityVal = Math.round(revenueLossVal * 2.5);

  // States for animated counters
  const [animatedBookings, setAnimatedBookings] = useState(lostBookingsVal);
  const [animatedRevenue, setAnimatedRevenue] = useState(revenueLossVal);
  const [animatedOpportunity, setAnimatedOpportunity] = useState(opportunityVal);

  useEffect(() => {
    // Animate bookings
    const controls1 = animate(animatedBookings, lostBookingsVal, {
      duration: 0.5,
      onUpdate: (value) => setAnimatedBookings(Math.round(value)),
    });
    // Animate revenue
    const controls2 = animate(animatedRevenue, revenueLossVal, {
      duration: 0.5,
      onUpdate: (value) => setAnimatedRevenue(Math.round(value)),
    });
    // Animate opportunity
    const controls3 = animate(animatedOpportunity, opportunityVal, {
      duration: 0.5,
      onUpdate: (value) => setAnimatedOpportunity(Math.round(value)),
    });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, [lostBookingsVal, revenueLossVal, opportunityVal]);

  return (
    <section id="calculator" className="relative py-24 px-6 md:px-12 z-10 bg-revy-bg-secondary/40 border-y border-revy-border/40">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-revy-cyan/5 blur-[100px] -z-10" />
      <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] rounded-full bg-revy-green/5 blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-revy-cyan text-xs font-bold px-3 py-1 rounded-full bg-revy-cyan/10 border border-revy-cyan/20">
              حساب الخسائر والأرباح
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4">
              شوف كام حجز بيضيع منك
            </h2>
            <p className="text-revy-text-secondary text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed">
              قم بتحريك المؤشر لتحديد حجم الرسائل غير الردود عليها شهرياً في عيادتك ومعرفة الأثر المالي الحقيقي.
            </p>
          </motion.div>
        </div>

        {/* Calculator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Right Column: Interactive Sliders (6 spans) */}
          <div className="lg:col-span-7 gradient-border">
            <div className="p-8 rounded-[23px] bg-revy-card/90 backdrop-blur-md h-full flex flex-col justify-between space-y-8">
              
              {/* Slider 1: Missed Messages */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-revy-text-muted text-xs font-semibold">عدد الرسائل المهملة شهرياً</span>
                  <span className="text-2xl font-black text-revy-cyan">{missedMessages} رسالة</span>
                </div>
                
                <input
                  suppressHydrationWarning
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={sliderIndex}
                  onChange={(e) => setSliderIndex(parseInt(e.target.value))}
                  className="w-full h-2 bg-revy-border rounded-lg appearance-none cursor-pointer accent-revy-cyan outline-none"
                  style={{
                    background: `linear-gradient(to left, #66E0FF ${sliderIndex * 25}%, #1A1A1A ${sliderIndex * 25}%)`
                  }}
                />
                
                <div className="flex justify-between text-[11px] text-revy-text-muted px-1 font-mono">
                  <span>50</span>
                  <span>100</span>
                  <span>200</span>
                  <span>300</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Slider 2: Average Booking Value */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-revy-text-muted text-xs font-semibold">متوسط سعر الكشف / الاستشارة (ج.م)</span>
                  <span className="text-xl font-bold text-white">{bookingPrice} ج.م</span>
                </div>

                <input
                  suppressHydrationWarning
                  type="range"
                  min="150"
                  max="1500"
                  step="50"
                  value={bookingPrice}
                  onChange={(e) => setBookingPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-revy-border rounded-lg appearance-none cursor-pointer accent-revy-green outline-none"
                  style={{
                    background: `linear-gradient(to left, #22E59A ${(bookingPrice - 150) / 13.5}%, #1A1A1A ${(bookingPrice - 150) / 13.5}%)`
                  }}
                />

                <div className="flex justify-between text-[11px] text-revy-text-muted px-1 font-mono">
                  <span>150 ج.م</span>
                  <span>500 ج.م</span>
                  <span>1000 ج.م</span>
                  <span>1500 ج.م</span>
                </div>
              </div>

              {/* Warning box */}
              <div className="p-4 rounded-xl bg-revy-purple/5 border border-revy-purple/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-revy-purple shrink-0 mt-0.5" />
                <p className="text-xs text-revy-text-secondary leading-relaxed text-right">
                  الرسائل غير الردود عليها لا تمثل مجرد محادثة، بل هي مرضى يبحثون بنشاط عن عيادة. عدم ردك الفوري يدفعهم مباشرة للبحث عن المنافس التالي في نتائج البحث.
                </p>
              </div>

            </div>
          </div>

          {/* Left Column: Calculated Results (5 spans) */}
          <div className="lg:col-span-5 gradient-border">
            <div className="p-8 rounded-[23px] bg-gradient-to-br from-revy-card to-[#0e1614] h-full flex flex-col justify-between space-y-6">
              
              {/* Stat 1 */}
              <div className="border-b border-revy-border/60 pb-6">
                <span className="text-revy-text-secondary text-xs font-semibold block mb-1">المرضى الضائعين شهرياً</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-revy-green tracking-tight">{animatedBookings}</span>
                  <span className="text-xs text-revy-text-muted">مريض كان يمكن حجزه</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-revy-border/60 pb-6">
                <span className="text-revy-text-secondary text-xs font-semibold block mb-1">خسارة الإيرادات المباشرة</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-red-500 tracking-tight">{animatedRevenue.toLocaleString()} ج.م</span>
                  <span className="text-xs text-revy-text-muted">خسارة شهرية</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <span className="text-revy-text-secondary text-xs font-semibold block mb-1">إجمالي الفرص الضائعة السنوية</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-revy-purple tracking-tight">{animatedOpportunity.toLocaleString()} ج.م</span>
                  <span className="text-xs text-revy-text-muted">تقدير القيمة الكلية للمريض</span>
                </div>
              </div>

              {/* Conversion Pitch */}
              <div className="pt-4 border-t border-revy-border/60">
                <p className="text-xs text-revy-text-secondary leading-relaxed mb-4">
                  تكلفة الاشتراك في Revy تمثل أقل من <strong className="text-revy-green">3%</strong> من حجم الخسائر المالية اللي بتضيع منك شهرياً.
                </p>
                <button
                  suppressHydrationWarning
                  onClick={() => document.getElementById("free-trial")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-3 rounded-xl bg-revy-green text-revy-bg-primary font-bold text-sm cursor-pointer shadow-[0_0_15px_rgba(34,229,154,0.2)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,229,154,0.4)] transition-all duration-300 text-center block"
                >
                  أوقف نزيف الخسائر الآن
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
