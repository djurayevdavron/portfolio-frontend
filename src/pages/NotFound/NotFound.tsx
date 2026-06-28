import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-9xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">Page Not Found</h2>

        <p className="mx-auto mt-6 max-w-lg text-lg text-zinc-400">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            mt-10 inline-block
            rounded-2xl
            bg-gradient-to-r
            from-violet-500
            to-cyan-500
            px-8 py-4
            font-semibold
            text-white
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(34,211,238,.4)]
          "
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
