import { FiShield, FiTerminal } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Learning security, building for the web"
          description="A professional foundation in computer science with a focused interest in ethical hacking, secure systems, and practical software development."
        />

        <div className="mx-auto max-w-5xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-center text-lg leading-8 text-zinc-300">
              I am a Computer Science student focused on learning
              cybersecurity concepts, ethical hacking techniques, and software development.
              Always eager to explore new technologies and improve technical skills.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <FiShield className="text-3xl text-neon-green" />
                <h3 className="mt-4 text-lg font-bold text-white">Cybersecurity Focus</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Exploring ethical hacking, security fundamentals, and responsible defense.
                </p>
              </div>
              <div className="glass-card p-5">
                <FiTerminal className="text-3xl text-neon-green" />
                <h3 className="mt-4 text-lg font-bold text-white">Development Mindset</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Building clean web projects while strengthening programming fundamentals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
