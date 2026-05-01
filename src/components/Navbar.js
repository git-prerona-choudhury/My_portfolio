import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-neon-green/10 bg-black/70 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded border border-neon-green/70 bg-neon-green/10 text-lg font-black text-neon-green shadow-glow-soft transition group-hover:shadow-glow">
            PC
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200 sm:block">
            Prerona
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-neon-green/10 hover:text-neon-green"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="grid h-11 w-11 place-items-center rounded border border-neon-green/30 text-neon-green transition hover:bg-neon-green/10 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          className="border-t border-neon-green/10 bg-black/95 px-5 py-4 md:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="rounded px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-neon-green/10 hover:text-neon-green"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
