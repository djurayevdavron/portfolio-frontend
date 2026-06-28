import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../../services/project.service";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl text-[var(--portfolio-text)]">
        {t("loadingProject")}
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl text-red-500">
        {t("projectNotFound")}
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                rounded-3xl
                border  border-[var(--portfolio-border)]
                shadow-[0_0_50px_rgba(147,51,234,.25)]
              "
            />
          </div>

          <div>
            <div className="mb-6 flex flex-wrap gap-4">
              <span className="rounded-full bg-violet-500/20 px-4 py-2 text-violet-400">
                {project.category}
              </span>

              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
                {project.status}
              </span>
            </div>

            <h1 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--portfolio-text)]">
              {project.title}
            </h1>

            <p className="mb-10 text-lg leading-8 text-[var(--portfolio-text-muted)]">
              {project.description}
            </p>

            <h2 className="mb-5 text-2xl font-bold text-[var(--portfolio-text)]">
              {t("technologies")}
            </h2>

            <div className="mb-10 flex flex-wrap gap-3">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-cyan-500/20
                    bg-cyan-500/10
                    px-4 py-2
                    text-cyan-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="
      rounded-xl
      border border-cyan-500/30
      px-8 py-4
      text-cyan-400
      transition-all
      hover:border-cyan-400
      hover:bg-cyan-500/10
    "
              >
                ← {t("back")}
              </Link>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border  border-[var(--portfolio-border)]
                  px-8 py-4
                  text-[var(--portfolio-text)]
                  transition-all
                  hover:border-violet-500
                  hover:bg-violet-500/10
                "
              >
                {t("github")}
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
  rounded-xl
  bg-gradient-to-r
  from-violet-500
  to-cyan-500
  px-8 py-4
  font-semibold
  text-white
  transition-all duration-300
  hover:scale-105
  hover:shadow-[0_0_25px_rgba(34,211,238,.45)]
"
              >
                {t("liveDemo")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectDetails;
