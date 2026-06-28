import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiFigma,
  SiVite,
  SiReactquery,
  SiMui,
  SiShadcnui,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        level: 95,
        icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      },
      {
        name: "CSS",
        level: 95,
        icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      },
      {
        name: "JavaScript",
        level: 85,
        icon: <FaJs className="text-yellow-400 text-5xl" />,
      },
      {
        name: "TypeScript",
        level: 85,
        icon: <SiTypescript className="text-blue-400 text-5xl" />,
      },
      {
        name: "React",
        level: 85,
        icon: <FaReact className="text-cyan-400 text-5xl" />,
      },
      {
        name: "Redux",
        level: 85,
        icon: <SiRedux className="text-violet-500 text-5xl" />,
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
      },
      {
        name: "Material UI",
        level: 85,
        icon: <SiMui className="text-blue-500 text-5xl" />,
      },
      {
        name: "Shadcn UI",
        level: 90,
        icon: <SiShadcnui className="text-5xl text-[var(--portfolio-text)]" />,
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: <FaNodeJs className="text-green-500 text-5xl" />,
      },
      {
        name: "Express.js",
        level: 85,
        icon: <SiExpress className="text-gray-300 text-5xl" />,
      },
      {
        name: "JWT",
        level: 90,
        icon: <span className="text-4xl font-bold text-violet-400">JWT</span>,
      },
      {
        name: "OTP Authentication",
        level: 80,
        icon: <span className="text-4xl font-bold text-cyan-400">OTP</span>,
      },
    ],
  },

  {
    title: "Database Technologies",
    skills: [
      {
        name: "MongoDB",
        level: 85,
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
      {
        name: "PostgreSQL",
        level: 85,
        icon: <SiPostgresql className="text-blue-500 text-5xl" />,
      },
      {
        name: "MySQL",
        level: 85,
        icon: <SiMysql className="text-blue-400 text-5xl" />,
      },
    ],
  },

  {
    title: "Development Tools",
    skills: [
      {
        name: "GitHub",
        level: 80,
        icon: <FaGithub className="text-5xl text-[var(--portfolio-text)]" />,
      },
      {
        name: "VS Code",
        level: 95,
        icon: <span className="text-3xl font-bold text-blue-400">VS</span>,
      },
      {
        name: "Postman",
        level: 85,
        icon: <SiPostman className="text-orange-500 text-5xl" />,
      },
      {
        name: "Figma",
        level: 88,
        icon: <SiFigma className="text-pink-500 text-5xl" />,
      },
      {
        name: "Vite",
        level: 90,
        icon: <SiVite className="text-yellow-400 text-5xl" />,
      },
      {
        name: "React Query",
        level: 85,
        icon: <SiReactquery className="text-red-400 text-5xl" />,
      },
    ],
  },

  {
    title: "Engineering Software",
    skills: [
      {
        name: "KOMPAS-3D",
        level: 85,
        icon: (
          <span className="text-2xl font-bold text-orange-400">KOMPAS</span>
        ),
      },
      {
        name: "AutoCAD 3D",
        level: 80,
        icon: <span className="text-2xl font-bold text-red-400">AutoCAD</span>,
      },
    ],
  },
];
const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen px-4 sm:px-6 pt-28 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-2xl font-semibold text-violet-400">
            {t("skills")}
          </p>

          <h2
            className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-[var(--portfolio-text)]
"
          >
            {t("technologies")} &
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              {t("tools")}
            </span>
          </h2>
        </div>
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-3xl
                border border-[var(--portfolio-border)]
                bg-[var(--portfolio-card)]
                p-5 sm:p-8
                backdrop-blur-xl
              "
            >
              <h3
                className="
    mb-8
    text-2xl
    sm:text-3xl
    font-bold
    text-center
    lg:text-left
    text-[var(--portfolio-text)]
  "
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
flex flex-col items-center gap-4
w-full
sm:w-[180px]
rounded-3xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
p-5 sm:p-8
transition-all duration-300
hover:-translate-y-3
hover:border-violet-500/40
hover:shadow-[0_0_40px_rgba(147,51,234,.35)]
"
                  >
                    {skill.icon}

                    <span className="font-medium text-center text-[var(--portfolio-text-muted)]">
                      {skill.name}
                    </span>

                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-sm font-semibold text-cyan-400">
                      {skill.level}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
