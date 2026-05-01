import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'Online Retail Shopping Management System',
    description:
      'A localhost-based mini project for managing products, orders, and customer records in a retail shopping system.',
  },
  {
    title: 'Criminal Record Management System',
    description:
      'A localhost-based mini project designed to store and manage criminal records securely using database operations.',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected mini projects"
          description="Academic and localhost-based systems focused on database operations, record handling, and practical application flow."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card group flex min-h-72 flex-col justify-between overflow-hidden p-7"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div>
                <div className="mb-6 h-1 w-20 rounded bg-neon-green shadow-glow" />
                <h3 className="text-2xl font-bold text-white transition group-hover:text-neon-green">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://github.com/git-prerona-choudhury?tab=repositories" className="btn-secondary justify-center text-sm" target="_blank" rel="noopener noreferrer">
                  View Codes <FiExternalLink />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
