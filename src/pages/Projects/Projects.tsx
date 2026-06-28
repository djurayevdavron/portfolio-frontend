import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/project.service";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProjectsSkeleton from "../../components/skeletons/ProjectsSkeleton";




const Projects = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const filteredProjects = projects?.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(projects);

  if (isLoading) return <ProjectsSkeleton />;

  if (error) return <div>{t("errorProjects")}</div>;

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-2xl font-semibold text-violet-400">
            {t("projects")}
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
            {t("my")}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              {t("projectsTitle")}
            </span>
          </h2>

          <p
            className="
mx-auto
mt-6
max-w-3xl
text-base
sm:text-lg
text-[var(--portfolio-text-muted)]
"
          >
            {t("projectsDescription")}
          </p>
          <input
  type="text"
  placeholder={t("searchProjects")}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
    mx-auto
    mt-8
    block
    w-full
    max-w-xl
    rounded-2xl
    border border-[var(--portfolio-border)]
    bg-[var(--portfolio-card)]
    px-5 py-4
    text-[var(--portfolio-text)]
    outline-none
    transition-all duration-300
    focus:border-cyan-400
    focus:shadow-[0_0_20px_rgba(34,211,238,.25)]
  "
/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <div
              key={project._id}
              className="
group
flex flex-col
h-full
overflow-hidden
rounded-3xl
border border-gray-300/70
bg-[var(--portfolio-card)]
backdrop-blur-xl
transition-all duration-300
hover:-translate-y-3
hover:border-violet-500/40
hover:shadow-[0_0_40px_rgba(147,51,234,.35)]
"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
  h-48
  w-full
  object-cover
  transition-all duration-500
  group-hover:scale-110
"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-400">
                    {project.category}
                  </span>

                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[var(--portfolio-text)]">
                  {project.title}
                </h3>

                <p className="mb-6 line-clamp-4 text-[var(--portfolio-text-muted)]">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                      rounded-full
                      border border-cyan-500/20
                      bg-cyan-500/10
                      px-3 py-1
                      text-xs
                      text-cyan-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
      flex-1 rounded-xl
      border border-[var(--portfolio-border)]
      py-3 text-center
      font-medium text-[var(--portfolio-text)]
      transition-all duration-300
      hover:border-violet-500
      hover:bg-violet-500/10
      hover:text-violet-400
    "
                  >
                    {t("github")}
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
      flex-1 rounded-xl
      bg-gradient-to-r
      from-violet-500
      to-cyan-500
      py-3 text-center
      font-semibold text-white
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(34,211,238,.45)]
    "
                  >
                    {t("liveDemo")}
                  </a>

                  <Link
                    to={`/projects/${project._id}`}
                    className="
      flex-1 rounded-xl
      border border-cyan-500/30
      py-3 text-center
      font-medium text-cyan-400
      transition-all duration-300
      hover:border-cyan-400
      hover:bg-cyan-500/10
      hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
    "
                  >
                    {t("details")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
