import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "../Reveal";
import { WHY } from "../../data";

export const WhySteam = () => {
  return (
    <section id="why-steam" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            overline="Why STEAM? Why now?"
            title="Why STEAM Matters for Your Child"
            sub="STEAM is more than a curriculum — it is a way of thinking that prepares children for everything ahead."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="ln-card ln-card-hover p-7"
              data-testid={`why-card-${i}`}
            >
              <span
                className="grid place-items-center w-14 h-14 rounded-2xl border-2 border-[#0F172A] text-white shadow-[3px_3px_0_#0F172A]"
                style={{ background: w.color }}
              >
                <w.icon size={26} />
              </span>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display font-extrabold text-sm text-[#475569]">0{i + 1}</span>
                <h3 className="font-display font-extrabold text-xl">{w.title}</h3>
              </div>
              <p className="mt-3 text-[#475569] leading-relaxed">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
