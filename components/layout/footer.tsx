import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] mt-16 py-12">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Lab Info */}
          <div>
            <h2 className="text-[#ffffff] font-semibold text-lg mb-3">
              Ono Stable Isotope Laboratory
            </h2>
            <p className="text-[#888888] text-sm leading-relaxed">
              Department of Earth, Atmospheric,
              <br />
              and Planetary Sciences
              <br />
              Massachusetts Institute of Technology
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#888888] text-xs font-semibold uppercase tracking-wide mb-3">
              Contact
            </h3>
            <div className="space-y-1 text-sm">
              <p>
                <a
                  href="mailto:sono@mit.edu"
                  className="text-[#d1d1d1] hover:text-[#ffffff] transition-colors"
                >
                  sono@mit.edu
                </a>
              </p>
              <p>
                <a
                  href="tel:6172530474"
                  className="text-[#d1d1d1] hover:text-[#ffffff] transition-colors"
                >
                  (617) 253-0474
                </a>
              </p>
            </div>
          </div>

          {/* Logos */}
          <div className="flex items-center gap-8">
            <img
              src="/logos/mit.png"
              alt="MIT"
              className="h-8 brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
            />
            <img
              src="/logos/eaps.png"
              alt="EAPS"
              className="h-8 brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
            />
            <img
              src="/logos/dco.png"
              alt="DCO"
              className="h-8 brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#333333]">
          <p className="text-[#666666] text-xs">
            © {new Date().getFullYear()} Ono Laboratory, MIT. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
