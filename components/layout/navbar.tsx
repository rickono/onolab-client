import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden md:flex h-16 bg-[#1f1f1f] px-8 items-center justify-between">
      <Link
        href="/"
        className="text-[#ffffff] font-semibold tracking-wide text-base"
      >
        ONO LAB
      </Link>
      <ul className="flex items-center gap-2">
        <NavLink href="/">Home</NavLink>
        <NavLink
          href="https://scholar.google.com/citations?user=PM_eg3UAAAAJ&hl=en"
          external
        >
          Publications
        </NavLink>
        <NavLink href="/people">People</NavLink>
        <NavLink href="/media">Media</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => {
  const className =
    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#d1d1d1] hover:text-[#ffffff] transition-colors rounded hover:bg-[#ffffff10]";

  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {children}
          <Icon
            icon="eva:external-link-fill"
            className="text-[10px] opacity-50"
          />
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
