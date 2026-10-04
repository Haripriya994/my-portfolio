import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const activities = [
  {
    number: "01",
    title: "C Programming Setup",
    description:
      "Set up a C programming environment in VS Code using the C/C++ extension and GCC/MinGW-w64. Created, compiled, and executed a Hello World C program.",
    tags: ["C", "VS Code", "GCC", "MinGW-w64"],
    link: "https://github.com/Haripriya994/hello-world-c.git",
  },
  {
    number: "02",
    title: "VS Code Tools",
    description:
      "Explored useful VS Code tools including Prettier for code formatting, GitLens for code history and Git insights, and Live Share for real-time collaboration.",
    tags: ["VS Code", "Prettier", "GitLens", "Live Share"],
  },
  {
    number: "03",
    title: "Live Share Collaboration",
    description:
      "Collaborated with a pairing partner using VS Code Live Share and built a simple greet() function together. Learned about real-time collaboration and communication.",
    tags: ["Live Share", "Collaboration", "C"],
    link: "https://github.com/Haripriya994/hello-world-c.git",
  },
  {
    number: "04",
    title: "LeetCode Practice",
    description:
      "Practiced problem solving with Two Sum, Reverse a String, Valid Anagram, Best Time to Buy and Sell Stock, Longest Common Prefix, Binary Search, Move Zeroes, and Valid Parentheses.",
    tags: ["C", "Problem Solving", "Algorithms", "LeetCode"],
    link: "https://github.com/Haripriya994/leetcode-solutions.git",
  },
];

