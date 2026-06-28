const ProjectsSkeleton = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
                animate-pulse
                overflow-hidden
                rounded-3xl
                border border-[var(--portfolio-border)]
                bg-[var(--portfolio-card)]
                backdrop-blur-xl
              "
            >
              <div className="h-48 w-full bg-[var(--portfolio-border)]" />

              <div className="space-y-4 p-6">
                <div className="flex justify-between">
                  <div className="h-6 w-24 rounded-full bg-[var(--portfolio-border)]" />
                  <div className="h-6 w-20 rounded-full bg-[var(--portfolio-border)]" />
                </div>

                <div className="h-8 w-3/4 rounded bg-[var(--portfolio-border)]" />

                <div className="space-y-2">
                  <div className="h-4 rounded bg-[var(--portfolio-border)]" />
                  <div className="h-4 rounded bg-[var(--portfolio-border)]" />
                  <div className="h-4 w-2/3 rounded bg-[var(--portfolio-border)]" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-20 rounded-full bg-[var(--portfolio-border)]"
                    />
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <div className="h-12 flex-1 rounded-xl bg-[var(--portfolio-border)]" />
                  <div className="h-12 flex-1 rounded-xl bg-[var(--portfolio-border)]" />
                  <div className="h-12 flex-1 rounded-xl bg-[var(--portfolio-border)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSkeleton;
