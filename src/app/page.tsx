"use client"

import { motion } from "framer-motion"
import { Github, Mail, ArrowDown, ExternalLink } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  tools: ["Git", "VS Code", "Figma", "Vercel", "Cloudflare"],
}

const projects = [
  {
    title: "PuppyLuv Paradise",
    description: "Dog daycare, training, and grooming website with beautiful responsive design and modern UI components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://daniel-henslowe.github.io/puppyluv/",
    github: "https://github.com/daniel-henslowe/puppyluv",
  },
  {
    title: "Canadian Prime Ministers",
    description: "Minimalist iOS app showcasing Canadian Prime Ministers with elegant swipe navigation built in SwiftUI.",
    tech: ["Swift", "SwiftUI", "iOS"],
    github: "https://github.com/daniel-henslowe/canadian-prime-ministers",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">
            3e3.dev
          </Link>
          <div className="flex gap-6">
            <Link href="#projects" className="text-zinc-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <motion.div
          className="max-w-5xl mx-auto w-full"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.p
            className="text-blue-400 font-mono text-sm mb-4"
            variants={fadeIn}
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={fadeIn}
          >
            Daniel Henslowe
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-zinc-500 mb-8"
            variants={fadeIn}
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-lg max-w-xl mb-12 leading-relaxed"
            variants={fadeIn}
          >
            I build exceptional digital experiences with modern technologies. Focused on creating fast, accessible, and beautiful web applications.
          </motion.p>
          <motion.div className="flex gap-4" variants={fadeIn}>
            <Link
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              View My Work
            </Link>
            <a
              href="mailto:info@3e3.dev"
              className="px-6 py-3 border border-zinc-700 text-white font-medium rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ArrowDown className="w-6 h-6 text-zinc-600 animate-bounce" />
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
            <p className="text-zinc-400 mb-12">A selection of things I've built</p>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group p-6 border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">About</h2>
            <p className="text-zinc-400 mb-12">A bit about me and what I do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-zinc-300 leading-relaxed mb-6">
                I'm a full-stack developer passionate about building exceptional digital experiences. My focus is on creating fast, accessible, and beautiful web applications using modern technologies.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                My approach combines technical expertise with an eye for design, ensuring that every project not only works flawlessly but also provides an outstanding user experience.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or working on personal projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Skills & Technologies</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-blue-400 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/80 border border-zinc-700/50 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-blue-400 mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/80 border border-zinc-700/50 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-blue-400 mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/80 border border-zinc-700/50 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-8">
              Have a project in mind or want to chat? Feel free to reach out.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:info@3e3.dev"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
              <a
                href="https://github.com/daniel-henslowe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-medium rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Daniel Henslowe. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS. Hosted on Cloudflare.</p>
        </div>
      </footer>
    </main>
  )
}
