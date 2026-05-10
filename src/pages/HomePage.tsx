import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Header/>
      
      <NavBar />

      {/* Hero section */}
      <section className="hero">
        <div className="contenido-hero">
          <h2>Project Control & Cost Management <span>Specialist</span></h2>
          <div className="ubicacion">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFC107" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p>Melbourne, Australia</p>
          </div>
          <a className="boton" href="#contacto">Contact</a>
        </div>
      </section>

      <main className="contenedor sombra">
        <h2>Services & Expertise</h2>

        <div className="servicios">
          {/* Service cards */}
          <section className="servicio">
            <h3>Earned Value Management</h3>
            <div className="iconos">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-line" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="19" x2="20" y2="19" />
                <polyline points="4 15 8 9 12 11 16 6 20 10" />
              </svg>
            </div>
            <p>Expert implementation of Earned Value Management Systems (EVMS) to track project performance, forecast outcomes, and provide data-driven insights for informed decision-making and project success.</p>
          </section>

          <section className="servicio">
            <h3>Advanced Reporting</h3>
            <div className="iconos">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-analytics" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <path d="M9 17v-5" />
                <path d="M12 17v-1" />
                <path d="M15 17v-3" />
              </svg>
            </div>
            <p>Custom dashboard development and automated reporting solutions using Excel, Python, and Power BI. Transform raw data into actionable insights with interactive visualizations and real-time project metrics.</p>
          </section>

          <section className="servicio">
            <h3>Process Automation</h3>
            <div className="iconos">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings-automation" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <p>Python-powered automation solutions for repetitive project control tasks. Streamline data processing, reporting workflows, and integration between systems to increase efficiency and reduce manual errors.</p>
          </section>
        </div>

        <div className="quick-links">
          <h3>Explore the Knowledge Hub</h3>
          <div className="link-grid">
            <Link to="/videos#evm" className="link-card">
              <h4>EVM Guide</h4>
              <p>Practical Earned Value Management</p>
            </Link>
            
            <div>
              <h4>Data Science</h4>
              <p>Python for Construction</p>
            </div>
            <div>
              <h4>Certifications</h4>
              <p>Reality vs Hype Analysis</p>
            </div>
            <div>
              <h4>Book Reviews</h4>
              <p>Curated Professional Reading</p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section id="contacto" className="contacto">
          <h2>Contacto</h2>
          <div className="redes-sociales">
            <a href="https://www.linkedin.com/in/erick-flores-mendoza-11264612a/" target="_blank" rel="noreferrer" className="social-link linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@epm-lean5079" target="_blank" rel="noreferrer" className="social-link youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              YouTube
            </a>
            <a href="mailto:erick.flores.2358@gmail.com" className="social-link email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>All the rights reserved. Erick Flores Mendoza - PMP, CCP</p>
      </footer>
    </>
  )
}
