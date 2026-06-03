import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Users, AlertCircle, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { CAMP_DAYS, CAMP_FACTS } from "../../data";

export const Events = ({ onRegister }) => {
  return (
    <section id="events" className="py-20 lg:py-28 bg-white border-y-2 border-[#0F172A] relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-[#FFE4E4] blur-3xl opacity-50" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="ln-overline">Upcoming events — Summer 2026</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">STEAM Summer Camp 2026</h2>
            </div>
            <span className="ln-tag !bg-[#FF6B6B] !text-white !border-[#0F172A] !text-sm !px-4 !py-2 animate-pulse">
              Registrations open • limited spots
            </span>
          </div>
          <p className="mt-5 max-w-3xl text-lg text-[#475569] leading-relaxed">
            A one-week intensive STEAM summer camp for children aged 6–13. Each day has a dedicated theme. Children spend
            3 hours per day in guided scientific investigations, both indoors and outdoors.
          </p>
        </Reveal>

        {/* Weekly timeline */}
        <Reveal delay={0.05}>
          <h3 className="mt-12 font-display font-extrabold text-2xl flex items-center gap-2">
            <CalendarDays size={24} className="text-[#4338CA]" /> A week at camp
          </h3>
          <div className="mt-6 grid md:grid-cols-5 gap-4" data-testid="camp-week">
            {CAMP_DAYS.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="ln-card ln-card-hover p-5 flex flex-col"
                style={{ background: `${d.color}14` }}
                data-testid={`camp-day-${d.day}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-sm uppercase tracking-wider" style={{ color: d.color }}>
                    {d.day}
                  </span>
                  <span className="grid place-items-center w-10 h-10 rounded-xl text-white border-2 border-[#0F172A]" style={{ background: d.color }}>
                    <d.icon size={20} />
                  </span>
                </div>
                <h4 className="mt-4 font-display font-extrabold text-lg leading-tight">{d.theme}</h4>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed flex-1">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Facts + map */}
        <div className="mt-12 grid lg:grid-cols-2 gap-7">
          <Reveal>
            <div className="ln-card p-7 h-full">
              <h3 className="font-display font-extrabold text-2xl">Camp details</h3>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
                {CAMP_FACTS.map((f) => (
                  <div key={f.label} className="border-l-2 border-[#E0E7FF] pl-3">
                    <div className="text-xs font-bold uppercase tracking-wide text-[#475569]">{f.label}</div>
                    <div className="font-display font-extrabold text-[#0F172A]">{f.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Stat icon={Clock} label="3 hrs / day" />
                <Stat icon={Users} label="Max 10 kids" />
                <Stat icon={MapPin} label="Kraków, PL" />
              </div>

              <div className="mt-6 ln-card !shadow-none bg-[#E0E7FF] p-4 flex gap-3">
                <AlertCircle size={20} className="text-[#4338CA] shrink-0 mt-0.5" />
                <p className="text-sm text-[#0F172A]/80 font-medium">
                  Suitable for children with learning differences. Our educator is a certified Neuroscience Coach
                  experienced with ADHD, dyslexia, memory challenges, and SEN. Children take home a science notebook,
                  and full-week participants receive a completion certificate.
                </p>
              </div>

              <button onClick={onRegister} className="ln-btn ln-btn-primary mt-6 w-full" data-testid="events-register-btn">
                Reserve Your Child's Spot <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="ln-card overflow-hidden h-full min-h-[420px] flex flex-col">
              <div className="px-5 py-3 border-b-2 border-[#0F172A] flex items-center gap-2 bg-[#0F172A] text-white">
                <MapPin size={18} className="text-[#FF6B6B]" />
                <span className="font-display font-bold">Kraków, Poland</span>
                <span className="ml-auto text-xs text-white/60">Exact address shared on registration</span>
              </div>
              <iframe
                title="Kraków map"
                src="https://www.google.com/maps?q=Krak%C3%B3w%2C+Poland&output=embed"
                className="w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="krakow-map"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon: Icon, label }) => (
  <div className="ln-card !shadow-[3px_3px_0_#0F172A] p-3 flex flex-col items-center text-center gap-1">
    <Icon size={20} className="text-[#4338CA]" />
    <span className="text-xs font-bold">{label}</span>
  </div>
);
