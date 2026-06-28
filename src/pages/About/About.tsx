import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="
    min-h-screen
    px-4
    sm:px-6
    pt-28
    pb-20
  "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-lg font-semibold text-[var(--portfolio-text-muted)]">
              {t("aboutMe")}
            </p>

            <h2
              className="
  mb-8
  text-3xl
  sm:text-4xl
  lg:text-5xl
  font-bold
  text-[var(--portfolio-text)]
"
            >
              {t("journey")}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                {t("technology")}
              </span>
            </h2>

            <div
              className="
  space-y-6
  text-lg
  leading-8
  text-[var(--portfolio-text-muted)]
"
            >
              <p>{t("aboutText1")}</p>

              <p>{t("aboutText2")}</p>

              <p>{t("aboutText3")}</p>

              <p>{t("aboutText4")}</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6 w-full">
            <div
              className="
rounded-3xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-violet-500/40
hover:bg-white/10
hover:shadow-[0_0_35px_rgba(147,51,234,0.25)]
"
            >
              <p className="text-sm font-semibold text-cyan-400">2016 - 2020</p>

              <h3 className="mt-2 text-2xl font-bold text-[var(--portfolio-text)] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
                {t("tstu")}
              </h3>

              <p className="mt-3 text-[var(--portfolio-text-muted)]">
                {t("tstuDescription")}
              </p>
            </div>

            <div
              className="
rounded-3xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-violet-500/40
hover:bg-white/10
hover:shadow-[0_0_35px_rgba(147,51,234,0.25)]
"
            >
              <p className="text-sm font-semibold text-[var(--portfolio-text-muted)]">
                2021 - Present
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[var(--portfolio-text)] hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(147,51,234,0.25)]">
                {t("veolia")}
              </h3>

              <p className="mt-3 text-[var(--portfolio-text-muted)]">
                {t("veoliaDescription")}
              </p>
            </div>

            <div
              className="
rounded-3xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-violet-500/40
hover:bg-white/10
hover:shadow-[0_0_35px_rgba(147,51,234,0.25)]
"
            >
              <p className="text-sm font-semibold text-[var(--portfolio-text-muted)]">
                2025 - Present
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[var(--portfolio-text)] hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                {t("tatu")}
              </h3>

              <p className="mt-3 text-[var(--portfolio-text-muted)]">
                {t("tatuDescription")}
              </p>
            </div>

            <div
              className="
rounded-3xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-violet-500/40
hover:bg-white/10
hover:shadow-[0_0_35px_rgba(147,51,234,0.25)]
"
            >
              <p className="text-sm font-semibold text-[var(--portfolio-text-muted)]">
                2025 - Present
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[var(--portfolio-text)] hover:border-green-500/50 hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]">
                {t("najot")}
              </h3>

              <p className="mt-3 text-[var(--portfolio-text-muted)]">
                {t("najotDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
