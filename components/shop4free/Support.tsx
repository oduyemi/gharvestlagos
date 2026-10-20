"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartFilled, MedicineBoxOutlined, ShoppingOutlined, SkinOutlined } from "@ant-design/icons";


const supportCategories = [
  {
    number: "01",
    icon: ShoppingOutlined,
    eyebrow: "EVERYDAY NOURISHMENT",
    title: "Food & provisions",
    shortDescription: "Everyday staples to help put meals on the table.",
    examples: [
      "Rice & beans",
      "Pasta & noodles",
      "Semovita & staples",
      "Milk, sugar & beverages",
    ],
    image: "/images/shop4free/food.jpg",
    imagePosition: "center",
    accent: "#00A3E0",
    theme: "bg-[#EAF8FD]",
    label: "NOURISH",
  },
  {
    number: "02",
    icon: SkinOutlined,
    eyebrow: "DIGNITY & COMFORT",
    title: "Clothing & essentials",
    shortDescription: "Useful clothing and household items for daily life.",
    examples: [
      "Men's & women's wear",
      "Children's clothing",
      "Household essentials",
      "Everyday necessities",
    ],
    image: "/images/shop4free/clothings.PNG",
    imagePosition: "center",
    accent: "#E87722",
    theme: "bg-[#FFF2E8]",
    label: "PROVIDE",
  },
  {
    number: "03",
    icon: MedicineBoxOutlined,
    eyebrow: "CARE BEYOND THE BASICS",
    title: "Health & encouragement",
    shortDescription: "Wellbeing support and personal care where available.",
    examples: [
      "Health screenings",
      "Medical checkups",
      "Occasional giveaways",
      "Prayer & encouragement",
    ],
    image: "/images/shop4free/health.PNG",
    imagePosition: "center",
    accent: "#00A859",
    theme: "bg-[#EAF8F0]",
    label: "ENCOURAGE",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Shop4FreeSupport = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="shop4free-support"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full bg-[#00A3E0]/[0.06] blur-3xl"
      />

      <div className="gh-container relative mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1 w-9 rounded-full bg-[#E87722]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B2265]">
                What support can look like
              </p>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B2265] sm:text-5xl lg:text-6xl">
              Essentials for living.
              <span className="mt-2 block text-[#00A3E0]">
                Care for the whole person.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From the weekly essentials of home life to wellbeing and
              encouragement, every contribution can help meet a practical need.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F9FC] bg-[#0B2265] text-xs text-white">
                  <ShoppingOutlined />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F9FC] bg-[#00A3E0] text-xs text-white">
                  <SkinOutlined />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F9FC] bg-[#00A859] text-xs text-white">
                  <HeartFilled />
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                Practical help. Personal care.
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {supportCategories.map((category, index) => {
            const Icon = category.icon;
            const featured = index === 0;

            return (
              <motion.article
                key={category.number}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease,
                }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_12px_40px_-34px_rgba(11,34,101,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_25px_65px_-38px_rgba(11,34,101,0.28)] ${
                  featured ? "lg:col-span-6" : "lg:col-span-3"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${featured ? "h-64 sm:h-72 lg:h-[300px]" : "h-56 sm:h-64 lg:h-[300px]"}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{
                      backgroundImage: `url('${category.image}')`,
                      backgroundPosition: category.imagePosition,
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#071744]/80 via-[#071744]/10 to-[#071744]/15"
                  />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-[#071744]/35 px-3 py-2 backdrop-blur-md">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: category.accent }}
                    />
                    <span className="text-[10px] font-bold tracking-[0.16em] text-white">
                      {category.label}
                    </span>
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold tracking-[0.15em] text-white/80">
                    {category.number}
                  </span>

                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
                    <div className="min-w-0">
                      <p className="mb-2 text-[9px] font-bold tracking-[0.18em] text-white/75 sm:text-[10px]">
                        {category.eyebrow}
                      </p>
                      <h3
                        className={`font-extrabold leading-tight tracking-tight text-white ${
                          featured
                            ? "text-3xl sm:text-4xl"
                            : "text-2xl sm:text-3xl"
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-sm leading-6 text-slate-600">
                    {category.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className={`inline-flex items-center rounded-full px-3 py-2 text-xs font-medium leading-4 text-[#0B2265] ${category.theme}`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="mb-4 h-px w-full bg-slate-100" />

                    <a
                      href="#shop4free-get-involved"
                      className="group/link inline-flex min-h-10 items-center gap-2 text-xs font-bold text-[#0B2265] transition-colors hover:text-[#00A3E0] sm:text-sm"
                    >
                      Help make this possible
                      <ArrowRightOutlined className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          className="mt-7 flex flex-col gap-4 rounded-2xl border border-[#0B2265]/10 bg-white p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6"
        >
          <div className="flex-1">
            <p className="text-sm font-bold text-[#0B2265]">
              Every edition is shaped by available support.
            </p>
            <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
              Items and services shown are examples. Actual provisions depend
              on donations, partnerships, and community needs.
            </p>
          </div>

          <a
            href="#shop4free-get-involved"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start text-sm font-bold text-[#0B2265] transition-colors hover:text-[#00A3E0] sm:self-center"
          >
            Get involved
            <ArrowRightOutlined />
          </a>
        </motion.div>
      </div>
    </section>
  );
};