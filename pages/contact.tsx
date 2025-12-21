import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const LinkPill = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
  >
    {children}
    <Icon icon="eva:external-link-fill" className="text-xs opacity-50" />
  </a>
);

const Contact = () => {
  return (
    <Layout title="Ono Lab | Contact">
      <motion.div
        className={utilStyles.container}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className={utilStyles["page-header"]}>Contact</h1>
        <p className="text-gray-500 mb-10">Feel free to reach out anytime.</p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Principal Investigator
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Shuhei Ono
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <a
                    href="tel:6172530474"
                    className="hover:text-gray-900 transition-colors"
                  >
                    (617) 253-0474
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:sono@mit.edu"
                    className="hover:text-gray-900 transition-colors"
                  >
                    sono@mit.edu
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Address
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building 4-449
                <br />
                Department of Earth, Atmospheric, and Planetary Sciences
                <br />
                Massachusetts Institute of Technology
                <br />
                77 Massachusetts Avenue
                <br />
                Cambridge, MA 02139
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Collaborators
              </h2>
              <div className="flex flex-wrap gap-2">
                <LinkPill href="https://www.aerodyne.com/">
                  Aerodyne Research
                </LinkPill>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                MIT Geobiology Colleagues
              </h2>
              <div className="flex flex-wrap gap-2">
                <LinkPill href="http://summons.mit.edu/">
                  Roger Summons
                </LinkPill>
                <LinkPill href="http://bosaklab.scripts.mit.edu/">
                  Tanja Bosak
                </LinkPill>
                <LinkPill href="http://eaps-www.mit.edu/paoc/people/edward-boyle">
                  Ed Boyle
                </LinkPill>
                <LinkPill href="http://eaps.mit.edu/research/group/IGLab/bowring.html">
                  Sam Bowring
                </LinkPill>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
