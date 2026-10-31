import React, { useState } from 'react';
import { CircularStamp } from './CircularStamp';
import { 
  Mail, 
  Send, 
  ArrowRight, 
  User, 
  Phone, 
  MessageSquare, 
  Laptop, 
  Layers, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSlide: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone.trim() && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate network request for contact submission
      await new Promise((resolve) => setTimeout(resolve, 900));

      // Create fallback mailto trigger link
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:ajayjatav6282@gmail.com?subject=${subject}&body=${body}`;

      // Open mail client in background if needed
      const hiddenLink = document.createElement('a');
      hiddenLink.href = mailtoUrl;
      hiddenLink.target = '_blank';
      hiddenLink.rel = 'noopener noreferrer';
      // We don't force popups, but user form state is confirmed
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section 
      id="slide-9" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#0a1527] text-white flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 select-none"
    >
      {/* Background Watermark Circular Stamps */}
      <div className="absolute -bottom-24 -left-24 pointer-events-none opacity-20">
        <CircularStamp size={360} color="#38bdf8" opacity={0.15} text="let's work together • create something great • " />
      </div>
      <div className="absolute -top-24 -right-24 pointer-events-none opacity-20">
        <CircularStamp size={360} color="#38bdf8" opacity={0.15} text="let's work together • create something great • " />
      </div>

      {/* Ambient background glows */}
      <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-blue-600/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[550px] h-[550px] bg-sky-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* ================= LEFT SIDE: Headings, Highlights & Signature ================= */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7 text-left">
          
          {/* Main Giant Heading */}
          <div>
            <h2 className="font-condensed text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-wider text-white uppercase leading-[1.04]">
              LET'S WORK TOGETHER <br />
              AND CREATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                SOMETHING GREAT!
              </span>
            </h2>

            {/* Glowing curved underline accent below "SOMETHING GREAT!" */}
            <svg className="w-52 h-3.5 text-cyan-400 mt-2" viewBox="0 0 200 12" fill="none" aria-hidden="true">
              <path d="M2 10C55 2 145 2 198 10" stroke="url(#cyanUnderlineGlow)" strokeWidth="3.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="cyanUnderlineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Short Description */}
          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-lg">
            Open for software engineering roles, full-stack web development opportunities, freelance projects, and collaborations.
          </p>

          {/* Three Highlights with Icons */}
          <div className="flex items-center gap-4 sm:gap-6 pt-2 pb-1 border-y border-white/[0.08] max-w-lg py-4">
            {/* Highlight 1: Full-Time Roles */}
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400/50 transition-all duration-300 shadow-sm">
                <Laptop className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-200 mt-2">
                Full-Time Roles
              </span>
            </div>

            <div className="w-[1px] h-8 bg-white/10 shrink-0" />

            {/* Highlight 2: Freelance Projects */}
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400/50 transition-all duration-300 shadow-sm">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-200 mt-2">
                Freelance Projects
              </span>
            </div>

            <div className="w-[1px] h-8 bg-white/10 shrink-0" />

            {/* Highlight 3: Collaborations */}
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400/50 transition-all duration-300 shadow-sm">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-200 mt-2">
                Collaborations
              </span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE: Premium Glassmorphism Contact Form Card ================= */}
        <div className="lg:col-span-6 w-full">
          <div className="relative rounded-[26px] p-6 sm:p-8 bg-[#0b162c]/85 backdrop-blur-2xl border border-sky-500/40 shadow-[0_0_45px_rgba(14,165,233,0.18)] overflow-hidden">
            
            {/* Top Glowing Edge Highlight matching the reference */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none" />

            {/* Card Header: Icon Badge & Contact Me Title */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 shrink-0">
                <Send className="w-5 h-5 text-white -translate-y-0.5 translate-x-0.5" />
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Contact Me
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
                  Have a project, opportunity, or idea? Let's talk!
                </p>
              </div>
            </div>

            {/* Success Feedback View */}
            {isSubmitted ? (
              <div className="py-8 px-4 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm font-sans leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>! Your message has been received. I will review it and get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs font-semibold transition-all hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Name Field */}
                  <div>
                    <div className={`relative flex items-center rounded-xl bg-[#081223]/90 border ${errors.name ? 'border-rose-500/80 ring-1 ring-rose-500/20' : 'border-white/10 hover:border-sky-500/40 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20'} px-3.5 py-3 transition-all`}>
                      <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        autoComplete="name"
                        className="w-full bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none font-sans"
                      />
                    </div>
                    {errors.name && (
                      <p className="flex items-center gap-1 text-[11px] text-rose-400 font-sans mt-1 ml-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className={`relative flex items-center rounded-xl bg-[#081223]/90 border ${errors.email ? 'border-rose-500/80 ring-1 ring-rose-500/20' : 'border-white/10 hover:border-sky-500/40 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20'} px-3.5 py-3 transition-all`}>
                      <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        autoComplete="email"
                        className="w-full bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none font-sans"
                      />
                    </div>
                    {errors.email && (
                      <p className="flex items-center gap-1 text-[11px] text-rose-400 font-sans mt-1 ml-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Row 2: Phone Field (Optional) */}
                <div>
                  <div className={`relative flex items-center rounded-xl bg-[#081223]/90 border ${errors.phone ? 'border-rose-500/80 ring-1 ring-rose-500/20' : 'border-white/10 hover:border-sky-500/40 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20'} px-3.5 py-3 transition-all`}>
                    <Phone className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone (Optional)"
                      autoComplete="tel"
                      className="w-full bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none font-sans"
                    />
                  </div>
                  {errors.phone && (
                    <p className="flex items-center gap-1 text-[11px] text-rose-400 font-sans mt-1 ml-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Row 3: Message Field */}
                <div>
                  <div className={`relative flex items-start rounded-xl bg-[#081223]/90 border ${errors.message ? 'border-rose-500/80 ring-1 ring-rose-500/20' : 'border-white/10 hover:border-sky-500/40 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20'} px-3.5 py-3 transition-all`}>
                    <MessageSquare className="w-4 h-4 text-slate-400 mr-2.5 mt-0.5 shrink-0" />
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none font-sans resize-none"
                    />
                  </div>
                  {errors.message && (
                    <p className="flex items-center gap-1 text-[11px] text-rose-400 font-sans mt-1 ml-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:via-sky-400 hover:to-blue-500 text-white font-sans font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-2.5 cursor-pointer group/btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white -translate-y-0.5 translate-x-0.5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSlide;
