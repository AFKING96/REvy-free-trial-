"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, MessageSquare, Phone, Globe, ShieldCheck, Check, Info,
  Clock, UserCheck, CheckCircle2, Calendar
} from "lucide-react";

const workflowSteps = [
  {
    id: 0,
    title: "استقبال الرسالة الفورية",
    patientText: "عايز أحجز كشف جلدية بكرة الساعة 6",
    action: "رسالة واتساب واردة",
    tag: "مريض جديد",
    icon: MessageSquare,
    color: "text-revy-cyan",
    bg: "bg-revy-cyan/10",
    border: "border-revy-cyan/20",
    glow: "shadow-[0_0_15px_rgba(102,224,255,0.2)]"
  },
  {
    id: 1,
    title: "فهم وتصنيف الطلب بالذكاء الاصطناعي",
    patientText: "النية: حجز موعد • التخصص: جلدية • التوقيت: غداً 6م",
    action: "تحليل اللغة الطبيعية NLP",
    tag: "تحليل النية",
    icon: Sparkles,
    color: "text-revy-purple",
    bg: "bg-revy-purple/10",
    border: "border-revy-purple/20",
    glow: "shadow-[0_0_15px_rgba(122,92,255,0.2)]"
  },
  {
    id: 2,
    title: "فحص وتحديث المواعيد الشاغرة",
    patientText: "الاتصال بجدول العيادة... الموعد متاح وجاري التثبيت",
    action: "تزامن تلقائي مع السيستم",
    tag: "فحص الجدول",
    icon: Calendar,
    color: "text-revy-cyan",
    bg: "bg-revy-cyan/10",
    border: "border-revy-cyan/20",
    glow: "shadow-[0_0_15px_rgba(102,224,255,0.2)]"
  },
  {
    id: 3,
    title: "تأكيد بيانات المريض وتأمين الحجز",
    patientText: "تسجيل الموعد باسم: أ. محمود علي • الهاتف: 01012***78",
    action: "أرشفة وتأكيد الحجز",
    tag: "تأكيد الحجز",
    icon: UserCheck,
    color: "text-revy-green",
    bg: "bg-revy-green/10",
    border: "border-revy-green/20",
    glow: "shadow-[0_0_15px_rgba(34,229,154,0.2)]"
  },
  {
    id: 4,
    title: "التذكير التلقائي وإرسال اللوكيشن",
    patientText: "تم الإرسال: تفاصيل الحجز + لوكيشن العيادة على الخريطة",
    action: "تذكير ذكي نشط",
    tag: "متابعة تلقائية",
    icon: CheckCircle2,
    color: "text-revy-green",
    bg: "bg-revy-green/10",
    border: "border-revy-green/20",
    glow: "shadow-[0_0_15px_rgba(34,229,154,0.2)]"
  }
];

