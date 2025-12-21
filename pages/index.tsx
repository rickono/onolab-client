import utilStyles from "../styles/utils.module.css";
import Carousel from "../components/carousel/carousel";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <Layout title="Ono Stable Isotope Laboratory">
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Carousel />

        <div className={utilStyles.container}>
          <section className="py-12 md:py-16">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
              About the Lab
            </h1>
            <div className="max-w-3xl space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Ono laboratory for stable isotope geochemistry studies how
                microbes catalyze chemical reactions and shape the chemistry of
                our atmosphere and oceans.
              </p>
              <p>
                Our laboratory has explored the early evolution of atmospheric
                oxygen using stable sulfur isotope systems and developed a novel
                tool to pinpoint the origin of methane, a significant long-lived
                greenhouse gas and key biosignature gas for space exploration.
              </p>
              <p>
                Our approach combines theoretical, experimental, and
                observational studies to answer significant questions in Earth
                science using stable isotopes as a versatile tool. We apply our
                tools to a broad range of problems in both low- and
                high-temperature geochemistry.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/people"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                Meet the Team
                <Icon icon="eva:arrow-forward-outline" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                View Projects
                <Icon icon="eva:arrow-forward-outline" />
              </Link>
            </div>
          </section>
        </div>
      </motion.div>
    </Layout>
  );
}
