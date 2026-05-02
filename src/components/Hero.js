import { FiArrowRight, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 pt-24 sm:px-8"
    >
      <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-35" />
      <div className="absolute inset-x-0 top-20 mx-auto h-80 max-w-4xl rounded-full bg-neon-green/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="mb-5 inline-flex rounded border border-neon-green/40 bg-neon-green/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-neon-green">
            Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="text-neon-green drop-shadow-[0_0_20px_rgba(57,255,20,0.45)]">
              Prerona Choudhury
            </span>
          </h1>
          <div className="mt-6 min-h-16 max-w-3xl text-xl font-semibold text-zinc-200 sm:text-2xl">
            <span className="typing-text">
              CS Student|Cybersecurity Enthusiast|Web Developer
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I am pursuing B.Sc Computer Science (Hons). I am passionate about cyber security,
            especially in ethical hacking, and also interested in web development.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-56 sm:max-w-64 lg:mr-20"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute -inset-4 rounded-full border border-neon-green/25 bg-neon-green/10 blur-xl" />
          <div className="relative overflow-hidden rounded-full border border-neon-green/35 bg-zinc-950 shadow-glow-soft">
            <img
              src={`${process.env.PUBLIC_URL}/profile-photo.jpg`}
              alt="Profile portrait"
              className="aspect-square w-full rounded-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
