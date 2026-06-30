import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 size={18} className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={18} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={18} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={18} className="text-blue-400" />,
  },
  {
    name: "React",
    icon: <FaReact size={18} className="text-cyan-400" />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={18} className="text-violet-500" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={18} className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={18} className="text-gray-300" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={18} className="text-green-600" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={18} className="text-blue-600" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={18} className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={18} className="text-cyan-500" />,
  },
];
const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="
    mx-auto
    flex
    min-h-screen
    max-w-7xl
    flex-col
    items-center
    gap-16
    px-6
    py-10
    lg:flex-row
    lg:items-center
  "
      >
        {/* Left Side */}
        <div className="flex-1">
          <p className="mb-4 text-xl text-violet-400">{t("greeting")}</p>

          <h1 className="mb-4 text-6xl font-bold">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t("name")}
            </span>
          </h1>

          <h2 className="mb-8 text-5xl font-bold text-[var(--portfolio-text)]">
            {t("role")}
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-[var(--portfolio-text-muted)]">
            {t("description")}
          </p>
          <div className="mb-10 flex max-w-2xl flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
flex items-center gap-2
rounded-xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
px-4 py-2
text-sm
font-medium
text-[var(--portfolio-text)]
backdrop-blur-md
transition-all duration-300
hover:border-violet-500/50
hover:text-cyan-400
hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            <Link
              to="/projects"
              className="
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      to-cyan-500
      px-8 py-4
      text-lg font-semibold text-white
      shadow-[0_0_30px_rgba(147,51,234,.45)]
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_0_50px_rgba(147,51,234,.65)]
    "
            >
              {t("viewProjects")}
            </Link>

            <a
              href="/cv/Davron_Djurayev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
      rounded-2xl
      border border-violet-500/30
      bg-[var(--portfolio-card)]
      px-8 py-4
      text-lg font-semibold
      text-[var(--portfolio-text)]
      backdrop-blur-xl
      transition-all duration-300
      hover:border-cyan-400
      hover:bg-white/10
    "
            >
              {t("viewCV")}
            </a>

            <a
              href="/cv/Davron_Djurayev_CV.pdf"
              download
              className="
      rounded-2xl
      border border-violet-500/30
      bg-[var(--portfolio-card)]
      px-8 py-4
      text-lg font-semibold
      text-[var(--portfolio-text)]
      backdrop-blur-xl
      transition-all duration-300
      hover:border-cyan-400
      hover:bg-white/10
    "
            >
              {t("downloadCV")}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/djurayevdavron"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border border-[var(--portfolio-border)] bg-[var(--portfolio-card)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <FaGithub size={22} className="text-[var(--portfolio-text)]" />
            </a>

            <a
              href="https://linkedin.com/in/davrondjurayev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]"
            >
              <FaLinkedin size={22} className="text-[#0A66C2]" />
            </a>

            <a
              href="https://t.me/RUNORAZI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#229ED9] hover:shadow-[0_0_20px_rgba(34,158,217,0.4)]"
            >
              <FaTelegram size={22} className="text-[#229ED9]" />
            </a>

            <a
              href="mailto:djurayevdavron7@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.4)]"
            >
              <FaEnvelope size={22} className="text-[#EA4335]" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div
              className="
                absolute inset-0
                rounded-full
                bg-violet-600/30
                blur-[120px]
              "
            />

            <div
              className="
    relative
    h-[260px]
w-[260px]
sm:h-[320px]
sm:w-[320px]
md:h-[400px]
md:w-[400px]
lg:h-[550px]
lg:w-[550px]
    overflow-hidden
    rounded-full
    border-[3px]
    border-violet-500/60
    shadow-[0_0_80px_rgba(147,51,234,0.45)]
  "
            >
              <img
                src="/images/profile.png"
                alt="Jurayev Davron"
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                "
              />
            </div>
            <div className="orbit hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-[var(--portfolio-surface)] text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.35)]">
              <FaReact size={34} />
            </div>

            <div
              className="orbit hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-blue-400 shadow-[0_0_25px_rgba(59,130,246,.35)]"
              style={{ animationDelay: "-5s" }}
            >
              <SiTypescript size={30} />
            </div>

            <div
              className="orbit hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-green-500 shadow-[0_0_25px_rgba(34,197,94,.35)]"
              style={{ animationDelay: "-10s" }}
            >
              <FaNodeJs size={34} />
            </div>

            <div
              className="orbit hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-green-400 shadow-[0_0_25px_rgba(74,222,128,.35)]"
              style={{ animationDelay: "-15s" }}
            >
              <SiMongodb size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
