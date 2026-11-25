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

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  titleKey: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: "skillsFrontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-5xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-400 text-5xl" />,
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400 text-5xl" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-violet-500 text-5xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
      },
      {
        name: "Material UI",
        icon: <SiMui className="text-blue-500 text-5xl" />,
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui className="text-5xl text-[var(--portfolio-text)]" />,
      },
    ],
  },

  {
    titleKey: "skillsBackend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-5xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300 text-5xl" />,
      },
      {
        name: "JWT",
        icon: <span className="text-3xl font-bold text-violet-400">JWT</span>,
      },
      {
        name: "OTP Authentication",
        icon: <span className="text-2xl font-bold text-cyan-400">OTP</span>,
      },
    ],
  },

  {
    titleKey: "skillsDatabase",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500 text-5xl" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-400 text-5xl" />,
      },
    ],
  },

  {
    titleKey: "skillsTools",
    skills: [
      {
        name: "GitHub",
        icon: <FaGithub className="text-5xl text-[var(--portfolio-text)]" />,
      },
      {
        name: "VS Code",
        icon: <span className="text-3xl font-bold text-blue-400">VS</span>,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-5xl" />,
      },
      {
        name: "Figma",
        icon: <SiFigma className="text-pink-500 text-5xl" />,
      },
      {
        name: "Vite",
        icon: <SiVite className="text-yellow-400 text-5xl" />,
      },
      {
        name: "React Query",
        icon: <SiReactquery className="text-red-400 text-5xl" />,
      },
    ],
  },

  {
    titleKey: "skillsEngineering",
    skills: [
      {
        name: "KOMPAS-3D",
        icon: (
          <span className="text-2xl font-bold text-orange-400">KOMPAS</span>
        ),
      },
      {
        name: "AutoCAD 3D",
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
              key={category.titleKey}
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
                {t(category.titleKey)}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
group flex flex-col items-center justify-center gap-3
rounded-2xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
p-5 sm:p-6
min-h-[140px]
backdrop-blur-xl
transition-all duration-300
hover:-translate-y-2
hover:border-violet-500/50
hover:bg-violet-500/5
hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
"
                  >
                    <div className="flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>

                    <span className="font-semibold text-center text-sm sm:text-base text-[var(--portfolio-text)] transition-colors duration-300 group-hover:text-cyan-400">
                      {skill.name}
                    </span>
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