export default function FreeTrial() {
  const [formData, setFormData] = useState({ clinicName: "", whatsapp: "", pageLink: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clinicName || !formData.whatsapp) return;

    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  return (
    <section id="free-trial" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 bg-[#050505] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[800px] h-[450px] sm:h-[800px] rounded-full bg-gradient-to-tr from-revy-green/5 via-revy-cyan/5 to-revy-purple/5 blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Right side: Floating AI Robot (RTL view: Left / Right positioning) */}
        {/* In RTL, Right side is usually the first column. We want the form on the right and robot on the left, or vice versa. Let's put form on the right (first/span-7) and robot on the left (second/span-5) */}
        <div className="lg:col-span-7 w-full order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border w-full"
          >
            <div className="p-8 sm:p-10 rounded-[23px] bg-revy-card/90 backdrop-blur-md border border-revy-border/40">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-right"
                  >
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        جرّب Revy على صفحتك مجاناً لمدة 5 أيام
                      </h2>
                      <p className="text-revy-text-secondary text-sm mt-3">
                        سجل بياناتك وهيتم التواصل معاك وتفعيل الذكاء الاصطناعي على صفحتك خلال 24 ساعة.
                      </p>
                    </div>

                    {/* Field 1 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-revy-text-secondary flex items-center gap-1.5 justify-end">
                        <span>اسم العيادة / المركز</span>
                        <span className="text-revy-green">*</span>
                      </label>
                      <div className="relative">
                        <input
                          suppressHydrationWarning
                          type="text"
                          required
                          value={formData.clinicName}
                          onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                          placeholder="مثال: عيادة د. أحمد لطب الأسنان"
                          className="w-full bg-[#050505] border border-revy-border rounded-xl py-3 px-4 text-sm text-white text-right placeholder-revy-text-muted focus:border-revy-green focus:ring-1 focus:ring-revy-green/30 outline-none transition-all duration-300"
                        />
                        <Sparkles className="w-4 h-4 text-revy-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Field 2 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-revy-text-secondary flex items-center gap-1.5 justify-end">
                        <span>رقم الواتساب</span>
                        <span className="text-revy-green">*</span>
                      </label>
                      <div className="relative">
                        <input
                          suppressHydrationWarning
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="مثال: 01012345678"
                          className="w-full bg-[#050505] border border-revy-border rounded-xl py-3 px-4 text-sm text-white text-right placeholder-revy-text-muted focus:border-revy-cyan focus:ring-1 focus:ring-revy-cyan/30 outline-none transition-all duration-300"
                        />
                        <Phone className="w-4 h-4 text-revy-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Field 3 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-revy-text-secondary flex items-center gap-1.5 justify-end">
                        <span>رابط الصفحة (فيسبوك / إنستجرام)</span>
                        <span className="text-revy-text-muted">(اختياري)</span>
                      </label>
                      <div className="relative">
                        <input
                          suppressHydrationWarning
                          type="url"
                          value={formData.pageLink}
                          onChange={(e) => setFormData({ ...formData, pageLink: e.target.value })}
                          placeholder="مثال: facebook.com/your-clinic"
                          className="w-full bg-[#050505] border border-revy-border rounded-xl py-3 px-4 text-sm text-white text-right placeholder-revy-text-muted focus:border-revy-purple focus:ring-1 focus:ring-revy-purple/30 outline-none transition-all duration-300"
                        />
                        <Globe className="w-4 h-4 text-revy-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      suppressHydrationWarning
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-revy-green via-revy-cyan to-revy-purple text-revy-bg-primary font-extrabold text-base hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(34,229,154,0.4)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-revy-bg-primary border-t-transparent rounded-full animate-spin" />
                          <span>جاري تسجيل طلبك...</span>
                        </>
                      ) : (
                        <span>ابدأ التجربة المجانية الآن</span>
                      )}
                    </button>

                    {/* Form badges */}
                    <div className="flex flex-wrap items-center gap-4 justify-center text-xs text-revy-text-muted pt-4 border-t border-revy-border/40">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-revy-green" />
                        <span>تفعيل خلال 24 ساعة</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-revy-green" />
                        <span>بدون بطاقة ائتمان</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-revy-green" />
                        <span>بدون عقد إلزامي</span>
                      </div>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-revy-green/10 flex items-center justify-center mx-auto text-revy-green shadow-[0_0_20px_rgba(34,229,154,0.2)]">
                      <Check className="w-8 h-8 animate-pulse" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">تم استقبال طلبك بنجاح!</h3>
                      <p className="text-revy-text-secondary text-sm max-w-md mx-auto leading-relaxed">
                        شكراً لتسجيلك يا فندم. فريق عمل <strong className="text-white">Revy AI</strong> هيقوم بمراجعة طلب عيادة "{formData.clinicName}" والتواصل مع حضرتك على الرقم ({formData.whatsapp}) في أسرع وقت لتفعيل المساعد الذكي.
                      </p>
                    </div>

                    <button
                      suppressHydrationWarning
                      onClick={() => {
                        setFormData({ clinicName: "", whatsapp: "", pageLink: "" });
                        setSubmitSuccess(false);
                      }}
                      className="px-6 py-2 border border-revy-border rounded-xl text-xs text-revy-text-secondary hover:text-white transition-colors cursor-pointer"
                    >
                      تسجيل عيادة أخرى
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>

        {/* Left side: Live AI Workflow (span-5) */}
        <div className="lg:col-span-5 w-full order-2 lg:order-1 flex flex-col items-center">
          <div className="w-full bg-revy-card/30 border border-revy-border/40 rounded-[24px] p-6 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
            {/* Ambient Glows */}
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-revy-cyan/10 blur-[50px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-revy-green/10 blur-[50px] pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 border-b border-revy-border/40 pb-4 justify-end text-right">
              <div>
                <h3 className="font-extrabold text-base text-white">دورة العمل التلقائية لمساعد Revy</h3>
                <p className="text-[10px] text-revy-text-secondary mt-1">تتبع رحلة حجز المريض الحية خطوة بخطوة</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-revy-green/10 border border-revy-green/20 flex items-center justify-center text-revy-green shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-5 relative">
              {workflowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStep === idx;
                const isCompleted = idx < activeStep;
                
                return (
                  <div key={idx} className="relative flex flex-row items-start gap-4 text-right">
                    
                    {/* Timeline connector lines & circle */}
                    <div className="flex flex-col items-center shrink-0 relative z-10">
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? `${step.color} ${step.border} ${step.bg} ${step.glow} scale-110` 
                          : isCompleted 
                            ? "text-revy-green border-revy-green/40 bg-revy-green/5" 
                            : "text-revy-text-muted border-revy-border/40 bg-[#0F0F0F]"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      
                      {idx < 4 && (
                        <div className={`absolute top-9 bottom-0 right-[17px] w-[2px] -mb-7 z-0 transition-colors duration-500 ${
                          isCompleted 
                            ? "bg-revy-green" 
                            : isActive 
                              ? "bg-gradient-to-b from-revy-green to-revy-border/20" 
                              : "bg-revy-border/20"
                        }`} style={{ height: "calc(100% + 20px)" }} />
                      )}
                    </div>

                    {/* Step Card Content */}
                    <div className={`flex-grow transition-all duration-500 ${
                      isActive ? "opacity-100 scale-[1.01]" : "opacity-40"
                    }`}>
                      <div className={`p-3.5 rounded-xl border bg-revy-card/20 backdrop-blur-sm transition-all duration-500 ${
                        isActive ? `${step.border} bg-[#0F0F0F]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]` : "border-revy-border/20"
                      }`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-[8px] px-1.5 py-0.5 rounded border font-bold ${
                            isActive ? `${step.color} ${step.border} ${step.bg}` : "text-revy-text-muted border-revy-border/40 bg-[#161616]"
                          }`}>
                            {step.tag}
                          </span>
                          <h4 className="text-[11px] font-bold text-white">{step.title}</h4>
                        </div>
                        <p className="text-[10px] text-revy-text-secondary mt-1.5 leading-relaxed font-medium">
                          {step.patientText}
                        </p>
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-revy-border/10 text-[8px] text-revy-text-muted">
                          <span>الوضع: تلقائي بالكامل</span>
                          <span>{step.action}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
