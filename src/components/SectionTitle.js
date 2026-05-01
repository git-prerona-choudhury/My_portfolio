import { motion } from 'framer-motion';

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neon-green">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
