import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Front-end Developer",
      company: "Tech Agency",
      date: "2023 - Present",
      description:
        "Leading the front-end team to build interactive SaaS platforms using React and Next.js.",
    },
    {
      role: "WordPress Developer",
      company: "Digital Studio",
      date: "2021 - 2023",
      description:
        "Developed custom WordPress themes and plugins for high-traffic e-commerce and media sites.",
    },
    {
      role: "Web Developer",
      company: "Freelance",
      date: "2019 - 2021",
      description:
        "Created tailored web solutions for small businesses, focusing on SEO and performance.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Experience
          </h2>
          <div className="w-24 h-1 bg-cyan-500 rounded-full" />
        </div>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-linear-to-b before:from-transparent before:via-cyan-500/50 before:to-transparent">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-black text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10 transition-transform group-hover:scale-110 group-hover:bg-cyan-950 group-hover:border-cyan-500">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <div className="flex items-center text-zinc-400 text-sm mt-2 sm:mt-0 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <Calendar size={14} className="mr-2 text-cyan-400" />
                    {exp.date}
                  </div>
                </div>
                <div className="text-cyan-400 font-medium mb-3">
                  {exp.company}
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
