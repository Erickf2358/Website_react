// components/Footer.jsx

export default function Footer({ text = "All the rights reserved. Erick Flores Mendoza - PMP, CCP" }) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}