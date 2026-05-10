// components/Header.jsx
export default function Header({ name = "Erick Flores", credentials = "PMP, CCP", tagline = "Construction Project Controls & Data Engineering" }) {
  return (
    <header>
      <h1 className="titulo">
        {name} <span>{credentials}</span>
      </h1>
      <p className="tagline">{tagline}</p>
    </header>
  );
}