const skills = [
  "C Programming",
  "Problem Solving",
  "Data Structures",
  "Algorithms",
  "Git & GitHub",
  "VS Code",
  "Prettier",
  "GitLens",
  "Live Share",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#334155] bg-[#0F172A]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-widest text-[#F59E0B]"
          >
            HARIPRIYA.DEV
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#about"
              className="font-mono text-sm text-[#94A3B8] transition hover:text-[#F59E0B]"
            >
              About
            </a>
            <a
              href="#activities"
              className="font-mono text-sm text-[#94A3B8] transition hover:text-[#F59E0B]"
            >
              Activities
            </a>
            <a
              href="#skills"
              className="font-mono text-sm text-[#94A3B8] transition hover:text-[#F59E0B]"
            >
              Skills
            </a>
            <a
              href="#education"
              className="font-mono text-sm text-[#94A3B8] transition hover:text-[#F59E0B]"
            >
              Education
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-[#94A3B8] transition hover:text-[#F59E0B]"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded border border-[#334155] p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#334155] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={closeMenu} className="font-mono text-sm">
                About
              </a>
              <a
                href="#activities"
                onClick={closeMenu}
                className="font-mono text-sm"
              >
                Activities
              </a>
              <a
                href="#skills"
                onClick={closeMenu}
                className="font-mono text-sm"
              >
                Skills
              </a>
              <a
                href="#education"
                onClick={closeMenu}
                className="font-mono text-sm"
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="font-mono text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Blueprint background */}
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#334155]">
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#F59E0B]">
              <span className="h-px w-10 bg-[#F59E0B]" />
              Developer Portfolio
            </div>

            <div className="max-w-4xl">
              <p className="mb-4 font-mono text-sm text-[#94A3B8]">
                COMPUTER SCIENCE STUDENT
              </p>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Haripriya
              </h1>

              <h2 className="mt-4 max-w-3xl font-mono text-lg leading-8 text-[#94A3B8] md:text-2xl">
                Computer Science Student &amp; Aspiring Software Developer
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#94A3B8]">
                Building my programming foundations through hands-on activities,
                problem solving, collaboration, and continuous learning.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/Haripriya994"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#F59E0B] bg-[#F59E0B] px-5 py-3 font-mono text-sm font-bold text-[#0F172A] transition hover:bg-transparent hover:text-[#F59E0B]"
                >
                  <Code2 size={18} />
                  VIEW GITHUB
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="#activities"
                  className="inline-flex items-center gap-2 border border-[#334155] px-5 py-3 font-mono text-sm text-[#F8FAFC] transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
                >
                  EXPLORE WORK
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* System Profile */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-[#334155] bg-[#1E293B] p-5">
              <p className="font-mono text-xs text-[#94A3B8]">
                STATUS
              </p>
              <p className="mt-2 font-mono text-sm text-[#F59E0B]">
                ● LEARNING &amp; BUILDING
              </p>
            </div>

            <div className="border border-[#334155] bg-[#1E293B] p-5">
              <p className="font-mono text-xs text-[#94A3B8]">
                FOCUS
              </p>
              <p className="mt-2 font-mono text-sm">
                SOFTWARE DEVELOPMENT
              </p>
            </div>

            <div className="border border-[#334155] bg-[#1E293B] p-5">
              <p className="font-mono text-xs text-[#94A3B8]">
                PROFILE
              </p>
              <p className="mt-2 font-mono text-sm">
                COMPUTER SCIENCE
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between border-b border-[#334155] pb-4">
            <div>
              <p className="font-mono text-xs text-[#F59E0B]">01 / PROFILE</p>
              <h2 className="mt-2 text-3xl font-bold">About Me</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-lg leading-8 text-[#CBD5E1]">
                I am a Computer Science student and aspiring software developer
                who enjoys learning by building and solving problems.
              </p>

              <p className="mt-5 leading-7 text-[#94A3B8]">
                My learning journey includes programming fundamentals, coding
                practice, developer tools, collaboration, and hands-on
                activities. I am focused on strengthening my technical skills
                and gradually turning what I learn into useful software.
              </p>
            </div>

            <div className="border border-[#334155] bg-[#1E293B] p-6">
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-[#F59E0B]" />
                <span className="font-mono text-sm">CURRENT DIRECTION</span>
              </div>

              <p className="mt-5 font-mono text-sm leading-7 text-[#94A3B8]">
                Learn → Practice → Collaborate → Build → Improve
              </p>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section
          id="activities"
          className="border-y border-[#334155] bg-[#0B1220]"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 border-b border-[#334155] pb-4">
              <p className="font-mono text-xs text-[#F59E0B]">
                02 / ACTIVITY LOG
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Learning Activities
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {activities.map((activity) => (
                <article
                  key={activity.number}
                  className="group border border-[#334155] bg-[#1E293B] p-6 transition hover:border-[#F59E0B]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-3xl font-bold text-[#F59E0B]">
                      {activity.number}
                    </span>

                    <Code2
                      size={22}
                      className="text-[#94A3B8] transition group-hover:text-[#F59E0B]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {activity.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                    {activity.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#334155] px-2 py-1 font-mono text-xs text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] hover:underline"
                    >
                      VIEW ON GITHUB
                      <ExternalLink size={14} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 border-b border-[#334155] pb-4">
            <p className="font-mono text-xs text-[#F59E0B]">
              03 / TECHNICAL STACK
            </p>
            <h2 className="mt-2 text-3xl font-bold">Skills</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 border border-[#334155] bg-[#1E293B] p-4"
              >
                <span className="h-2 w-2 bg-[#F59E0B]" />
                <span className="font-mono text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="border-y border-[#334155] bg-[#0B1220]"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 border-b border-[#334155] pb-4">
              <p className="font-mono text-xs text-[#F59E0B]">
                04 / ACADEMIC
              </p>
              <h2 className="mt-2 text-3xl font-bold">Education</h2>
            </div>

            <div className="border border-[#334155] bg-[#1E293B] p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <GraduationCap
                    size={28}
                    className="mt-1 shrink-0 text-[#F59E0B]"
                  />

                  <div>
                    <h3 className="text-xl font-bold">
                      Computer Science
                    </h3>
                    <p className="mt-2 font-mono text-sm text-[#94A3B8]">
                      Computer Science Student
                    </p>
                  </div>
                </div>

                <span className="border border-[#334155] px-3 py-1 font-mono text-xs text-[#94A3B8]">
                  IN PROGRESS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Graphics Editor */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 border-b border-[#334155] pb-4">
            <p className="font-mono text-xs text-[#F59E0B]">
              05 / MINI PROJECT
            </p>
            <h2 className="mt-2 text-3xl font-bold">Graphics Editor</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
            <div className="flex min-h-[260px] items-center justify-center border border-[#334155] bg-[#1E293B]">
              <div className="text-center">
                <Code2
                  size={52}
                  className="mx-auto text-[#F59E0B]"
                />
                <p className="mt-4 font-mono text-xs text-[#94A3B8]">
                  GRAPHICS / 3D
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Graphics Editor
              </h3>

              <p className="mt-5 leading-8 text-[#94A3B8]">
                A mini project focused on creating and working with 3D shapes
                through a graphics editor.
              </p>

              <div className="mt-7 border-l-2 border-[#F59E0B] pl-5">
                <p className="font-mono text-sm leading-7 text-[#CBD5E1]">
                  Project details and implementation can be expanded here as
                  the project develops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications and Hackathons */}
        <section className="border-y border-[#334155] bg-[#0B1220]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 border-b border-[#334155] pb-4">
              <p className="font-mono text-xs text-[#F59E0B]">
                06 / ACHIEVEMENTS
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Certifications &amp; Hackathons
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="border border-[#334155] bg-[#1E293B] p-6">
                <BookOpen size={24} className="text-[#F59E0B]" />
                <h3 className="mt-5 font-bold">IBM Certification</h3>
                <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                  Professional learning and certification through IBM.
                </p>
              </div>

              <div className="border border-[#334155] bg-[#1E293B] p-6">
                <BookOpen size={24} className="text-[#F59E0B]" />
                <h3 className="mt-5 font-bold">Wadhwani Certification</h3>
                <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                  Learning and professional development through Wadhwani.
                </p>
              </div>

              <div className="border border-[#334155] bg-[#1E293B] p-6">
                <Briefcase size={24} className="text-[#F59E0B]" />
                <h3 className="mt-5 font-bold">
                  Smart India Hackathon
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                  Hackathon experience through SIH / Smart India Hackathon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="border border-[#334155] bg-[#1E293B] p-8 md:p-10">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-xs text-[#F59E0B]">
                  SOURCE / GITHUB
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Explore My Code
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#94A3B8]">
                  View my programming activities, coding practice, and projects
                  on GitHub.
                </p>
              </div>

              <a
                href="https://github.com/Haripriya994"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#F59E0B] px-5 py-3 font-mono text-sm text-[#F59E0B] transition hover:bg-[#F59E0B] hover:text-[#0F172A]"
              >
                <Code2 size={18} />
                GITHUB PROFILE
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-[#334155]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-sm font-bold">
              HARI PRIYA
            </p>
            <p className="mt-1 font-mono text-xs text-[#64748B]">
              Computer Science Student &amp; Aspiring Software Developer
            </p>
          </div>

          <a
            href="https://github.com/Haripriya994"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#94A3B8] hover:text-[#F59E0B]"
          >
            github.com/Haripriya994
            <ExternalLink size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;