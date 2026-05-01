import { FiGithub, FiMail, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

function Contact() {
  return (
    <section id="contact" className="section-padding bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Start a conversation"
          description="Use the form for project discussions, collaboration, or cybersecurity learning opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="glass-card p-7"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <FiMail className="text-4xl text-neon-green" />
            <h3 className="mt-5 text-2xl font-bold text-white">Email</h3>
            <a
              href="mailto:choudhuryprerona04@gmail.com"
              className="mt-3 block break-words text-lg font-semibold text-neon-green transition hover:drop-shadow-[0_0_12px_rgba(57,255,20,.75)]"
            >
              choudhuryprerona04@gmail.com
            </a>
            <div className="mt-5">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                <FiGithub className="text-neon-green" />
                GitHub
              </h3>
              <a
                href="https://github.com/git-prerona-choudhury"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block break-words text-lg font-semibold text-neon-green transition hover:drop-shadow-[0_0_12px_rgba(57,255,20,.75)]"
              >
                github.com/git-prerona-choudhury
              </a>
            </div>
            <p className="mt-5 leading-7 text-zinc-400">
              Available for academic projects, portfolio feedback, and web development discussions.
            </p>
          </motion.div>

          <motion.form
            className="glass-card grid gap-5 p-7"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="form-field">
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input type="email" placeholder="your@email.com" />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea rows="5" placeholder="Write your message" />
            </label>
            <button type="submit" className="btn-primary w-full justify-center sm:w-fit">
              Send Message <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
