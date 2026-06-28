import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { sendContactMessage } from "../../services/contact.service";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactMessage(formData);

      toast.success(t("messageSent"));
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(t("messageFailed"));
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-2xl font-semibold text-violet-400">
            {t("contact")}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--portfolio-text)]">
            {t("getIn")}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              {t("touch")}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-[var(--portfolio-text-muted)]">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div
            className="
              rounded-3xl
              border border-[var(--portfolio-border)]
              bg-[var(--portfolio-card)]
              p-5 sm:p-8
              backdrop-blur-xl
            "
          >
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-[var(--portfolio-text)]">
              {t("contactInformation")}
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="text-cyan-400" size={22} />

                <div>
                  <p className="text-sm text-[var(--portfolio-text-muted)]">
                    {t("email")}
                  </p>
                  <p className="break-all text-base sm:text-lg text-cyan-400">
                    djurayevdavron7@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="text-cyan-400" size={22} />

                <div>
                  <p className="text-sm text-[var(--portfolio-text-muted)]">
                    {t("phone")}
                  </p>
                  <p className="text-lg text-cyan-400">+998 90 932-83-44</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="text-cyan-400" size={22} />

                <div>
                  <p className="text-sm text-[var(--portfolio-text-muted)]">
                    {t("location")}
                  </p>
                  <p className="text-lg text-cyan-400">Tashkent, Uzbekistan</p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm text-[var(--portfolio-text-muted)]">
                  {t("availability")}
                </p>
                <span
                  className="
inline-flex
max-w-full
rounded-full
bg-green-500/20
px-4 py-2
text-center
text-green-400
"
                >
                  {t("availableForInternship")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="
              rounded-3xl
              border border-[var(--portfolio-border)]
              bg-[var(--portfolio-card)]
              p-5 sm:p-8
              backdrop-blur-xl
            "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder={t("yourName")}
                className="
w-full rounded-2xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
px-5 py-4
text-[var(--portfolio-text)]
outline-none
transition-all duration-300
focus:border-cyan-500
focus:shadow-[0_0_20px_rgba(34,211,238,.25)]
"
              />

              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder={t("yourEmail")}
                className="
w-full rounded-2xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
px-5 py-4
text-[var(--portfolio-text)]
outline-none
transition-all duration-300
focus:border-cyan-500
focus:shadow-[0_0_20px_rgba(34,211,238,.25)]
"
              />

              <input
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder={t("subject")}
                className="
w-full rounded-2xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
px-5 py-4
text-[var(--portfolio-text)]
outline-none
transition-all duration-300
focus:border-cyan-500
focus:shadow-[0_0_20px_rgba(34,211,238,.25)]
"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder={t("yourMessage")}
                className="
w-full rounded-2xl
border border-[var(--portfolio-border)]
bg-[var(--portfolio-card)]
px-5 py-4
text-[var(--portfolio-text)]
outline-none
transition-all duration-300
focus:border-cyan-500
focus:shadow-[0_0_20px_rgba(34,211,238,.25)]
"
              />

              <button
                type="submit"
                disabled={loading}
                className="
    group
    flex w-full items-center justify-center gap-3
    rounded-2xl
    bg-gradient-to-r
    from-violet-500
    to-cyan-500
    py-4
    font-semibold
    text-white
    transition-all duration-300
    hover:scale-105
    cursor-pointer
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
              >
                {loading ? t("sending") : t("sendMessage")}

                {!loading && (
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
