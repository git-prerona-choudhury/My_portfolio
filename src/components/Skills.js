import { FaCuttlefish, FaHtml5, FaJava, FaPhp, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { DiCss3 } from 'react-icons/di';

const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: FaCuttlefish },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      {name: 'PHP', icon: FaPhp}
    ],
  },
  {
    title: 'Web Technologies',
    skills: [{ name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: DiCss3 },
     ],
  },
  {
    title: 'Database',
    skills: [{ name: 'SQL', icon: SiMysql }],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical toolkit"
          description="Core programming, web, and database skills arranged around practical academic and mini-project work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="group rounded border border-white/10 bg-black/45 p-5 text-center transition hover:border-neon-green/70 hover:shadow-glow-soft"
                      whileHover={{ y: -6, scale: 1.02 }}
                    >
                      <Icon className="mx-auto text-4xl text-neon-green transition group-hover:drop-shadow-[0_0_12px_rgba(57,255,20,.8)]" />
                      <p className="mt-3 text-sm font-semibold text-zinc-200">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
