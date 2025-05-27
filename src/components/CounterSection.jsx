import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const stats = [
  { end: 29, label: "Websites" },
  { end: 10, label: "Projects", icon: <FaCheckCircle className="ml-2 text-green-400" /> },
  { end: 5, label: "Drafts" },
  { end: 3, label: "Running Projects" },
];

export default function CounterSection() {
  return (
    <section className=" bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-green-500/30 transition-transform hover:-translate-y-2"
            >
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-2">
                <CountUp end={stat.end} duration={2} />
              </div>
              <p className="text-lg font-semibold text-white flex items-center justify-center">
                {stat.label} {stat.icon && stat.icon}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
