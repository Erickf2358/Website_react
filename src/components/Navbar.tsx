import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: "Home",           to: "/" },
  //{ label: "EVM Guide",      to: "/evm-guide" },
  //{ label: "Data Science",   to: "/data-science" },
  //{ label: "Certifications", to: "/certifications" },
  //{ label: "Book Reviews",   to: "/book-reviews" },
  { label: "Consulting",     to: "/consulting" },
  { label: "Learning",        to: "/videos" },
  //{ label: "Newsletter",     to: "/newsletter" },
  //{ label: "About",          to: "/about" },
];

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <div className="nav-bg">
      <nav className="navegacion-principal contenedor">
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={pathname === to ? "active" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}